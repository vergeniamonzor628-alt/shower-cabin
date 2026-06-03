"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
  orderType: z.enum(["template", "custom"]),
  cabinType: z.string().optional(),
  
  width: z.string().optional(),
  height: z.string().optional(),
  depth: z.string().optional(),
  hardware: z.string().optional(),
  
  customDescription: z.string().optional(),
  
  name: z.string().min(2, "Обязательно"),
  phone: z.string().min(10, "Обязательно"),
  telegram: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CABIN_TYPES = [
  { id: 'corner', name: 'Угловая кабина', img: '/corner_shower_fresh_1780443230529.png' },
  { id: 'niche', name: 'Дверь в нишу', img: '/niche_shower_fresh_1780443241693.png' },
  { id: 'walk_in', name: 'Свободный вход', img: '/walk_in_shower_fresh_1780443251326.png' },
  { id: 'u_shape', name: 'П-образная', img: '/u_shaped_shower_fresh_1780443260615.png' },
  { id: 'bath', name: 'Шторка на ванну', img: '/bath_screen_fresh_1780443270220.png' }
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
      // Имитация отправки
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
    <div className="bg-white/80 backdrop-blur-xl shadow-2xl shadow-primary/10 rounded-[2rem] flex flex-col min-h-[650px] relative overflow-hidden border border-white">
      
      {/* Progress Indicator */}
      {step < 4 && (
        <div className="flex border-b border-border/40 bg-white/50">
          {[
            { num: 1, label: "Архитектура" },
            { num: 2, label: "Размеры" },
            { num: 3, label: "Контакты" }
          ].map(s => (
            <div key={s.num} className={`flex-1 flex flex-col items-center justify-center py-5 border-r border-border/40 last:border-r-0 relative transition-colors ${step === s.num ? 'bg-primary/5 text-primary' : 'text-muted-foreground'}`}>
              <div className={`text-[10px] uppercase tracking-widest font-bold mb-1 ${step >= s.num ? 'text-primary' : 'text-muted-foreground/50'}`}>
                Шаг 0{s.num}
              </div>
              <div className={`text-sm font-serif font-medium ${step >= s.num ? 'text-foreground' : 'text-muted-foreground'}`}>
                {s.label}
              </div>
              {/* Active indicator line */}
              {step === s.num && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Form Content */}
      <form id="orderForm" onSubmit={handleSubmit(onSubmit)} className="flex-grow p-6 sm:p-10 flex flex-col justify-center relative z-10">
        
        {/* Step 1: Cabin Type */}
        {step === 1 && (
          <div className="animate-in fade-in zoom-in-95 duration-300 w-full">
            <h3 className="mb-8 text-2xl font-serif font-medium text-foreground text-center">
              Выберите тип конструкции
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {CABIN_TYPES.map(type => (
                <div 
                  key={type.id}
                  onClick={() => { setValue("orderType", "template"); setValue("cabinType", type.name); }}
                  className={`cursor-pointer rounded-2xl p-3 transition-all duration-300 group ${
                    orderType === "template" && cabinType === type.name 
                      ? 'bg-white shadow-xl shadow-primary/15 ring-2 ring-primary scale-[1.02]' 
                      : 'bg-white/50 hover:bg-white hover:shadow-lg ring-1 ring-border/50'
                  }`}
                >
                  <div className="relative aspect-[4/5] w-full mb-4 rounded-xl overflow-hidden bg-muted/30">
                    <Image src={type.img} alt={type.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className={`text-sm font-medium text-center transition-colors ${
                    orderType === "template" && cabinType === type.name ? 'text-primary' : 'text-foreground'
                  }`}>
                    {type.name}
                  </div>
                </div>
              ))}
            </div>

            <div 
              onClick={() => { setValue("orderType", "custom"); setValue("cabinType", ""); }}
              className={`cursor-pointer rounded-2xl p-6 text-center transition-all duration-300 ${
                orderType === "custom" 
                  ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-[1.01]' 
                  : 'bg-white/50 ring-1 ring-border/50 hover:bg-white hover:shadow-lg text-foreground'
              }`}
            >
              <h4 className="text-lg font-serif font-medium mb-2">Нестандартный проект</h4>
              <p className={`text-sm font-light ${orderType === "custom" ? 'text-white/80' : 'text-muted-foreground'}`}>
                Мансардные скосы, вырезы под трубы, сложная геометрия.
              </p>
            </div>
          </div>
        )}

        {/* Step 2: Dimensions */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-300 w-full max-w-3xl mx-auto">
            
            {orderType === "template" ? (
              <>
                <h3 className="mb-8 text-2xl font-serif font-medium text-foreground text-center">
                  Укажите габариты (в мм)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-foreground">Ширина проема</label>
                    <input {...register("width")} type="number" className="w-full rounded-xl border border-border/50 bg-white/50 px-5 py-4 text-lg text-foreground shadow-inner focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" placeholder="Например: 900" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-foreground">Глубина (если есть)</label>
                    <input {...register("depth")} type="number" className="w-full rounded-xl border border-border/50 bg-white/50 px-5 py-4 text-lg text-foreground shadow-inner focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" placeholder="Например: 900" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-foreground">Высота по стеклу</label>
                    <input {...register("height")} type="number" className="w-full rounded-xl border border-border/50 bg-white/50 px-5 py-4 text-lg text-foreground shadow-inner focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" placeholder="Например: 2000" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-xl bg-primary/5 p-5 border border-primary/10">
                    <Zap className="text-primary shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Фурнитура</p>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Укажите ссылки на петли, коннекторы или ручки, которые вы планируете купить. Инженер должен учесть отверстия для них.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <textarea {...register("hardware")} className="w-full rounded-xl border border-border/50 bg-white/50 px-5 py-4 text-sm text-foreground shadow-inner focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all min-h-[100px]" placeholder="Вставьте ссылки сюда..."></textarea>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="mb-8 text-2xl font-serif font-medium text-foreground text-center">
                  Опишите ваш проект
                </h3>
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-foreground">Детали и размеры</label>
                  <textarea {...register("customDescription")} className="w-full rounded-xl border border-border/50 bg-white/50 px-5 py-4 text-sm text-foreground shadow-inner focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all min-h-[250px] leading-relaxed" placeholder="Опишите габариты, наличие уклона потолка, вырезы под бортик и т.д."></textarea>
                </div>
              </>
            )}
          </div>
        )}

        {/* Step 3: Contacts */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-300 w-full max-w-xl mx-auto">
             <h3 className="mb-8 text-2xl font-serif font-medium text-foreground text-center">
              Куда отправить чертеж?
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-foreground">Ваше Имя</label>
                <input {...register("name")} type="text" className={`w-full rounded-xl border ${errors.name ? 'border-destructive bg-destructive/5' : 'border-border/50 bg-white/50'} px-5 py-4 text-lg text-foreground shadow-inner focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all`} placeholder="Иван" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-foreground">Телефон (WhatsApp)</label>
                <input {...register("phone")} type="tel" className={`w-full rounded-xl border ${errors.phone ? 'border-destructive bg-destructive/5' : 'border-border/50 bg-white/50'} px-5 py-4 text-lg text-foreground shadow-inner focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all`} placeholder="+7 (999) 000-00-00" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-foreground">Telegram (по желанию)</label>
                <input {...register("telegram")} type="text" className="w-full rounded-xl border border-border/50 bg-white/50 px-5 py-4 text-lg text-foreground shadow-inner focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" placeholder="@username" />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="animate-in fade-in zoom-in-95 duration-300 w-full max-w-xl mx-auto text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check size={40} />
            </div>
            <h2 className="mb-4 text-3xl font-serif font-medium text-foreground">Заявка принята</h2>
            <p className="mb-10 text-muted-foreground font-light">
              Мы получили данные. Чтобы инженер приступил к чертежу, пожалуйста, оплатите проект (окупается в 15-20 раз за счет отказа от салонов).
            </p>
            
            <div className="mx-auto mb-10 max-w-sm rounded-2xl bg-white p-8 shadow-xl shadow-primary/5 border border-border/40 text-left">
               <div className="mb-6 flex justify-between items-end border-b border-border/40 pb-6">
                 <span className="text-sm font-medium text-muted-foreground">Стоимость чертежа</span>
                 <span className="text-2xl font-serif font-semibold text-foreground">1 500 ₽</span>
               </div>
               <p className="mb-2 text-sm text-muted-foreground">Перевод по СБП на номер:</p>
               <p className="mb-2 text-xl font-medium text-foreground">+7 900 123-45-67</p>
               <p className="text-sm text-muted-foreground">Сбербанк или Тинькофф (Иван И.)</p>
            </div>

            <a href="https://wa.me/79001234567?text=Привет,%20перевел(а)%20за%20чертеж." target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-primary/30">
              Написать в WhatsApp
            </a>
          </div>
        )}

      </form>

      {/* Footer Navigation */}
      {step < 4 && (
        <div className="border-t border-border/40 bg-white/50 p-6 flex justify-between items-center relative z-10 rounded-b-[2rem]">
          <button 
            type="button"
            onClick={() => setStep(prev => Math.max(prev - 1, 1))}
            className={`rounded-full px-6 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors ${step > 1 ? 'visible' : 'invisible'}`}
          >
            Назад
          </button>
          
          {step < 3 ? (
            <button 
              type="button"
              onClick={handleNext} 
              disabled={step === 1 && orderType === "template" && !cabinType}
              className="rounded-full bg-foreground text-background px-8 py-3 text-sm font-semibold transition-all hover:bg-primary disabled:opacity-50 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              Далее <ArrowRight size={16} />
            </button>
          ) : (
            <button 
              type="button"
              onClick={handleSubmit(onSubmit)} 
              disabled={loading}
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-foreground disabled:opacity-50 shadow-md shadow-primary/20 hover:shadow-lg"
            >
              {loading ? 'Отправка...' : 'Отправить инженеру'}
            </button>
          )}
        </div>
      )}

    </div>
  );
}
