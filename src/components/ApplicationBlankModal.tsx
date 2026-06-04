"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, Send, X } from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
  cabinType: z.string().min(1, "Выберите тип конструкции"),
  width: z.string().optional(),
  height: z.string().optional(),
  depth: z.string().optional(),
  hardware: z.string().optional(),
  customDescription: z.string().optional(),
  name: z.string().min(2, "Обязательно"),
  phone: z.string().min(10, "Обязательно"),
});

type FormValues = z.infer<typeof formSchema>;

const CABIN_TYPES = [
  { id: 'corner', name: 'Угловая', img: '/premium_corner_shower_1780571932250.png' },
  { id: 'niche', name: 'В нишу', img: '/premium_niche_shower_1780571944244.png' },
  { id: 'walk_in', name: 'Walk-in', img: '/premium_walkin_shower_1780571966263.png' },
  { id: 'u_shape', name: 'П-образная', img: '/premium_ushape_shower_1780571955023.png' },
  { id: 'bath', name: 'На ванну', img: '/premium_bath_screen_1780572000188.png' }
];

interface ApplicationBlankModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export default function ApplicationBlankModal({ isOpen, onClose, initialType = "Угловая" }: ApplicationBlankModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cabinType: initialType,
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl my-auto shadow-black/50">
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 text-white/50 hover:text-white bg-black/20 hover:bg-white/10 p-2 rounded-full backdrop-blur-md transition-all"
        >
          <X size={24} />
        </button>

        {isSubmitted ? (
          <div className="p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30 relative z-10">
              <Check size={48} />
            </div>
            <h2 className="mb-4 text-3xl md:text-4xl font-serif font-medium text-white relative z-10">Техническое задание принято</h2>
            <p className="mb-10 text-white/60 font-light max-w-md mx-auto relative z-10">
              Инженер приступит к чертежу после подтверждения проекта. Оплата чертежа окупается в 15-20 раз за счет отказа от салонов.
            </p>
            
            <div className="mx-auto mb-10 max-w-sm rounded-2xl bg-black/40 backdrop-blur-md p-8 shadow-xl border border-white/10 text-left relative z-10">
               <div className="mb-6 flex justify-between items-end border-b border-white/10 pb-6">
                 <span className="text-sm font-medium text-white/50">Стоимость чертежа</span>
                 <span className="text-3xl font-serif font-semibold text-white">1 500 ₽</span>
               </div>
               <p className="mb-2 text-sm text-white/50">Номер для перевода СБП:</p>
               <p className="mb-2 text-2xl font-medium text-white">+7 900 123-45-67</p>
               <p className="text-sm text-white/50">Сбербанк или Тинькофф (Иван И.)</p>
            </div>

            <a href="https://wa.me/79001234567?text=Привет,%20перевел(а)%20за%20чертеж." target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-sm font-bold text-white shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] transition-all hover:scale-105 hover:bg-primary/90 relative z-10">
              Написать в WhatsApp
            </a>
          </div>
        ) : (
          <div className="relative">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
            
            {/* Blueprint Header */}
            <div className="border-b border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="pr-12">
                <div className="text-primary font-mono text-xs tracking-widest mb-2 uppercase">Specification Form</div>
                <h2 className="text-3xl md:text-4xl font-serif text-white leading-none">Бланк Заявки на Чертеж</h2>
              </div>
              <div className="text-left md:text-right text-white/40 font-mono text-xs uppercase space-y-1">
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
                      <h3 className="text-xl font-serif text-white">Тип конструкции</h3>
                      <div className="h-[1px] flex-grow bg-white/10"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {CABIN_TYPES.map(type => (
                        <div 
                          key={type.id}
                          onClick={() => setValue("cabinType", type.name)}
                          className={`cursor-pointer border transition-all ${
                            selectedCabin === type.name 
                              ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(var(--primary),0.2)]' 
                              : 'border-white/10 bg-black/50 hover:border-white/30'
                          } rounded-xl p-3 flex flex-col items-center justify-center text-center gap-3`}
                        >
                          <div className="relative w-16 h-16 md:w-10 md:h-10 overflow-hidden rounded-lg opacity-80 mix-blend-screen">
                            <Image src={type.img} alt={type.name} fill className="object-cover" />
                          </div>
                          <span className={`text-[10px] uppercase font-mono ${selectedCabin === type.name ? 'text-primary' : 'text-white/60'}`}>{type.name}</span>
                        </div>
                      ))}
                    </div>
                    {errors.cabinType && <span className="text-red-400 text-xs mt-2 block">{errors.cabinType.message}</span>}
                  </section>

                  {/* Section 2: Dimensions */}
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-primary font-mono text-sm">02.</span>
                      <h3 className="text-xl font-serif text-white">Габариты (мм)</h3>
                      <div className="h-[1px] flex-grow bg-white/10"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="relative">
                        <input {...register("width")} type="text" id="width" className="peer w-full bg-transparent border-b-2 border-white/20 px-0 py-2 text-white font-mono focus:outline-none focus:border-primary transition-colors placeholder-transparent" placeholder="Ширина" />
                        <label htmlFor="width" className="absolute left-0 -top-4 text-xs font-mono text-white/40 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary">Ширина проема</label>
                      </div>
                      <div className="relative">
                        <input {...register("depth")} type="text" id="depth" className="peer w-full bg-transparent border-b-2 border-white/20 px-0 py-2 text-white font-mono focus:outline-none focus:border-primary transition-colors placeholder-transparent" placeholder="Глубина" />
                        <label htmlFor="depth" className="absolute left-0 -top-4 text-xs font-mono text-white/40 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary">Глубина (если есть)</label>
                      </div>
                      <div className="relative">
                        <input {...register("height")} type="text" id="height" className="peer w-full bg-transparent border-b-2 border-white/20 px-0 py-2 text-white font-mono focus:outline-none focus:border-primary transition-colors placeholder-transparent" placeholder="Высота" />
                        <label htmlFor="height" className="absolute left-0 -top-4 text-xs font-mono text-white/40 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary">Высота по стеклу</label>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Hardware & Details */}
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-primary font-mono text-sm">03.</span>
                      <h3 className="text-xl font-serif text-white">Детали и Фурнитура</h3>
                      <div className="h-[1px] flex-grow bg-white/10"></div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="relative">
                        <textarea {...register("hardware")} id="hardware" rows={2} className="peer w-full bg-transparent border-b-2 border-white/20 px-0 py-2 text-white font-mono text-sm focus:outline-none focus:border-primary transition-colors resize-none placeholder-transparent" placeholder="Ссылки на фурнитуру"></textarea>
                        <label htmlFor="hardware" className="absolute left-0 -top-4 text-xs font-mono text-white/40 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary">Ссылки на петли/ручки (инженер учтет вырезы)</label>
                      </div>
                      <div className="relative">
                        <textarea {...register("customDescription")} id="customDescription" rows={3} className="peer w-full bg-transparent border-b-2 border-white/20 px-0 py-2 text-white font-mono text-sm focus:outline-none focus:border-primary transition-colors resize-none placeholder-transparent" placeholder="Особенности"></textarea>
                        <label htmlFor="customDescription" className="absolute left-0 -top-4 text-xs font-mono text-white/40 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary">Особенности (скосы, бортик и т.д.)</label>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Right Column: Contacts & Submit */}
                <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col justify-between">
                  <section>
                    <div className="flex items-center gap-3 mb-8">
                      <span className="text-primary font-mono text-sm">04.</span>
                      <h3 className="text-xl font-serif text-white">Контакты заказчика</h3>
                    </div>
                    
                    <div className="space-y-8">
                      <div className="relative">
                        <input {...register("name")} type="text" id="name" className={`peer w-full bg-transparent border-b-2 ${errors.name ? 'border-red-500' : 'border-white/20'} px-0 py-2 text-white text-lg focus:outline-none focus:border-primary transition-colors placeholder-transparent`} placeholder="Имя" />
                        <label htmlFor="name" className="absolute left-0 -top-4 text-xs font-mono text-white/40 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary">Имя</label>
                        {errors.name && <span className="absolute right-0 top-2 text-red-500 text-xs">{errors.name.message}</span>}
                      </div>
                      
                      <div className="relative">
                        <input {...register("phone")} type="tel" id="phone" className={`peer w-full bg-transparent border-b-2 ${errors.phone ? 'border-red-500' : 'border-white/20'} px-0 py-2 text-white text-lg focus:outline-none focus:border-primary transition-colors placeholder-transparent`} placeholder="Телефон" />
                        <label htmlFor="phone" className="absolute left-0 -top-4 text-xs font-mono text-white/40 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary">Телефон (WhatsApp)</label>
                        {errors.phone && <span className="absolute right-0 top-2 text-red-500 text-xs">{errors.phone.message}</span>}
                      </div>
                    </div>
                  </section>

                  <div className="mt-12 pt-8 border-t border-white/10">
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full group bg-primary hover:bg-primary/90 text-white p-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all disabled:opacity-50"
                    >
                      {loading ? 'Обработка...' : (
                        <>
                          <span>ОТПРАВИТЬ ЗАЯВКУ</span>
                          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-white/30 font-mono mt-4">
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
