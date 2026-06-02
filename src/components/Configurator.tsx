"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, ArrowRight, Crosshair, Terminal, Zap } from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
  orderType: z.enum(["template", "custom"]),
  cabinType: z.string().optional(),
  
  width: z.string().optional(),
  height: z.string().optional(),
  depth: z.string().optional(),
  hardware: z.string().optional(),
  
  customDescription: z.string().optional(),
  
  name: z.string().min(2, "REQUIRED"),
  phone: z.string().min(10, "REQUIRED"),
  telegram: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CABIN_TYPES = [
  { id: 'corner', name: 'CORNER_TYPE', img: '/corner_tech_1780444346177.png' },
  { id: 'niche', name: 'NICHE_TYPE', img: '/niche_tech_1780444356577.png' },
  { id: 'walk_in', name: 'WALK_IN_SCREEN', img: '/walk_in_tech_1780444368907.png' },
  { id: 'u_shape', name: 'U_SHAPE_SYS', img: '/u_shaped_tech_1780444378574.png' },
  { id: 'bath', name: 'BATH_SCREEN', img: '/bath_screen_tech_1780444388152.png' }
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
    <div className="border-2 border-foreground bg-background shadow-2xl flex flex-col min-h-[650px] relative font-mono">
      
      {/* Top Bar Terminal Style */}
      <div className="border-b-2 border-foreground bg-foreground text-background flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <Terminal size={16} />
          <span className="text-xs uppercase tracking-widest font-bold">Terminal_CMD</span>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 border border-background"></div>
          <div className="w-3 h-3 border border-background"></div>
          <div className="w-3 h-3 bg-background"></div>
        </div>
      </div>

      {/* Progress Indicator */}
      {step < 4 && (
        <div className="flex border-b-2 border-foreground bg-secondary">
          {[
            { num: 1, label: "SYS_ARCH" },
            { num: 2, label: "XYZ_DATA" },
            { num: 3, label: "CONTACT" }
          ].map(s => (
            <div key={s.num} className={`flex-1 flex flex-col items-center justify-center py-4 border-r-2 border-foreground last:border-r-0 relative transition-colors ${step === s.num ? 'bg-primary text-white' : 'text-foreground hover:bg-white'}`}>
              <div className="text-[10px] uppercase tracking-widest font-bold mb-1">
                STEP_0{s.num}
              </div>
              <div className="text-sm font-bold uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Form Content */}
      <form id="orderForm" onSubmit={handleSubmit(onSubmit)} className="flex-grow bg-grid-pattern p-6 sm:p-10 flex flex-col justify-center relative z-10 bg-white">
        
        {/* Step 1: Cabin Type */}
        {step === 1 && (
          <div className="animate-in fade-in zoom-in-95 duration-300 w-full">
            <div className="border-2 border-foreground bg-white p-6 relative">
              <div className="absolute -top-3 -left-3 text-foreground bg-white"><Crosshair size={24}/></div>
              <h3 className="mb-6 text-xl font-sans font-black uppercase tracking-tighter text-foreground border-b-2 border-foreground pb-4">
                > Select architecture
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                {CABIN_TYPES.map(type => (
                  <div 
                    key={type.id}
                    onClick={() => { setValue("orderType", "template"); setValue("cabinType", type.name); }}
                    className={`cursor-pointer border-2 p-2 transition-all group relative ${
                      orderType === "template" && cabinType === type.name 
                        ? 'border-primary bg-primary/10' 
                        : 'border-foreground bg-white hover:border-primary'
                    }`}
                  >
                    <div className="relative aspect-[4/5] w-full mb-3 border-2 border-foreground overflow-hidden bg-foreground">
                      <Image src={type.img} alt={type.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                    </div>
                    <div className={`text-xs font-bold text-center uppercase tracking-widest transition-colors ${
                      orderType === "template" && cabinType === type.name ? 'text-primary' : 'text-foreground'
                    }`}>
                      {type.name}
                    </div>
                    {orderType === "template" && cabinType === type.name && (
                      <div className="absolute top-4 right-4 bg-primary text-white p-1 border-2 border-foreground">
                        <Check size={16} strokeWidth={3} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div 
                onClick={() => { setValue("orderType", "custom"); setValue("cabinType", ""); }}
                className={`cursor-pointer border-2 p-4 text-center transition-all flex items-center justify-between ${
                  orderType === "custom" 
                    ? 'border-primary bg-primary text-white' 
                    : 'border-foreground bg-secondary hover:border-primary'
                }`}
              >
                <div className="text-left">
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-1">> CUSTOM_BUILD</h4>
                  <p className={`text-[10px] uppercase ${orderType === "custom" ? 'text-white/80' : 'text-muted-foreground'}`}>
                    СЛОЖНАЯ АРХИТЕКТУРА / МАНСАРДА
                  </p>
                </div>
                <div className={`flex h-8 w-8 items-center justify-center border-2 transition-colors ${orderType === "custom" ? 'border-white bg-white text-primary' : 'border-foreground text-transparent'}`}>
                  {orderType === "custom" && <Check size={16} strokeWidth={3} />}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Dimensions */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-300 w-full max-w-3xl mx-auto">
            <div className="border-2 border-foreground bg-white p-6 sm:p-10 relative">
              <div className="absolute -top-3 -right-3 text-foreground bg-white"><Crosshair size={24}/></div>
              
            {orderType === "template" ? (
              <>
                <h3 className="mb-8 text-xl font-sans font-black uppercase tracking-tighter text-foreground border-b-2 border-foreground pb-4">
                  > Input XYZ Params (mm)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-2 relative">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground flex justify-between">
                      <span>X: Ширина</span>
                      <span>|← X →|</span>
                    </label>
                    <input {...register("width")} type="number" className="w-full border-2 border-foreground bg-secondary px-4 py-3 text-lg font-bold text-foreground focus:border-primary focus:ring-0 focus:outline-none transition-colors" placeholder="e.g. 900" />
                  </div>
                  <div className="space-y-2 relative">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground flex justify-between">
                      <span>Z: Глубина</span>
                      <span>|← Z →|</span>
                    </label>
                    <input {...register("depth")} type="number" className="w-full border-2 border-foreground bg-secondary px-4 py-3 text-lg font-bold text-foreground focus:border-primary focus:ring-0 focus:outline-none transition-colors" placeholder="e.g. 900" />
                  </div>
                  <div className="space-y-2 md:col-span-2 relative">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground flex justify-between">
                      <span>Y: Высота</span>
                      <span>↑ Y ↓</span>
                    </label>
                    <input {...register("height")} type="number" className="w-full border-2 border-foreground bg-secondary px-4 py-3 text-lg font-bold text-foreground focus:border-primary focus:ring-0 focus:outline-none transition-colors" placeholder="e.g. 2000" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 border-2 border-primary bg-primary/5 p-4">
                    <Zap className="text-primary shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-xs font-bold text-foreground uppercase tracking-widest mb-1">Фурнитура (Hardware)</p>
                      <p className="text-[10px] text-muted-foreground uppercase leading-relaxed">
                        УКАЖИТЕ ССЫЛКИ НА ПЕТЛИ И КОННЕКТОРЫ ДЛЯ РАСЧЕТА ТЕХНОЛОГИЧЕСКИХ ВЫРЕЗОВ
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <textarea {...register("hardware")} className="w-full border-2 border-foreground bg-secondary px-4 py-4 text-sm font-bold text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors min-h-[100px]" placeholder="> ВСТАВИТЬ ССЫЛКИ СЮДА..."></textarea>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="mb-8 text-xl font-sans font-black uppercase tracking-tighter text-foreground border-b-2 border-foreground pb-4">
                  > Input custom params
                </h3>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
                    ОПИСАНИЕ СЛОЖНОЙ ГЕОМЕТРИИ
                  </label>
                  <textarea {...register("customDescription")} className="w-full border-2 border-foreground bg-secondary px-4 py-4 text-sm font-bold text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors min-h-[250px] leading-relaxed" placeholder="> ОПИШИТЕ НАЛИЧИЕ УКЛОНА ПОТОЛКА, СКОСЫ И ГАБАРИТЫ..."></textarea>
                </div>
              </>
            )}
            </div>
          </div>
        )}

        {/* Step 3: Contacts */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-300 w-full max-w-2xl mx-auto">
             <div className="border-2 border-foreground bg-white p-6 sm:p-10 relative">
              <h3 className="mb-8 text-xl font-sans font-black uppercase tracking-tighter text-foreground border-b-2 border-foreground pb-4">
                > Establish connection
              </h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Идентификатор (Имя)</label>
                  <input {...register("name")} type="text" className={`w-full border-2 ${errors.name ? 'border-destructive bg-destructive/10 text-destructive' : 'border-foreground bg-secondary'} px-4 py-3 text-lg font-bold text-foreground focus:border-primary focus:outline-none transition-colors`} placeholder="IVAN" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Контактный канал (WhatsApp)</label>
                  <input {...register("phone")} type="tel" className={`w-full border-2 ${errors.phone ? 'border-destructive bg-destructive/10 text-destructive' : 'border-foreground bg-secondary'} px-4 py-3 text-lg font-bold text-foreground focus:border-primary focus:outline-none transition-colors`} placeholder="+7 (999) 000-00-00" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Telegram (opt)</label>
                  <input {...register("telegram")} type="text" className="w-full border-2 border-foreground bg-secondary px-4 py-3 text-lg font-bold text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="@USERNAME" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="animate-in fade-in zoom-in-95 duration-300 w-full max-w-2xl mx-auto text-center">
            <div className="border-2 border-foreground bg-white p-10 relative">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center border-4 border-primary text-primary">
                <Check size={40} strokeWidth={4} />
              </div>
              <h2 className="mb-4 text-3xl font-sans font-black uppercase tracking-tighter text-foreground">SYNC_COMPLETE</h2>
              <p className="mb-10 text-xs font-bold uppercase text-muted-foreground tracking-widest">
                ДАННЫЕ ПЕРЕДАНЫ В ИНЖЕНЕРНЫЙ ОТДЕЛ. ПОДТВЕРДИТЕ ПРОЦЕССИГ ОПЛАТОЙ.
              </p>
              
              <div className="mx-auto mb-10 max-w-sm border-2 border-foreground bg-secondary p-6 text-left">
                 <div className="mb-4 flex justify-between items-end border-b-2 border-foreground pb-4">
                   <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">СТОИМОСТЬ РАСЧЕТА</span>
                   <span className="text-2xl font-bold text-primary">1 500 ₽</span>
                 </div>
                 <p className="mb-1 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">МЕТОД: СБП</p>
                 <p className="mb-1 text-lg font-bold text-foreground">+7 900 123-45-67</p>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Сбербанк / Тинькофф (Иван И.)</p>
              </div>

              <a href="https://wa.me/79001234567?text=Привет,%20оплатил(а)%20чертеж." target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 border-2 border-foreground bg-primary px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-foreground">
                [ ПОДТВЕРДИТЬ В WHATSAPP ]
              </a>
            </div>
          </div>
        )}

      </form>

      {/* Footer Navigation */}
      {step < 4 && (
        <div className="border-t-2 border-foreground bg-secondary p-6 flex justify-between items-center relative z-10">
          <button 
            type="button"
            onClick={() => setStep(prev => Math.max(prev - 1, 1))}
            className={`border-2 border-foreground bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-foreground hover:bg-foreground hover:text-white transition-colors ${step > 1 ? 'visible' : 'invisible'}`}
          >
            {'< PREV'}
          </button>
          
          {step < 3 ? (
            <button 
              type="button"
              onClick={handleNext} 
              disabled={step === 1 && orderType === "template" && !cabinType}
              className="border-2 border-foreground bg-primary text-white px-8 py-3 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-foreground disabled:opacity-50 flex items-center gap-3"
            >
              {'NEXT >'}
            </button>
          ) : (
            <button 
              type="button"
              onClick={handleSubmit(onSubmit)} 
              disabled={loading}
              className="border-2 border-foreground bg-accent px-8 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-foreground disabled:opacity-50"
            >
              {loading ? 'PROCESSING...' : '[ SUBMIT_DATA ]'}
            </button>
          )}
        </div>
      )}

    </div>
  );
}
