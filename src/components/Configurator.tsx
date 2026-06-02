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
    <div className="rounded-3xl border border-border bg-card backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col min-h-[600px] relative">
      
      {/* Progress Indicator */}
      {step < 4 && (
        <div className="flex border-b border-border bg-muted/20">
          {[
            { num: 1, label: "Форм-фактор" },
            { num: 2, label: "Параметры" },
            { num: 3, label: "Контакты" }
          ].map(s => (
            <div key={s.num} className="flex-1 flex flex-col items-center justify-center py-4 relative">
              <div className={`text-xs font-semibold uppercase tracking-wider mb-1 transition-colors ${
                step === s.num ? 'text-primary' : step > s.num ? 'text-accent' : 'text-muted-foreground'
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
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary shadow-[0_0_10px_var(--primary)]"></div>
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
            <h3 className="mb-6 text-xl font-semibold text-foreground">Выберите тип душевой</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {CABIN_TYPES.map(type => (
                <div 
                  key={type.id}
                  onClick={() => { setValue("orderType", "template"); setValue("cabinType", type.name); }}
                  className={`relative cursor-pointer rounded-2xl border p-4 transition-all hover:bg-muted/50 group overflow-hidden ${
                    orderType === "template" && cabinType === type.name 
                      ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(var(--primary),0.15)]' 
                      : 'border-border bg-card'
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full mb-3 rounded-lg overflow-hidden border border-border">
                    <Image src={type.img} alt={type.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className={`text-sm font-medium text-center transition-colors ${
                    orderType === "template" && cabinType === type.name ? 'text-primary' : 'text-foreground'
                  }`}>
                    {type.name}
                  </div>
                  {orderType === "template" && cabinType === type.name && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground p-1 rounded-full shadow-lg">
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
                  ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(var(--primary),0.15)]' 
                  : 'border-border bg-card hover:bg-muted/50'
              }`}
            >
              <div className="text-left">
                <h4 className={`text-base font-semibold mb-1 ${orderType === "custom" ? 'text-primary' : 'text-foreground'}`}>Нестандартный проект</h4>
                <p className="text-sm text-muted-foreground">
                  Сложная архитектура, скосы крыши, много граней
                </p>
              </div>
              <div className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${orderType === "custom" ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-transparent'}`}>
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
                <h3 className="mb-8 text-xl font-semibold text-foreground">Укажите габариты ниши</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ширина проема (мм)</label>
                    <input {...register("width")} type="number" className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="Например: 900" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Глубина (мм)</label>
                    <input {...register("depth")} type="number" className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="Например: 900" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Высота (мм)</label>
                    <input {...register("height")} type="number" className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="Например: 2000" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-xl border border-accent/30 bg-accent/10 p-4">
                    <Info className="text-accent shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Фурнитура и зазоры</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Просто вставьте ссылки на фурнитуру, которую планируете купить (Ozon, Леруа и т.д.). Мы скачаем схемы производителя и заложим идеальные вырезы в стекле.
                      </p>
                    </div>
                  </div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ссылки на петли / ручку</label>
                  <textarea {...register("hardware")} className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors min-h-[100px]" placeholder="URL: https://..."></textarea>
                </div>
              </>
            ) : (
              <>
                <h3 className="mb-6 text-xl font-semibold text-foreground">Опишите вашу задачу</h3>
                <div className="space-y-2">
                  <textarea {...register("customDescription")} className="w-full rounded-xl border border-border bg-card px-4 py-4 text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors min-h-[250px]" placeholder="Опишите габариты, наличие уклона крыши, количество стекол и другие особенности..."></textarea>
                </div>
              </>
            )}
          </div>
        )}

        {/* Step 3: Contacts */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full max-w-xl mx-auto">
            <h3 className="mb-8 text-xl font-semibold text-foreground">Куда отправить готовый файл?</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ваше имя *</label>
                <input {...register("name")} type="text" className={`w-full rounded-xl border ${errors.name ? 'border-destructive bg-destructive/5' : 'border-border bg-card'} px-4 py-3 text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors`} placeholder="Иван" />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Телефон (WhatsApp) *</label>
                <input {...register("phone")} type="tel" className={`w-full rounded-xl border ${errors.phone ? 'border-destructive bg-destructive/5' : 'border-border bg-card'} px-4 py-3 text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors`} placeholder="+7 (999) 000-00-00" />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Telegram (Для отправки PDF/DWG)</label>
                <input {...register("telegram")} type="text" className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="@username" />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Success / Payment */}
        {step === 4 && (
          <div className="animate-in fade-in zoom-in-95 duration-500 text-center py-12">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/20 text-accent border border-accent/30">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground">Техническое задание принято</h2>
            <p className="mx-auto mb-10 max-w-md text-muted-foreground">
              Мы начали обработку параметров. Оплатите разработку CAD-чертежа, чтобы инженер взял его в работу.
            </p>
            
            <div className="mx-auto mb-10 max-w-sm rounded-2xl border border-border bg-muted/10 p-8 text-left backdrop-blur-sm">
               <div className="mb-6 flex justify-between items-center border-b border-border pb-4">
                 <span className="text-sm font-semibold text-muted-foreground">Сумма к оплате:</span>
                 <span className="text-2xl font-bold text-foreground">1 500 ₽</span>
               </div>
               <p className="mb-2 text-xs font-semibold text-muted-foreground">Перевод по номеру (СБП)</p>
               <p className="mb-1 text-xl font-medium tracking-wide text-foreground">+7 900 123-45-67</p>
               <p className="text-sm text-muted-foreground">Получатель: Иван И. (Сбербанк, Тинькофф)</p>
            </div>

            <a href="https://wa.me/79001234567?text=Привет,%20оплатил(а)%20чертеж." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-[0_0_20px_var(--accent)] transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--accent)]">
              Подтвердить оплату в WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        )}

      </form>

      {/* Footer Navigation */}
      {step < 4 && (
        <div className="border-t border-border bg-muted/10 p-6 flex justify-between items-center relative z-10">
          <button 
            type="button"
            onClick={() => setStep(prev => Math.max(prev - 1, 1))}
            className={`px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors ${step > 1 ? 'visible' : 'invisible'}`}
          >
            Назад
          </button>
          
          {step < 3 ? (
            <button 
              type="button"
              onClick={handleNext} 
              disabled={step === 1 && orderType === "template" && !cabinType}
              className="rounded-full bg-foreground text-background px-8 py-3 text-sm font-bold transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-2"
            >
              Далее <ArrowRight size={16} />
            </button>
          ) : (
            <button 
              type="button"
              onClick={handleSubmit(onSubmit)} 
              disabled={loading}
              className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-[0_0_15px_var(--primary)] transition-all hover:scale-105 hover:shadow-[0_0_25px_var(--primary)] disabled:opacity-50 disabled:hover:scale-100"
            >
              {loading ? 'Обработка...' : 'Отправить заказ'}
            </button>
          )}
        </div>
      )}

    </div>
  );
}
