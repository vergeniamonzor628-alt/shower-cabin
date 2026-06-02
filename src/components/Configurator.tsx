"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, ChevronRight, CheckCircle2, Info } from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
  orderType: z.enum(["template", "custom"]),
  cabinType: z.string().optional(),
  
  // Dimensions & Hardware
  width: z.string().optional(),
  height: z.string().optional(),
  depth: z.string().optional(),
  hardware: z.string().optional(),
  
  // Custom project
  customDescription: z.string().optional(),
  
  // Contacts
  name: z.string().min(2, "Имя слишком короткое"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  telegram: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CABIN_TYPES = [
  { id: 'corner', name: 'Угловая кабина', img: '/corner_shower_1780265656983.png' },
  { id: 'niche', name: 'В нишу', img: '/niche_shower_1780265669912.png' },
  { id: 'walk_in', name: 'Свободный вход', img: '/walk_in_shower_1780265683414.png' },
  { id: 'u_shape', name: 'П-образная', img: '/u_shaped_shower_1780265694488.png' },
  { id: 'bath', name: 'Шторка на ванну', img: '/bath_screen_1780265707096.png' }
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
      valid = true; // no strict validation for step 2 in MVP
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
    <div className="rounded-3xl border border-gray-800 bg-gray-950/50 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col min-h-[600px]">
      
      {/* Progress Indicator */}
      {step < 4 && (
        <div className="border-b border-gray-800 p-6 flex items-center justify-between bg-gray-900/50">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                  step >= i ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]' : 'bg-gray-800 text-gray-500'
                }`}>
                  {step > i ? <Check size={18} /> : i}
                </div>
                {i < 3 && <div className={`h-1 w-8 sm:w-16 mx-2 rounded-full transition-colors ${step > i ? 'bg-violet-600' : 'bg-gray-800'}`} />}
              </div>
            ))}
          </div>
          <span className="text-gray-400 font-medium hidden sm:block">Шаг {step} из 3</span>
        </div>
      )}

      {/* Form Content */}
      <form id="orderForm" onSubmit={handleSubmit(onSubmit)} className="flex-grow p-8 flex flex-col justify-center">
        
        {/* Step 1: Cabin Type */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
            <h3 className="mb-8 text-2xl font-bold text-center">Выберите конструкцию</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {CABIN_TYPES.map(type => (
                <div 
                  key={type.id}
                  onClick={() => { setValue("orderType", "template"); setValue("cabinType", type.name); }}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-4 transition-all hover:scale-[1.02] ${
                    orderType === "template" && cabinType === type.name 
                      ? 'border-violet-500 bg-violet-950/30 ring-2 ring-violet-500/50' 
                      : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'
                  }`}
                >
                  <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4 bg-gray-800">
                    <Image src={type.img} alt={type.name} fill className="object-cover transition-transform group-hover:scale-110" priority />
                  </div>
                  <div className="text-lg font-semibold text-center">{type.name}</div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-800" /></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-gray-950 px-2 text-gray-500">или</span></div>
            </div>

            <div 
              onClick={() => { setValue("orderType", "custom"); setValue("cabinType", ""); }}
              className={`mt-8 cursor-pointer rounded-2xl border p-6 text-center transition-all hover:scale-[1.01] ${
                orderType === "custom" 
                  ? 'border-violet-500 bg-violet-950/30 ring-2 ring-violet-500/50' 
                  : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'
              }`}
            >
              <h4 className="text-xl font-bold mb-2">Индивидуальная консультация (вне шаблонов)</h4>
              <p className="text-gray-400">Сложный проект или не нашли подходящую форму? Напишите нам, мы подготовим нестандартное решение.</p>
            </div>
          </div>
        )}

        {/* Step 2: Dimensions or Custom Info */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto w-full">
            {orderType === "template" ? (
              <>
                <h3 className="mb-2 text-2xl font-bold">Параметры кабины</h3>
                <p className="mb-8 text-gray-400">Укажите известные размеры и ссылки на желаемую фурнитуру.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Ширина проема (мм)</label>
                    <input {...register("width")} type="number" className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" placeholder="Например: 900" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Глубина (мм)</label>
                    <input {...register("depth")} type="number" className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" placeholder="Если есть" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-gray-300">Высота (мм)</label>
                    <input {...register("height")} type="number" className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" placeholder="Стандартная: 2000" />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2 mt-4">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-violet-500/10 border border-violet-500/30 mb-4">
                      <Info className="text-violet-400 mt-0.5" size={20} />
                      <div className="text-sm text-gray-300">
                        <strong className="text-violet-300 block mb-1">О фурнитуре и зазорах</strong>
                        Если вы не знаете точные вырезы для стекла — просто вставьте сюда ссылки на фурнитуру, которую хотите купить. Мы сами рассчитаем зазоры под неё для производства.
                      </div>
                    </div>
                    <label className="text-sm font-medium text-gray-300">Ссылки на фурнитуру или конкретные зазоры</label>
                    <textarea {...register("hardware")} className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 min-h-[120px]" placeholder="Например: https://ozon.ru/..."></textarea>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="mb-2 text-2xl font-bold">Опишите вашу идею</h3>
                <p className="mb-8 text-gray-400">Мы любим нестандартные задачи. Расскажите подробнее о вашем проекте.</p>
                <div className="space-y-2">
                  <textarea {...register("customDescription")} className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 min-h-[250px]" placeholder="Здравствуйте, мне нужна кабина под скошенный потолок мансарды..."></textarea>
                </div>
              </>
            )}
          </div>
        )}

        {/* Step 3: Contacts */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-xl mx-auto w-full">
            <h3 className="mb-8 text-2xl font-bold text-center">Куда прислать готовое ТЗ?</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Ваше имя *</label>
                <input {...register("name")} type="text" className={`w-full rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-800'} bg-gray-900 p-4 text-white focus:outline-none focus:ring-1`} placeholder="Иван" />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Телефон *</label>
                <input {...register("phone")} type="tel" className={`w-full rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-800'} bg-gray-900 p-4 text-white focus:outline-none focus:ring-1`} placeholder="+7 (999) 000-00-00" />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Telegram (никнейм)</label>
                <input {...register("telegram")} type="text" className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" placeholder="@username" />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Success / Payment */}
        {step === 4 && (
          <div className="animate-in fade-in zoom-in-95 duration-700 text-center py-12">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-violet-500/20 text-violet-500">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="mb-4 text-3xl font-bold">Заявка принята в работу!</h2>
            <p className="mx-auto mb-8 max-w-md text-lg text-gray-400">
              Даниил уже получил ваши данные. Оплатите подготовку чертежа (ТЗ) для запуска работы.
            </p>
            
            <div className="mx-auto mb-8 max-w-sm rounded-2xl border border-gray-800 bg-gray-900 p-6 text-left shadow-xl">
               <div className="mb-4 flex justify-between items-center border-b border-gray-800 pb-4">
                 <span className="text-lg font-medium text-gray-300">Стоимость ТЗ:</span>
                 <span className="text-2xl font-bold text-violet-400">1 500 ₽</span>
               </div>
               <p className="mb-2 text-sm text-gray-400">Перевод по СБП (Сбербанк, Альфа):</p>
               <p className="mb-1 text-xl font-mono tracking-wider text-white">+7 900 123-45-67</p>
               <p className="text-sm text-gray-500">Получатель: Иван И.</p>
            </div>

            <a href="https://wa.me/79001234567?text=Привет,%20оплатил(а)%20чертеж." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-medium text-white transition hover:bg-green-500 shadow-lg shadow-green-600/20">
              Отправить чек в WhatsApp →
            </a>
          </div>
        )}

      </form>

      {/* Footer Navigation */}
      {step < 4 && (
        <div className="border-t border-gray-800 bg-gray-900/50 p-6 flex justify-between">
          <button 
            type="button"
            onClick={() => setStep(prev => Math.max(prev - 1, 1))}
            className={`rounded-xl px-6 py-3 font-medium transition-colors ${step > 1 ? 'bg-gray-800 text-white hover:bg-gray-700' : 'invisible'}`}
          >
            Назад
          </button>
          
          {step < 3 ? (
            <button 
              type="button"
              onClick={handleNext} 
              disabled={step === 1 && orderType === "template" && !cabinType}
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-3 font-medium text-white transition-all hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Далее <ChevronRight size={18} />
            </button>
          ) : (
            <button 
              type="button"
              onClick={handleSubmit(onSubmit)} 
              disabled={loading}
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-3 font-medium text-white transition-all hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Формируем...' : 'Получить чертеж'}
            </button>
          )}
        </div>
      )}

    </div>
  );
}
