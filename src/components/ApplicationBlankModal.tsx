"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, Send, X } from 'lucide-react';
import Image from 'next/image';
import { AnimatedButton } from "@/components/ui/AnimatedButton";

const formSchema = z.object({
  cabinType: z.string().min(1, "Выберите тип конструкции"),
  width: z.string().optional(),
  height: z.string().optional(),
  depth: z.string().optional(),
  hardware: z.string().optional(),
  customDescription: z.string().optional(),
  name: z.string().min(2, "Обязательно"),
  phone: z.string().min(10, "Обязательно"),
  projectTier: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CABIN_TYPES = [
  { id: 'corner', name: 'Угловая', img: '/images/corner_shower_render.png' },
  { id: 'niche', name: 'В нишу', img: '/images/niche_shower_render.png' },
  { id: 'walk_in', name: 'Walk-in', img: '/images/walkin_shower_render.png' },
  { id: 'bath', name: 'На ванну', img: '/images/bath_screen_render.png' }
];

interface ApplicationBlankModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
  projectTier?: 'basic' | 'complex';
  doorConfig?: {
    doorType: string;
    doorPos: string;
    hingePos?: string;
  };
}

export default function ApplicationBlankModal({ isOpen, onClose, initialType = "Угловая", projectTier = 'basic', doorConfig }: ApplicationBlankModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cabinType: initialType,
      projectTier: projectTier,
    }
  });

  const selectedCabin = watch("cabinType");

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    try {
      const res = await fetch('/api/submit-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setTimeout(() => setIsSubmitted(true), 800);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-white/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-slate-200/500 shadow-2xl my-auto shadow-black/50">
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 text-slate-500 hover:text-slate-900 bg-slate-900/10 hover:bg-white/80 p-2 rounded-full backdrop-blur-md transition-all"
        >
          <X size={24} />
        </button>

        {isSubmitted ? (
          <div className="p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30 relative z-10">
              <Check size={48} />
            </div>
            <h2 className="mb-4 text-3xl md:text-4xl font-serif font-medium text-slate-900 relative z-10">Техническое задание принято</h2>
            <p className="mb-10 text-slate-600 font-light max-w-md mx-auto relative z-10">
              Инженер свяжется с вами в ближайшее время для уточнения деталей.
            </p>

            <AnimatedButton onClick={onClose} variant="primary" shape="oval" className="px-10 py-5 text-sm shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] z-10">
              Закрыть
            </AnimatedButton>
          </div>
        ) : (
          <div className="relative">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
            
            {/* Blueprint Header */}
            <div className="border-b border-slate-200/500 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="pr-12">
                <div className="text-primary font-mono text-xs tracking-widest mb-2 uppercase">Specification Form</div>
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 leading-none">Бланк Заявки на Чертеж</h2>
              </div>
              <div className="text-left md:text-right text-slate-500 font-mono text-xs uppercase space-y-1">
                <div>Тариф: <span className="text-primary">{projectTier === 'complex' ? 'Сложный (3 000 ₽)' : 'Базовый (1 500 ₽)'}</span></div>
                <div>Document ID: SHWR-{(Math.random()*10000).toFixed(0).padStart(4, '0')}</div>
                <div>Date: {new Date().toLocaleDateString('ru-RU')}</div>
              </div>
            </div>

            {/* Blueprint Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-10 relative z-10 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Left Column: Dimensions & Hardware */}
                <div className="lg:col-span-7 space-y-10">
                  
                  {/* Section 1: Type Selection */}
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-primary font-mono text-sm">01.</span>
                      <h3 className="text-xl font-serif text-slate-900">Тип конструкции</h3>
                      <div className="h-[1px] flex-grow bg-white/80"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                      {CABIN_TYPES.map(type => (
                        <div 
                          key={type.id}
                          onClick={() => setValue("cabinType", type.name)}
                          className={`cursor-pointer border transition-all ${
                            selectedCabin === type.name 
                              ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(var(--primary),0.2)]' 
                              : 'border-slate-200/500 bg-white/60 hover:border-white/30'
                          } rounded-xl p-3 flex flex-col items-center justify-center text-center gap-3`}
                        >
                          <div className="relative w-16 h-16 md:w-10 md:h-10 overflow-hidden rounded-lg opacity-80 mix-blend-screen">
                            <Image src={type.img} alt={type.name} fill className="object-cover" />
                          </div>
                          <span className={`text-[10px] uppercase font-mono ${selectedCabin === type.name ? 'text-primary' : 'text-slate-600'}`}>{type.name}</span>
                        </div>
                      ))}
                    </div>
                    {errors.cabinType && <span className="text-red-400 text-xs mt-2 block">{errors.cabinType.message}</span>}

                    {doorConfig && (
                      <div className="bg-white/40 border border-slate-200/500 rounded-xl p-4 flex flex-wrap gap-x-8 gap-y-4">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono block mb-1">Механизм</span>
                          <span className="text-sm text-slate-900 font-medium">{doorConfig.doorType}</span>
                        </div>
                        {doorConfig.doorType !== 'Глухое стекло' && (
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono block mb-1">Дверь</span>
                            <span className="text-sm text-slate-900 font-medium">{doorConfig.doorPos}</span>
                          </div>
                        )}
                        {doorConfig.hingePos && (
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono block mb-1">Петли</span>
                            <span className="text-sm text-slate-900 font-medium">{doorConfig.hingePos}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </section>

                  {/* Section 2: Dimensions */}
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-primary font-mono text-sm">02.</span>
                      <h3 className="text-xl font-serif text-slate-900">Габариты (мм)</h3>
                      <div className="h-[1px] flex-grow bg-white/80"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="relative">
                        <input {...register("width")} type="text" id="width" className="peer w-full bg-transparent border-b-2 border-slate-300 px-0 py-2 text-slate-900 font-mono focus:outline-none focus:border-primary transition-colors placeholder-transparent" placeholder="Ширина" />
                        <label htmlFor="width" className="absolute left-0 -top-4 text-xs font-mono text-slate-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary">Ширина проема</label>
                      </div>
                      <div className="relative">
                        <input {...register("depth")} type="text" id="depth" className="peer w-full bg-transparent border-b-2 border-slate-300 px-0 py-2 text-slate-900 font-mono focus:outline-none focus:border-primary transition-colors placeholder-transparent" placeholder="Глубина" />
                        <label htmlFor="depth" className="absolute left-0 -top-4 text-xs font-mono text-slate-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary">Глубина (если есть)</label>
                      </div>
                      <div className="relative">
                        <input {...register("height")} type="text" id="height" className="peer w-full bg-transparent border-b-2 border-slate-300 px-0 py-2 text-slate-900 font-mono focus:outline-none focus:border-primary transition-colors placeholder-transparent" placeholder="Высота" />
                        <label htmlFor="height" className="absolute left-0 -top-4 text-xs font-mono text-slate-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary">Высота по стеклу</label>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Hardware & Details */}
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-primary font-mono text-sm">03.</span>
                      <h3 className="text-xl font-serif text-slate-900">Детали и Фурнитура</h3>
                      <div className="h-[1px] flex-grow bg-white/80"></div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="relative">
                        <textarea {...register("hardware")} id="hardware" rows={2} className="peer w-full bg-transparent border-b-2 border-slate-300 px-0 py-2 text-slate-900 font-mono text-sm focus:outline-none focus:border-primary transition-colors resize-none placeholder-transparent" placeholder="Ссылки на фурнитуру"></textarea>
                        <label htmlFor="hardware" className="absolute left-0 -top-4 text-xs font-mono text-slate-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary">Ссылки на петли/ручки (инженер учтет вырезы)</label>
                      </div>
                      <div className="relative">
                        <textarea {...register("customDescription")} id="customDescription" rows={3} className="peer w-full bg-transparent border-b-2 border-slate-300 px-0 py-2 text-slate-900 font-mono text-sm focus:outline-none focus:border-primary transition-colors resize-none placeholder-transparent" placeholder="Особенности"></textarea>
                        <label htmlFor="customDescription" className="absolute left-0 -top-4 text-xs font-mono text-slate-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary">Особенности (скосы, бортик и т.д.)</label>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Right Column: Contacts & Submit */}
                <div className="lg:col-span-5 bg-white/[0.03] border border-slate-200/500 p-6 md:p-8 rounded-2xl flex flex-col justify-between">
                  <section>
                    <div className="flex items-center gap-3 mb-8">
                      <span className="text-primary font-mono text-sm">04.</span>
                      <h3 className="text-xl font-serif text-slate-900">Контакты заказчика</h3>
                    </div>
                    
                    <div className="space-y-8">
                      <div className="relative">
                        <input {...register("name")} type="text" id="name" className={`peer w-full bg-transparent border-b-2 ${errors.name ? 'border-red-500' : 'border-slate-300'} px-0 py-2 text-slate-900 text-lg focus:outline-none focus:border-primary transition-colors placeholder-transparent`} placeholder="Имя" />
                        <label htmlFor="name" className="absolute left-0 -top-4 text-xs font-mono text-slate-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary">Имя</label>
                        {errors.name && <span className="absolute right-0 top-2 text-red-500 text-xs">{errors.name.message}</span>}
                      </div>
                      
                      <div className="relative">
                        <input {...register("phone")} type="tel" id="phone" className={`peer w-full bg-transparent border-b-2 ${errors.phone ? 'border-red-500' : 'border-slate-300'} px-0 py-2 text-slate-900 text-lg focus:outline-none focus:border-primary transition-colors placeholder-transparent`} placeholder="Телефон" />
                        <label htmlFor="phone" className="absolute left-0 -top-4 text-xs font-mono text-slate-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary">Телефон</label>
                        {errors.phone && <span className="absolute right-0 top-2 text-red-500 text-xs">{errors.phone.message}</span>}
                      </div>
                    </div>
                  </section>

                  <div className="mt-12 pt-8 border-t border-slate-200/500">
                    <AnimatedButton 
                      type="submit" 
                      disabled={loading}
                      variant="primary"
                      shape="rounded"
                      className="w-full py-5 text-base mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Обработка...' : (
                        <>
                          <span>ОТПРАВИТЬ ЗАЯВКУ</span>
                          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </AnimatedButton>
                    <p className="text-center text-xs text-slate-400 font-mono mt-4">
                      Оплата производится только после согласования деталей проекта инженером.
                    </p>
                  </div>
                </div>

              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
