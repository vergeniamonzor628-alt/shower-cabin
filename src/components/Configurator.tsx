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
  
  name: z.string().min(2, "Укажите ваше имя"),
  phone: z.string().min(10, "Укажите телефон"),
  telegram: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CABIN_TYPES = [
  { id: 'corner', name: 'Угловая кабина', img: '/corner_shower_fresh_1780443230529.png' },
  { id: 'niche', name: 'Душевая в нишу', img: '/niche_shower_fresh_1780443241693.png' },
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
    <div className="rounded-2xl border border-border/50 bg-background shadow-sm overflow-hidden flex flex-col min-h-[600px] relative">
      
      {/* Progress Indicator */}
      {step < 4 && (
        <div className="flex border-b border-border/50 bg-white">
          {[
            { num: 1, label: "Форм-фактор" },
            { num: 2, label: "Параметры" },
            { num: 3, label: "Контакты" }
          ].map(s => (
            <div key={s.num} className="flex-1 flex flex-col items-center justify-center py-6 relative">
              <div className={`text-xs uppercase tracking-widest font-semibold mb-1 transition-colors ${
                step === s.num ? 'text-primary' : step > s.num ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                Шаг {s.num}
              </div>
              <div className={`text-sm font-medium transition-colors ${
                step === s.num ? 'text-foreground' : step > s.num ? 'text-foreground' : 'text-muted-foreground'
              }`}>
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
      <form id="orderForm" onSubmit={handleSubmit(onSubmit)} className="flex-grow bg-white p-8 sm:p-12 flex flex-col justify-center relative z-10">
        
        {/* Step 1: Cabin Type */}
        {step === 1 && (
          <div className="animate-in fade-in zoom-in-95 duration-500 w-full">
            <h3 className="mb-8 text-2xl font-serif font-medium text-foreground text-center">Выберите архитектуру кабины</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {CABIN_TYPES.map(type => (
                <div 
                  key={type.id}
                  onClick={() => { setValue("orderType", "template"); setValue("cabinType", type.name); }}
                  className={`relative cursor-pointer rounded-xl border p-3 transition-all hover:border-primary group overflow-hidden ${
                    orderType === "template" && cabinType === type.name 
                      ? 'border-primary ring-1 ring-primary shadow-sm bg-primary/5' 
                      : 'border-border/60 bg-white'
                  }`}
                >
                  <div className="relative aspect-[4/5] w-full mb-4 rounded-lg overflow-hidden bg-background">
                    <Image src={type.img} alt={type.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className={`text-sm font-medium text-center transition-colors pb-2 ${
                    orderType === "template" && cabinType === type.name ? 'text-primary' : 'text-foreground'
                  }`}>
                    {type.name}
                  </div>
                  {orderType === "template" && cabinType === type.name && (
                    <div className="absolute top-4 right-4 bg-primary text-white p-1 rounded-full shadow-sm">
                      <Check size={14} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div 
              onClick={() => { setValue("orderType", "custom"); setValue("cabinType", ""); }}
              className={`cursor-pointer rounded-xl border p-6 text-center transition-all flex items-center justify-between ${
                orderType === "custom" 
                  ? 'border-primary ring-1 ring-primary shadow-sm bg-primary/5' 
                  : 'border-border/60 bg-white hover:border-primary'
              }`}
            >
              <div className="text-left">
                <h4 className={`text-base font-semibold mb-1 ${orderType === "custom" ? 'text-primary' : 'text-foreground'}`}>Нестандартный проект</h4>
                <p className="text-sm text-muted-foreground font-light">
                  Сложная архитектура, уклоны потолка, мансарды
                </p>
              </div>
              <div className={`flex h-6 w-6 items-center justify-center rounded-full border transition-colors ${orderType === "custom" ? 'border-primary bg-primary text-white' : 'border-border text-transparent'}`}>
                {orderType === "custom" && <Check size={14} />}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Dimensions or Custom Info */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full max-w-2xl mx-auto">
            {orderType === "template" ? (
              <>
                <h3 className="mb-10 text-2xl font-serif font-medium text-foreground text-center">Пространственные данные</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Ширина проема (мм)</label>
                    <input {...register("width")} type="number" className="w-full border-0 border-b-2 border-border/60 bg-transparent px-0 py-2 text-xl text-foreground placeholder-muted-foreground focus:border-primary focus:ring-0 transition-colors" placeholder="Например: 900" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Глубина (мм)</label>
                    <input {...register("depth")} type="number" className="w-full border-0 border-b-2 border-border/60 bg-transparent px-0 py-2 text-xl text-foreground placeholder-muted-foreground focus:border-primary focus:ring-0 transition-colors" placeholder="Например: 900" />
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Высота (мм)</label>
                    <input {...register("height")} type="number" className="w-full border-0 border-b-2 border-border/60 bg-transparent px-0 py-2 text-xl text-foreground placeholder-muted-foreground focus:border-primary focus:ring-0 transition-colors" placeholder="Например: 2000" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 rounded-xl border border-primary/20 bg-primary/5 p-6">
                    <Info className="text-primary shrink-0 mt-0.5" size={24} />
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Техническое оснащение</p>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        Для точного расчета технологических отверстий, предоставьте ссылки на выбранную фурнитуру (петли, коннекторы, ручки).
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Ссылки на фурнитуру</label>
                    <textarea {...register("hardware")} className="w-full rounded-xl border border-border/60 bg-background px-4 py-4 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors min-h-[120px] font-light" placeholder="https://..."></textarea>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="mb-10 text-2xl font-serif font-medium text-foreground text-center">Спецификация проекта</h3>
                <div className="space-y-3">
                  <textarea {...register("customDescription")} className="w-full rounded-xl border border-border/60 bg-background px-6 py-6 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors min-h-[300px] text-lg font-light leading-relaxed" placeholder="Опишите габариты, наличие уклона крыши, количество стекол и другие особенности вашего интерьера..."></textarea>
                </div>
              </>
            )}
          </div>
        )}

        {/* Step 3: Contacts */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full max-w-xl mx-auto">
            <h3 className="mb-10 text-2xl font-serif font-medium text-foreground text-center">Данные для получения</h3>
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Ваше имя</label>
                <input {...register("name")} type="text" className={`w-full border-0 border-b-2 ${errors.name ? 'border-destructive' : 'border-border/60'} bg-transparent px-0 py-2 text-xl text-foreground focus:border-primary focus:ring-0 transition-colors`} placeholder="Иван" />
              </div>
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Телефон (WhatsApp)</label>
                <input {...register("phone")} type="tel" className={`w-full border-0 border-b-2 ${errors.phone ? 'border-destructive' : 'border-border/60'} bg-transparent px-0 py-2 text-xl text-foreground focus:border-primary focus:ring-0 transition-colors`} placeholder="+7 (999) 000-00-00" />
              </div>
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Telegram (опционально)</label>
                <input {...register("telegram")} type="text" className="w-full border-0 border-b-2 border-border/60 bg-transparent px-0 py-2 text-xl text-foreground focus:border-primary focus:ring-0 transition-colors" placeholder="@username" />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Success / Payment */}
        {step === 4 && (
          <div className="animate-in fade-in zoom-in-95 duration-500 text-center py-16">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 size={48} strokeWidth={1.5} />
            </div>
            <h2 className="mb-6 text-4xl font-serif font-medium text-foreground">Заявка оформлена</h2>
            <p className="mx-auto mb-12 max-w-lg text-muted-foreground font-light text-lg">
              Мы получили вводные данные. Для передачи проекта инженеру, пожалуйста, подтвердите разработку чертежа.
            </p>
            
            <div className="mx-auto mb-12 max-w-sm rounded-2xl border border-border/50 bg-background p-8 text-left shadow-sm">
               <div className="mb-6 flex justify-between items-center border-b border-border/50 pb-6">
                 <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">К оплате</span>
                 <span className="text-3xl font-light text-foreground">1 500 ₽</span>
               </div>
               <p className="mb-2 text-xs uppercase tracking-widest font-semibold text-muted-foreground">Перевод СБП</p>
               <p className="mb-2 text-xl font-medium tracking-wide text-foreground">+7 900 123-45-67</p>
               <p className="text-sm text-muted-foreground font-light">Получатель: Иван И. (Сбербанк, Тинькофф)</p>
            </div>

            <a href="https://wa.me/79001234567?text=Привет,%20оплатил(а)%20чертеж." target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm uppercase tracking-widest font-bold text-white transition-all hover:opacity-90">
              Подтвердить в WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        )}

      </form>

      {/* Footer Navigation */}
      {step < 4 && (
        <div className="border-t border-border/50 bg-background p-6 px-8 flex justify-between items-center relative z-10">
          <button 
            type="button"
            onClick={() => setStep(prev => Math.max(prev - 1, 1))}
            className={`px-4 py-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors ${step > 1 ? 'visible' : 'invisible'}`}
          >
            Назад
          </button>
          
          {step < 3 ? (
            <button 
              type="button"
              onClick={handleNext} 
              disabled={step === 1 && orderType === "template" && !cabinType}
              className="rounded-full bg-foreground text-background px-8 py-3 text-sm font-bold uppercase tracking-widest transition-transform hover:bg-primary disabled:opacity-30 flex items-center gap-2"
            >
              Далее <ArrowRight size={16} />
            </button>
          ) : (
            <button 
              type="button"
              onClick={handleSubmit(onSubmit)} 
              disabled={loading}
              className="rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all hover:opacity-90 disabled:opacity-50"
            >
              {loading ? 'Обработка...' : 'Отправить'}
            </button>
          )}
        </div>
      )}

    </div>
  );
}
