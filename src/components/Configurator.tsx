"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, ArrowRight, Info } from 'lucide-react';
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
  { id: 'corner', name: 'УГЛОВАЯ', img: '/corner_shower_1780265656983.png' },
  { id: 'niche', name: 'В НИШУ', img: '/niche_shower_1780265669912.png' },
  { id: 'walk_in', name: 'СВОБОДНЫЙ ВХОД', img: '/walk_in_shower_1780265683414.png' },
  { id: 'u_shape', name: 'П-ОБРАЗНАЯ', img: '/u_shaped_shower_1780265694488.png' },
  { id: 'bath', name: 'ШТОРКА', img: '/bath_screen_1780265707096.png' }
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
    <div className="bg-white border border-black shadow-[8px_8px_0_rgba(0,0,0,1)] flex flex-col min-h-[600px] relative">
      
      {/* Top Bar */}
      <div className="border-b border-black flex justify-between items-center px-6 py-3 bg-gray-50">
        <div className="text-[10px] font-mono text-black/40 uppercase tracking-widest">
          SYSTEM_FORM // ID_0994
        </div>
        <div className="text-[10px] font-mono text-black uppercase tracking-widest">
          DWGGLASS CONFIGURATOR
        </div>
      </div>

      {/* Progress Indicator */}
      {step < 4 && (
        <div className="border-b border-black flex">
          {[1, 2, 3].map(i => (
            <div key={i} className={`flex-1 flex items-center justify-center py-4 border-r border-black last:border-r-0 transition-colors ${
              step === i ? 'bg-black text-white' : step > i ? 'bg-gray-100 text-black/30' : 'bg-white text-black/20'
            }`}>
              <span className="text-xs font-bold uppercase tracking-widest">
                {step > i ? 'DONE' : `ШАГ 0${i}`}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Form Content */}
      <form id="orderForm" onSubmit={handleSubmit(onSubmit)} className="flex-grow p-8 sm:p-12 flex flex-col justify-center">
        
        {/* Step 1: Cabin Type */}
        {step === 1 && (
          <div className="animate-in fade-in w-full">
            <h3 className="mb-8 text-sm font-bold uppercase tracking-widest border-b border-black/10 pb-4">01 // Форм-фактор</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-black/10 border border-black/10 mb-8">
              {CABIN_TYPES.map(type => (
                <div 
                  key={type.id}
                  onClick={() => { setValue("orderType", "template"); setValue("cabinType", type.name); }}
                  className={`relative cursor-pointer bg-white p-4 transition-colors hover:bg-gray-50 group ${
                    orderType === "template" && cabinType === type.name 
                      ? 'ring-2 ring-inset ring-black z-10' 
                      : ''
                  }`}
                >
                  <div className="relative aspect-square w-full mb-4 border border-black/10 overflow-hidden">
                    <Image src={type.img} alt={type.name} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all grayscale" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-center text-black/70 group-hover:text-black">
                    {type.name}
                  </div>
                  {orderType === "template" && cabinType === type.name && (
                    <div className="absolute top-2 right-2 bg-black text-white p-1 rounded-sm">
                      <Check size={12} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div 
              onClick={() => { setValue("orderType", "custom"); setValue("cabinType", ""); }}
              className={`cursor-pointer border border-black p-6 text-center transition-colors hover:bg-gray-50 flex items-center justify-between ${
                orderType === "custom" 
                  ? 'bg-black text-white hover:bg-black' 
                  : 'bg-white text-black'
              }`}
            >
              <div className="text-left">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Нестандартный проект</h4>
                <p className={`text-xs font-mono ${orderType === "custom" ? 'text-white/60' : 'text-black/40'}`}>
                  Сложная архитектура / Своя конфигурация
                </p>
              </div>
              <div className={`w-6 h-6 border flex items-center justify-center rounded-sm ${orderType === "custom" ? 'border-white bg-white text-black' : 'border-black/20 text-transparent'}`}>
                {orderType === "custom" && <Check size={14} />}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Dimensions or Custom Info */}
        {step === 2 && (
          <div className="animate-in fade-in w-full max-w-2xl mx-auto">
            {orderType === "template" ? (
              <>
                <h3 className="mb-8 text-sm font-bold uppercase tracking-widest border-b border-black/10 pb-4">02 // Габариты и Фурнитура</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/60">Ширина проема (мм)</label>
                    <input {...register("width")} type="number" className="w-full border-b border-black bg-transparent py-2 text-lg font-mono focus:outline-none focus:border-b-2" placeholder="0.0" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/60">Глубина (мм)</label>
                    <input {...register("depth")} type="number" className="w-full border-b border-black bg-transparent py-2 text-lg font-mono focus:outline-none focus:border-b-2" placeholder="0.0" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/60">Высота (мм)</label>
                    <input {...register("height")} type="number" className="w-full border-b border-black bg-transparent py-2 text-lg font-mono focus:outline-none focus:border-b-2" placeholder="2000.0" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 border border-black/10">
                    <Info className="text-black shrink-0" size={18} />
                    <div className="text-xs font-medium text-black/70 leading-relaxed">
                      <strong className="text-black uppercase tracking-widest block mb-1">Авто-расчет зазоров</strong>
                      Вставьте ссылки на купленную фурнитуру (Ozon, Леруа). Мы сами скачаем схемы производителя и заложим идеальные вырезы.
                    </div>
                  </div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black/60">Ссылки на фурнитуру</label>
                  <textarea {...register("hardware")} className="w-full border border-black bg-transparent p-4 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-black min-h-[100px] rounded-sm" placeholder="URL: https://..."></textarea>
                </div>
              </>
            ) : (
              <>
                <h3 className="mb-8 text-sm font-bold uppercase tracking-widest border-b border-black/10 pb-4">02 // Описание проекта</h3>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black/60">Требования к чертежу</label>
                  <textarea {...register("customDescription")} className="w-full border border-black bg-transparent p-4 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-black min-h-[250px] rounded-sm" placeholder="Опишите габариты, скосы потолка, наличие поддонов и другие архитектурные особенности..."></textarea>
                </div>
              </>
            )}
          </div>
        )}

        {/* Step 3: Contacts */}
        {step === 3 && (
          <div className="animate-in fade-in w-full max-w-xl mx-auto">
            <h3 className="mb-8 text-sm font-bold uppercase tracking-widest border-b border-black/10 pb-4">03 // Контакты</h3>
            <div className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black/60">ФИО *</label>
                <input {...register("name")} type="text" className={`w-full border-b ${errors.name ? 'border-red-500' : 'border-black'} bg-transparent py-2 text-lg focus:outline-none focus:border-b-2`} placeholder="Иван И." />
                {errors.name && <p className="text-red-500 text-xs mt-1 font-mono">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black/60">Телефон *</label>
                <input {...register("phone")} type="tel" className={`w-full border-b ${errors.phone ? 'border-red-500' : 'border-black'} bg-transparent py-2 text-lg focus:outline-none focus:border-b-2`} placeholder="+7 (999) 000-00-00" />
                {errors.phone && <p className="text-red-500 text-xs mt-1 font-mono">{errors.phone.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black/60">Telegram (Для отправки PDF)</label>
                <input {...register("telegram")} type="text" className="w-full border-b border-black bg-transparent py-2 text-lg focus:outline-none focus:border-b-2" placeholder="@username" />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Success / Payment */}
        {step === 4 && (
          <div className="animate-in fade-in text-center py-12">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center border-2 border-black rounded-full text-black">
              <Check size={32} />
            </div>
            <h2 className="mb-4 text-2xl font-black uppercase tracking-tight">Спецификация принята</h2>
            <p className="mx-auto mb-12 max-w-md text-black/60 font-medium">
              Оплатите разработку CAD-чертежа для передачи в конструкторский отдел.
            </p>
            
            <div className="mx-auto mb-12 max-w-sm border border-black p-8 text-left bg-gray-50">
               <div className="mb-6 flex justify-between items-center border-b border-black/10 pb-4">
                 <span className="text-xs font-bold uppercase tracking-widest">К оплате:</span>
                 <span className="text-xl font-mono font-bold">1 500 ₽</span>
               </div>
               <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-black/50">Реквизиты СБП (Сбербанк, Альфа)</p>
               <p className="mb-1 text-2xl font-mono tracking-wider font-bold">+7 900 123-45-67</p>
               <p className="text-xs font-mono text-black/60">Получатель: Иван И.</p>
            </div>

            <a href="https://wa.me/79001234567?text=Привет,%20оплатил(а)%20чертеж." target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-black px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-transform hover:-translate-y-1 rounded-sm shadow-xl shadow-black/20">
              Подтвердить платеж в WA <ArrowRight size={16} />
            </a>
          </div>
        )}

      </form>

      {/* Footer Navigation */}
      {step < 4 && (
        <div className="border-t border-black bg-gray-50 p-6 flex justify-between items-center">
          <button 
            type="button"
            onClick={() => setStep(prev => Math.max(prev - 1, 1))}
            className={`text-xs font-bold uppercase tracking-widest hover:text-black/60 transition-colors ${step > 1 ? 'text-black' : 'invisible'}`}
          >
            ← Назад
          </button>
          
          {step < 3 ? (
            <button 
              type="button"
              onClick={handleNext} 
              disabled={step === 1 && orderType === "template" && !cabinType}
              className="bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5 disabled:opacity-30 disabled:hover:translate-y-0 rounded-sm flex items-center gap-2"
            >
              Далее <ArrowRight size={14} />
            </button>
          ) : (
            <button 
              type="button"
              onClick={handleSubmit(onSubmit)} 
              disabled={loading}
              className="bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5 disabled:opacity-30 disabled:hover:translate-y-0 rounded-sm"
            >
              {loading ? 'ОБРАБОТКА...' : 'ПОЛУЧИТЬ ЧЕРТЕЖ'}
            </button>
          )}
        </div>
      )}

    </div>
  );
}
