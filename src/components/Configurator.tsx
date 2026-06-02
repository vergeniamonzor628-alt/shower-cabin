"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, ArrowRight, Info, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
  orderType: z.enum(["template", "custom"]),
  cabinType: z.string().optional(),
  
  width: z.string().optional(),
  height: z.string().optional(),
  depth: z.string().optional(),
  hardware: z.string().optional(),
  
  customDescription: z.string().optional(),
  
  name: z.string().min(2, "Имя слишком короткое"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  telegram: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CABIN_TYPES = [
  { id: 'corner', name: 'Угловая', img: '/corner_shower_1780439399966.png' },
  { id: 'niche', name: 'В нишу', img: '/niche_shower_1780439410356.png' },
  { id: 'walk_in', name: 'Свободный вход', img: '/walk_in_shower_1780439433766.png' },
  { id: 'u_shape', name: 'П-образная', img: '/u_shaped_shower_1780439443821.png' },
  { id: 'bath', name: 'Шторка на ванну', img: '/bath_screen_1780439453300.png' }
];

export default function Configurator() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, setValue, trigger, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orderType: "template",
    }
  });

  const orderType = watch("orderType");
  const cabinType = watch("cabinType");

  const handleNext = async () => {
    let valid = false;
    if (step === 1) {
      if (orderType === "custom" || cabinType) valid = true;
    } else if (step === 2) {
      valid = true;
    } else if (step === 3) {
      valid = await trigger(["name", "phone"]);
    }
    
    if (valid) setStep(prev => Math.min(prev + 1, 4));
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    try {
      const res = await fetch('/api/submit-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) setStep(4);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col min-h-[600px] relative">
      
      {/* Progress Indicator */}
      {step < 4 && (
        <div className="flex border-b border-white/5 bg-white/[0.02]">
          {[
            { num: 1, label: "Форм-фактор" },
            { num: 2, label: "Параметры" },
            { num: 3, label: "Контакты" }
          ].map(s => (
            <div key={s.num} className="flex-1 flex flex-col items-center justify-center py-4 relative">
              <div className={`text-xs font-semibold uppercase tracking-wider mb-1 transition-colors ${
                step === s.num ? 'text-violet-400' : step > s.num ? 'text-emerald-400' : 'text-slate-600'
              }`}>
                Шаг {s.num}
              </div>
              <div className={`text-sm font-medium transition-colors ${
                step === s.num ? 'text-white' : step > s.num ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {s.label}
              </div>
              {/* Active indicator line */}
              {step === s.num && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 to-indigo-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Form Content */}
      <form id="orderForm" onSubmit={handleSubmit(onSubmit)} className="flex-grow p-6 sm:p-10 flex flex-col justify-center relative z-10">
        
        {/* Step 1: Cabin Type */}
        {step === 1 && (
          <div className="animate-in fade-in zoom-in-95 duration-500 w-full">
            <h3 className="mb-6 text-xl font-semibold text-white">Выберите тип душевой</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {CABIN_TYPES.map(type => (
                <div 
                  key={type.id}
                  onClick={() => { setValue("orderType", "template"); setValue("cabinType", type.name); }}
                  className={`relative cursor-pointer rounded-2xl border p-4 transition-all hover:bg-white/5 group overflow-hidden ${
                    orderType === "template" && cabinType === type.name 
                      ? 'border-violet-500 bg-violet-500/10 shadow-[0_0_15px_rgba(139,92,246,0.15)]' 
                      : 'border-white/10 bg-white/5'
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full mb-3 rounded-lg overflow-hidden border border-white/10">
                    <Image src={type.img} alt={type.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className={`text-sm font-medium text-center transition-colors ${
                    orderType === "template" && cabinType === type.name ? 'text-white' : 'text-slate-300'
                  }`}>
                    {type.name}
                  </div>
                  {orderType === "template" && cabinType === type.name && (
                    <div className="absolute top-2 right-2 bg-violet-500 text-white p-1 rounded-full shadow-lg">
                      <Check size={14} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div 
              onClick={() => { setValue("orderType", "custom"); setValue("cabinType", ""); }}
              className={`cursor-pointer rounded-2xl border p-6 text-center transition-all flex items-center justify-between ${
                orderType === "custom" 
                  ? 'border-violet-500 bg-violet-500/10 shadow-[0_0_15px_rgba(139,92,246,0.15)]' 
                  : 'border-white/10 bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="text-left">
                <h4 className={`text-base font-semibold mb-1 ${orderType === "custom" ? 'text-white' : 'text-slate-300'}`}>Нестандартный проект</h4>
                <p className="text-sm text-slate-500">
                  Сложная архитектура, скосы крыши, много граней
                </p>
              </div>
              <div className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${orderType === "custom" ? 'border-violet-500 bg-violet-500 text-white' : 'border-white/20 text-transparent'}`}>
                {orderType === "custom" && <Check size={16} />}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Dimensions or Custom Info */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full max-w-2xl mx-auto">
            {orderType === "template" ? (
              <>
                <h3 className="mb-8 text-xl font-semibold text-white">Укажите габариты ниши</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Ширина проема (мм)</label>
                    <input {...register("width")} type="number" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors" placeholder="Например: 900" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Глубина (мм)</label>
                    <input {...register("depth")} type="number" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors" placeholder="Например: 900" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Высота (мм)</label>
                    <input {...register("height")} type="number" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors" placeholder="Например: 2000" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                    <Info className="text-emerald-400 shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">Фурнитура и зазоры</p>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Просто вставьте ссылки на фурнитуру, которую планируете купить (Ozon, Леруа и т.д.). Мы скачаем схемы производителя и заложим идеальные вырезы в стекле.
                      </p>
                    </div>
                  </div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Ссылки на петли / ручку</label>
                  <textarea {...register("hardware")} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors min-h-[100px]" placeholder="URL: https://..."></textarea>
                </div>
              </>
            ) : (
              <>
                <h3 className="mb-6 text-xl font-semibold text-white">Опишите вашу задачу</h3>
                <div className="space-y-2">
                  <textarea {...register("customDescription")} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder-slate-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors min-h-[250px]" placeholder="Опишите габариты, наличие уклона крыши, количество стекол и другие особенности..."></textarea>
                </div>
              </>
            )}
          </div>
        )}

        {/* Step 3: Contacts */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full max-w-xl mx-auto">
            <h3 className="mb-8 text-xl font-semibold text-white">Куда отправить готовый файл?</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Ваше имя *</label>
                <input {...register("name")} type="text" className={`w-full rounded-xl border ${errors.name ? 'border-red-500 bg-red-500/5' : 'border-white/10 bg-white/5'} px-4 py-3 text-white placeholder-slate-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors`} placeholder="Иван" />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Телефон (WhatsApp) *</label>
                <input {...register("phone")} type="tel" className={`w-full rounded-xl border ${errors.phone ? 'border-red-500 bg-red-500/5' : 'border-white/10 bg-white/5'} px-4 py-3 text-white placeholder-slate-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors`} placeholder="+7 (999) 000-00-00" />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Telegram (Для отправки PDF/DWG)</label>
                <input {...register("telegram")} type="text" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors" placeholder="@username" />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Success / Payment */}
        {step === 4 && (
          <div className="animate-in fade-in zoom-in-95 duration-500 text-center py-12">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white">Техническое задание принято</h2>
            <p className="mx-auto mb-10 max-w-md text-slate-400">
              Мы начали обработку параметров. Оплатите разработку CAD-чертежа, чтобы инженер взял его в работу.
            </p>
            
            <div className="mx-auto mb-10 max-w-sm rounded-2xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur-sm">
               <div className="mb-6 flex justify-between items-center border-b border-white/10 pb-4">
                 <span className="text-sm font-semibold text-slate-400">Сумма к оплате:</span>
                 <span className="text-2xl font-bold text-white">1 500 ₽</span>
               </div>
               <p className="mb-2 text-xs font-semibold text-slate-500">Перевод по номеру (СБП)</p>
               <p className="mb-1 text-xl font-medium tracking-wide text-white">+7 900 123-45-67</p>
               <p className="text-sm text-slate-400">Получатель: Иван И. (Сбербанк, Тинькофф)</p>
            </div>

            <a href="https://wa.me/79001234567?text=Привет,%20оплатил(а)%20чертеж." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              Подтвердить оплату в WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        )}

      </form>

      {/* Footer Navigation */}
      {step < 4 && (
        <div className="border-t border-white/5 bg-white/[0.02] p-6 flex justify-between items-center relative z-10">
          <button 
            type="button"
            onClick={() => setStep(prev => Math.max(prev - 1, 1))}
            className={`px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors ${step > 1 ? 'visible' : 'invisible'}`}
          >
            Назад
          </button>
          
          {step < 3 ? (
            <button 
              type="button"
              onClick={handleNext} 
              disabled={step === 1 && orderType === "template" && !cabinType}
              className="rounded-full bg-white text-black px-8 py-3 text-sm font-bold transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-2"
            >
              Далее <ArrowRight size={16} />
            </button>
          ) : (
            <button 
              type="button"
              onClick={handleSubmit(onSubmit)} 
              disabled={loading}
              className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3 text-sm font-bold text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] disabled:opacity-50 disabled:hover:scale-100"
            >
              {loading ? 'Обработка...' : 'Отправить заказ'}
            </button>
          )}
        </div>
      )}

    </div>
  );
}
