"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { Check } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';

const CABIN_TYPES = [
  { id: 'corner', name: 'Угловая', img: '/images/luxury_corner.png', desc: 'Классическое решение для экономии пространства. Идеально подходит для небольших ванных комнат, устанавливается в угол помещения.' },
  { id: 'niche', name: 'В нишу', img: '/images/luxury_niche.png', desc: 'Душевая дверь, которая устанавливается между тремя стенами. Максимально практично и надежно.' },
  { id: 'ushape', name: 'П-образная', img: '/images/luxury_ushape.png', desc: 'Монтируется к одной стене. Состоит из фронтальной части (с дверью) и двух боковых стекол. Роскошное решение для просторных ванных.' },
  { id: 'walkin', name: 'Свободный вход (Walk-in)', img: '/images/luxury_walkin.png', desc: 'Одно неподвижное стекло без дверей. Минималистичный дизайн, визуально расширяющий пространство.' },
  { id: 'bath', name: 'Шторка на ванну', img: '/images/luxury_bath.png', desc: 'Стеклянная перегородка на борт ванны. Защищает от брызг и выглядит намного эстетичнее тканевых штор.' },
];

const GLASS_TYPES = [
  { id: 'clear', name: 'Прозрачное (M1)', color: 'bg-white/10', filterClass: '' },
  { id: 'optiwhite', name: 'Осветленное', color: 'bg-white/30', filterClass: 'bg-white/10 mix-blend-overlay' },
  { id: 'frosted', name: 'Матовое', color: 'bg-white/50', filterClass: 'bg-white/40 mix-blend-overlay' },
  { id: 'graphite', name: 'Графит', color: 'bg-black/80', filterClass: 'bg-black/50 mix-blend-multiply' },
  { id: 'bronze', name: 'Бронза', color: 'bg-[#5D4037]', filterClass: 'bg-[#5D4037]/50 mix-blend-multiply' },
  { id: 'flutes', name: 'Рифленое', color: 'bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,rgba(255,255,255,0.4)_4px,rgba(255,255,255,0.4)_8px)]', filterClass: 'bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,rgba(255,255,255,0.2)_4px,rgba(255,255,255,0.2)_8px)] mix-blend-overlay' },
];

const HARDWARE_COLORS = [
  { id: 'chrome', name: 'Хром', color: 'bg-gradient-to-br from-gray-300 to-gray-500' },
  { id: 'black', name: 'Черный мат', color: 'bg-[#1A1A1A]' },
  { id: 'gold', name: 'Золото', color: 'bg-gradient-to-br from-[#FDE047] to-[#D4AF37]' }
];

