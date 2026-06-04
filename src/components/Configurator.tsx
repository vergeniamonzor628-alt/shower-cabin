"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import ApplicationBlankModal from './ApplicationBlankModal';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const CABIN_TYPES = [
  { 
    id: 'corner', 
    name: 'Угловая', 
    desc: 'Самое популярное решение. Две стеклянные стены, дверь на петлях или раздвижная.',
    img: '/premium_corner_shower_1780571932250.png',
    price: '~15 000 ₽ (на заводе)'
  },
  { 
    id: 'niche', 
    name: 'Дверь в нишу', 
    desc: 'Минималистично и надежно. Одно сплошное стекло с дверью, закрывающее проем.',
    img: '/premium_niche_shower_1780571944244.png',
    price: '~12 000 ₽ (на заводе)'
  },
  { 
    id: 'walk_in', 
    name: 'Walk-in', 
    desc: 'Свободный вход без дверей. Одно большое неподвижное стекло.',
    img: '/premium_walkin_shower_1780571966263.png',
    price: '~10 000 ₽ (на заводе)'
  },
  { 
    id: 'u_shape', 
    name: 'П-образная', 
    desc: 'Три стеклянные стороны. Идеально для примыкания к одной плоской стене.',
    img: '/premium_ushape_shower_1780571955023.png',
    price: '~22 000 ₽ (на заводе)'
  },
  { 
    id: 'bath', 
    name: 'Шторка на ванну', 
    desc: 'Эстетичная защита от брызг. Неподвижная часть + распашная дверца.',
    img: '/premium_bath_screen_1780572000188.png',
    price: '~8 000 ₽ (на заводе)'
  }
];

export default function Configurator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [projectTier, setProjectTier] = useState<'basic' | 'complex'>('basic');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const activeType = CABIN_TYPES[activeIndex];

  return (
    <div className="bg-[#0f0f11] border border-white/5 rounded-[2.5rem] overflow-hidden relative">
      
      {/* Visual Constructor Area */}
      <div className="flex flex-col xl:flex-row">
        
        {/* Left: 3D Carousel Viewer */}
        <div className="xl:w-3/5 relative min-h-[500px] xl:min-h-[650px] bg-black/50 overflow-hidden flex flex-col justify-center py-12">
          
          {/* Swiper Carousel */}
          <div className="w-full mt-4 mb-8">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              modules={[EffectCoverflow, Navigation]}
              className="w-full !px-0"
            >
              {CABIN_TYPES.map((type) => (
                <SwiperSlide key={type.id} className="!w-[75%] md:!w-[55%] lg:!w-[45%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative transition-all duration-300">
                  <Image 
                    src={type.img} 
                    alt={type.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Controls */}
          <button className="swiper-button-prev-custom absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 border border-white/10 text-white/70 hover:text-white hover:bg-black/60 transition-all backdrop-blur-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-button-next-custom absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 border border-white/10 text-white/70 hover:text-white hover:bg-black/60 transition-all backdrop-blur-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
            <ChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-6 left-6 right-6 xl:bottom-10 xl:left-10 z-30 pointer-events-none text-center xl:text-left">
            <h3 className="text-3xl md:text-5xl font-serif text-white mb-3 shadow-black/50 drop-shadow-lg">{activeType.name}</h3>
            <p className="text-base md:text-lg text-white/80 max-w-md mx-auto xl:mx-0 shadow-black/50 drop-shadow-md">{activeType.desc}</p>
          </div>
        </div>

        {/* Right: Selection Panel */}
        <div className="xl:w-2/5 p-6 xl:p-10 flex flex-col bg-white/[0.02] border-l border-white/5">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-sm font-mono text-white/50 uppercase tracking-widest">Выберите конфигурацию</h4>
            </div>
            
            <div className="flex flex-col gap-3">
              {CABIN_TYPES.map((type, index) => (
                <button
                  key={type.id}
                  onClick={() => swiperInstance?.slideToLoop(index)}
                  className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-primary/10 border-primary text-white shadow-[0_0_30px_rgba(var(--primary),0.15)] scale-[1.02]'
                      : 'bg-white/[0.03] border-white/5 text-white/60 hover:bg-white/[0.08] hover:text-white hover:border-white/20'
                  }`}
                >
                  <span className="font-medium text-lg">{type.name}</span>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                    activeIndex === index ? 'border-primary bg-primary text-white' : 'border-white/20 text-transparent'
                  }`}>
                    {activeIndex === index && <Check size={14} />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-white/10">
            <div className="mb-6">
              <h4 className="text-sm font-mono text-white/50 uppercase tracking-widest mb-4">Уровень сложности</h4>
              <div className="flex gap-2">
                <button
                  onClick={() => setProjectTier('basic')}
                  className={`flex-1 p-3 rounded-xl border text-left transition-all ${
                    projectTier === 'basic' 
                      ? 'bg-white/10 border-white/30 text-white' 
                      : 'bg-white/[0.02] border-white/5 text-white/50 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="font-medium">Базовый</div>
                  <div className="text-xs mt-1">1 500 ₽</div>
                </button>
                <button
                  onClick={() => setProjectTier('complex')}
                  className={`flex-1 p-3 rounded-xl border text-left transition-all ${
                    projectTier === 'complex' 
                      ? 'bg-primary/20 border-primary text-white' 
                      : 'bg-white/[0.02] border-white/5 text-white/50 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="font-medium">Сложный</div>
                  <div className="text-xs mt-1 text-primary">3 000 ₽</div>
                </button>
              </div>
            </div>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 mb-6 shadow-inner w-full">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-base font-medium text-white/90">
                Ориентир. цена стекла: {activeType.price}
              </span>
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full group bg-white text-black p-5 rounded-2xl font-bold flex items-center justify-between transition-all hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]"
            >
              <span className="text-xl">Заполнить ТЗ для чертежа</span>
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <ArrowRight size={20} />
              </div>
            </button>
            <p className="text-center text-sm text-white/40 mt-5 font-mono">
              Чертёж {projectTier === 'basic' ? '1 500 ₽' : '3 000 ₽'} • Готовность {projectTier === 'basic' ? '24 часа' : '48 часов'}
            </p>
          </div>
        </div>

      </div>

      <ApplicationBlankModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialType={activeType.name}
        projectTier={projectTier}
      />
    </div>
  );
}