export default function Configurator() {
  const [activeCabin, setActiveCabin] = useState(CABIN_TYPES[0].id);
  const [activeGlass, setActiveGlass] = useState(GLASS_TYPES[0].id);
  const [activeHardware, setActiveHardware] = useState(HARDWARE_COLORS[0].id);
  const [gapMode, setGapMode] = useState<'links' | 'exact'>('links');

  const selectedGlassFilter = GLASS_TYPES.find(g => g.id === activeGlass)?.filterClass || '';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      
      {/* LEFT COLUMN: Visualizer (Sticky) */}
      <div className="lg:col-span-5 lg:sticky lg:top-32 w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#2A2E35]">
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          {/* Background Empty Bathroom */}
          <div className="absolute inset-0 bg-[#3A3F47] animate-pulse-subtle">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4B5563] to-[#1F2937]" />
          </div>

          {/* Overlapping Cabins */}
          {CABIN_TYPES.map((cabin) => (
            <div 
              key={cabin.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${activeCabin === cabin.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <Image 
                src={cabin.img} 
                alt={cabin.name} 
                fill
                priority 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          ))}
          
          {/* Glass Effect Overlay applied globally over the active image */}
          <div className={`absolute inset-0 transition-all duration-500 pointer-events-none z-20 ${selectedGlassFilter}`} />
        </div>
        
        {/* Description Block */}
        <div className="p-6 bg-white/5 border-t border-white/10">
          <h4 className="text-white font-medium text-lg mb-2">
            {CABIN_TYPES.find(c => c.id === activeCabin)?.name}
          </h4>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            {CABIN_TYPES.find(c => c.id === activeCabin)?.desc}
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: Form Panel */}
      <div className="lg:col-span-7 flex flex-col gap-12 bg-white/5 border border-white/10 rounded-[2rem] p-6 sm:p-10 backdrop-blur-[20px]">
        
        {/* Step 1: Shape */}
        <div>
          <h3 className="text-xl font-serif text-white mb-6 flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">1</span>
            Форма кабины
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {CABIN_TYPES.map((cabin) => (
              <motion.label 
                key={cabin.id} 
                className="cursor-pointer group"
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <input 
                  type="radio" 
                  name="cabinShape" 
                  className="hidden" 
                  checked={activeCabin === cabin.id}
                  onChange={() => setActiveCabin(cabin.id)}
                />
                <div className={`flex flex-col items-center text-center gap-3 p-4 rounded-2xl border transition-all duration-300 ${activeCabin === cabin.id ? 'bg-primary/10 border-primary shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'}`}>
                  <span className={`text-sm font-medium ${activeCabin === cabin.id ? 'text-white' : 'text-white/60'}`}>{cabin.name}</span>
                </div>
              </motion.label>
            ))}
          </div>
        </div>

        {/* Step 2: Glass Type */}
        <div>
          <h3 className="text-xl font-serif text-white mb-6 flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">2</span>
            Тип стекла
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {GLASS_TYPES.map((glass) => (
              <motion.label 
                key={glass.id} 
                className="cursor-pointer group"
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <input 
                  type="radio" 
                  name="glassType" 
                  className="hidden" 
                  checked={activeGlass === glass.id}
                  onChange={() => setActiveGlass(glass.id)}
                />
                <div className={`flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300 ${activeGlass === glass.id ? 'bg-primary/10 border-primary shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'}`}>
                  <div className={`w-6 h-6 rounded-md border border-white/20 ${glass.color}`} />
                  <span className={`text-sm font-medium ${activeGlass === glass.id ? 'text-white' : 'text-white/60'}`}>{glass.name}</span>
                </div>
              </motion.label>
            ))}
          </div>
        </div>

        {/* Step 3: Hardware Color */}
        <div>
          <h3 className="text-xl font-serif text-white mb-6 flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">3</span>
            Цвет фурнитуры
          </h3>
          <div className="flex gap-6">
            {HARDWARE_COLORS.map((hw) => (
              <motion.label 
                key={hw.id} 
                className="cursor-pointer group flex flex-col items-center gap-2"
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <input 
                  type="radio" 
                  name="hardware" 
                  className="hidden" 
                  checked={activeHardware === hw.id}
                  onChange={() => setActiveHardware(hw.id)}
                />
                <div className={`w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${hw.color} ${activeHardware === hw.id ? 'border-primary ring-4 ring-primary/20 scale-110' : 'border-transparent hover:scale-105'}`}>
                  {activeHardware === hw.id && <Check className="w-6 h-6 text-white drop-shadow-md" />}
                </div>
                <span className={`text-xs font-medium transition-colors ${activeHardware === hw.id ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>{hw.name}</span>
              </motion.label>
            ))}
          </div>
        </div>

        {/* Step 4: Dimensions & Gaps */}
        <div>
          <h3 className="text-xl font-serif text-white mb-6 flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">4</span>
            Габариты и ТЗ
          </h3>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block text-sm text-white/60 mb-2">Ширина (мм)</label>
              <input type="number" placeholder="Например: 900" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-2">Высота (мм)</label>
              <input type="number" placeholder="Например: 2000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors" />
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-white/80 mb-4">Как считаем технологические вырезы и зазоры?</p>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" checked={gapMode === 'links'} onChange={() => setGapMode('links')} className="w-5 h-5 accent-primary" />
                <span className="text-white/80 text-sm">Я прикреплю ссылки на фурнитуру, рассчитайте зазоры сами</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" checked={gapMode === 'exact'} onChange={() => setGapMode('exact')} className="w-5 h-5 accent-primary" />
                <span className="text-white/80 text-sm">Я знаю точные размеры зазоров</span>
              </label>
            </div>
          </div>

          {/* Conditional Visibility */}
          <div className="transition-all duration-300">
            {gapMode === 'links' ? (
              <div className="animate-in slide-in-from-top-4 fade-in duration-300">
                <textarea 
                  placeholder="Вставьте ссылки на петли, коннекторы и ручки. Инженер сам скачает их схемы и заложит правильные вырезы..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors min-h-[120px] resize-none"
                />
              </div>
            ) : (
              <div className="flex gap-4 animate-in slide-in-from-top-4 fade-in duration-300">
                <div className="flex-1">
                  <label className="block text-xs text-white/60 mb-2">Зазор под дверь (мм)</label>
                  <input type="number" placeholder="Например: 8" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-white/60 mb-2">Зазор по стенам (мм)</label>
                  <input type="number" placeholder="Например: 3" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Step 5: Contacts */}
        <div className="border-t border-white/10 pt-10">
          <h3 className="text-xl font-serif text-white mb-6 flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">5</span>
            Контакты и Оплата
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <input type="text" placeholder="Ваше Имя" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors" />
            <input type="text" placeholder="Телефон (WhatsApp/Telegram)" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors" />
          </div>

          <AnimatedButton 
            className="w-full py-5 text-lg"
            variant="primary"
            shape="rounded"
            onClick={() => {/* will trigger modal */}}
          >
            Оплатить 2 000 ₽ и отправить ТЗ
          </AnimatedButton>
        </div>

      </div>

    </div>
  );
}
