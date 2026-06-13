"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { Check } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';
import ApplicationBlankModal from './ApplicationBlankModal';

const CABIN_TYPES = [
  { id: 'corner', name: 'Угловая', img: '/images/cad_corner.png', allowedDoors: ['swing', 'sliding', 'folding'], desc: 'Классическое решение для экономии пространства. Идеально подходит для небольших ванных комнат, устанавливается в угол помещения.', price: '~15 000 ₽ (за стекло)' },
  { id: 'niche', name: 'В нишу', img: '/images/cad_niche.png', allowedDoors: ['stationary', 'swing', 'sliding', 'folding'], desc: 'Душевая дверь, которая устанавливается между тремя стенами. Максимально практично и надежно.', price: '~12 000 ₽ (за стекло)' },
  { id: 'walkin', name: 'Свободный вход (Walk-in)', img: '/images/cad_walkin.png', allowedDoors: ['stationary'], desc: 'Одно неподвижное стекло без дверей. Минималистичный дизайн, визуально расширяющий пространство.', price: '~10 000 ₽ (за стекло)' },
  { id: 'bath', name: 'Шторка на ванну', img: '/images/cad_bath_screen.png', allowedDoors: ['stationary', 'swing', 'sliding', 'folding'], desc: 'Стеклянная перегородка на борт ванны. Защищает от брызг и выглядит намного эстетичнее тканевых штор.', price: '~8 000 ₽ (за стекло)' },
];

const DOOR_LABELS: Record<string, string> = {
  stationary: 'Глухое стекло',
  swing: 'Распашная',
  sliding: 'Раздвижная',
  folding: 'Гармошка'
};

import BlueprintOverlay from './configurator/BlueprintOverlay';

export default function Configurator() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [activeCabin, setActiveCabin] = useState(CABIN_TYPES[0].id);
  const [gapMode, setGapMode] = useState<'links' | 'exact'>('links');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [doorType, setDoorType] = useState('stationary');
  const [doorPos, setDoorPos] = useState<'left' | 'right'>('left');
  const [hingePos, setHingePos] = useState<'left' | 'right'>('left');

  const activeTypeInfo = CABIN_TYPES.find(c => c.id === activeCabin)!;
  const currentDoorType = activeTypeInfo.allowedDoors.includes(doorType) ? doorType : activeTypeInfo.allowedDoors[0];

  const getBaseImage = () => {
    return activeTypeInfo.img;
  };


  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(s => s + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(s => s - 1);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-start">
      
      {/* LEFT COLUMN: Visualizer (Sticky on all screens) */}
      <div className="lg:col-span-5 sticky top-20 lg:top-32 w-full rounded-none lg:rounded-none overflow-hidden border border-[#e2e0db] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] bg-white z-40">
        <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden bg-zinc-900">
          <div className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-100 z-10">
            {/* Base Image (Static) */}
            <Image 
              src={getBaseImage()} 
              alt="Фон ванной" 
              fill
              unoptimized
              priority 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center z-0"
            />
            {/* Blueprint HUD Overlay */}
            <div className="absolute bottom-4 right-4 w-[140px] h-[140px] sm:w-[220px] sm:h-[220px] z-20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] rounded-none">
              <BlueprintOverlay 
                activeCabin={activeCabin} 
                doorType={currentDoorType} 
                doorPos={doorPos} 
                hingePos={hingePos} 
              />
            </div>
          </div>
        </div>
        
        {/* Description Block */}
        <div className="p-3 sm:p-6 bg-white border-t border-[#e2e0db]">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <h4 className="text-[#2d2c2b] font-medium text-base sm:text-lg">
              {CABIN_TYPES.find(c => c.id === activeCabin)?.name}
            </h4>
            <span className="bg-primary/20 text-primary px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
              {CABIN_TYPES.find(c => c.id === activeCabin)?.price}
            </span>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed hidden sm:block">
            {CABIN_TYPES.find(c => c.id === activeCabin)?.desc}
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: Form Panel (Wizard) */}
      <div className="lg:col-span-7 flex flex-col bg-white/60 border border-[#e2e0db] rounded-none sm:rounded-none p-4 sm:p-10 backdrop-blur-[20px] min-h-[300px] sm:min-h-[500px]">
        
        {/* Wizard Progress */}
        <div className="flex items-center justify-between mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[#e2e0db]">
          <div className="flex gap-1.5 sm:gap-2">
            {[1, 2, 3, 4].map(step => (
              <div 
                key={step}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  currentStep === step ? 'w-6 sm:w-8 bg-primary' : 
                  currentStep > step ? 'w-3 sm:w-4 bg-primary/50' : 'w-3 sm:w-4 bg-slate-200'
                }`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm font-medium text-slate-500">
            Шаг {currentStep} из {totalSteps}
          </span>
        </div>

        {/* Wizard Content Area */}
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            
            {/* Step 1: Shape */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg sm:text-2xl font-sans font-medium tracking-tight text-[#2d2c2b] mb-4 sm:mb-6">
                  Форма кабины
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
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
                      <div className={`flex flex-col items-center justify-center text-center gap-1 sm:gap-2 p-3 sm:p-4 h-20 sm:h-24 rounded-none sm:rounded-none border-2 transition-all duration-300 ${activeCabin === cabin.id ? 'bg-primary/5 border-primary shadow-[0_0_15px_rgba(255,102,0,0.1)]' : 'bg-white border-[#e2e0db] hover:border-slate-300'}`}>
                        <span className={`text-xs sm:text-base font-medium ${activeCabin === cabin.id ? 'text-[#2d2c2b]' : 'text-slate-600'}`}>{cabin.name}</span>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Mechanism */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg sm:text-2xl font-sans font-medium tracking-tight text-[#2d2c2b] mb-4 sm:mb-6">
                  Механизм и двери
                </h3>
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-slate-700 mb-2 sm:mb-3 block">Тип механизма</label>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {activeTypeInfo.allowedDoors.map(dt => (
                        <button
                          key={dt}
                          onClick={() => setDoorType(dt)}
                          className={`px-3 sm:px-5 py-2 sm:py-3 rounded-none sm:rounded-none border-2 text-xs sm:text-sm font-medium transition-all ${
                            currentDoorType === dt 
                              ? 'bg-primary/5 text-[#2d2c2b] border-primary' 
                              : 'bg-white border-[#e2e0db] text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                          }`}
                        >
                          {DOOR_LABELS[dt]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {currentDoorType !== 'stationary' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="bg-slate-50/50 rounded-none sm:rounded-none border border-slate-200 p-4 sm:p-5">
                        <label className="text-[10px] sm:text-xs font-bold text-slate-500 mb-3 sm:mb-4 block uppercase tracking-wider">Расположение двери</label>
                        <div className="flex gap-2 sm:gap-3">
                          <button 
                            onClick={() => setDoorPos('left')} 
                            className={`flex-1 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-none sm:rounded-none transition-all border-2 ${doorPos === 'left' ? 'bg-white border-primary text-[#2d2c2b] shadow-sm' : 'bg-white border-transparent text-slate-600 hover:bg-slate-100'}`}
                          >
                            Слева
                          </button>
                          <button 
                            onClick={() => setDoorPos('right')} 
                            className={`flex-1 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-none sm:rounded-none transition-all border-2 ${doorPos === 'right' ? 'bg-white border-primary text-[#2d2c2b] shadow-sm' : 'bg-white border-transparent text-slate-600 hover:bg-slate-100'}`}
                          >
                            Справа
                          </button>
                        </div>
                      </div>
                      
                      {currentDoorType === 'swing' && (
                        <div className="bg-slate-50/50 rounded-none sm:rounded-none border border-slate-200 p-4 sm:p-5">
                          <label className="text-[10px] sm:text-xs font-bold text-slate-500 mb-3 sm:mb-4 block uppercase tracking-wider">Расположение петель</label>
                          <div className="flex gap-2 sm:gap-3">
                            <button 
                              onClick={() => setHingePos('left')} 
                              className={`flex-1 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-none sm:rounded-none transition-all border-2 ${hingePos === 'left' ? 'bg-white border-primary text-[#2d2c2b] shadow-sm' : 'bg-white border-transparent text-slate-600 hover:bg-slate-100'}`}
                            >
                              Слева
                            </button>
                            <button 
                              onClick={() => setHingePos('right')} 
                              className={`flex-1 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-none sm:rounded-none transition-all border-2 ${hingePos === 'right' ? 'bg-white border-primary text-[#2d2c2b] shadow-sm' : 'bg-white border-transparent text-slate-600 hover:bg-slate-100'}`}
                            >
                              Справа
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 3: Dimensions */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg sm:text-2xl font-sans font-medium tracking-tight text-[#2d2c2b] mb-4 sm:mb-6">
                  Габариты и зазоры
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">Ширина (мм)</label>
                    <input type="number" placeholder="Например: 900" className="w-full bg-white border-2 border-[#e2e0db] rounded-none sm:rounded-none px-3 sm:px-4 py-2 sm:py-3 text-[#2d2c2b] placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">Высота (мм)</label>
                    <input type="number" placeholder="Например: 2000" className="w-full bg-white border-2 border-[#e2e0db] rounded-none sm:rounded-none px-3 sm:px-4 py-2 sm:py-3 text-[#2d2c2b] placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm" />
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <p className="text-xs sm:text-sm font-medium text-slate-700 mb-3 sm:mb-4">Технологические вырезы</p>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <label className={`flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-none sm:rounded-none border-2 cursor-pointer transition-all ${gapMode === 'links' ? 'bg-primary/5 border-primary' : 'bg-white border-[#e2e0db]'}`}>
                      <input type="radio" checked={gapMode === 'links'} onChange={() => setGapMode('links')} className="mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4 accent-primary" />
                      <div>
                        <span className="text-slate-800 text-xs sm:text-sm font-medium block mb-0.5 sm:mb-1">Прикреплю ссылки на фурнитуру</span>
                        <span className="text-slate-500 text-[10px] sm:text-xs leading-snug">Инженер сам скачает чертежи петель и заложит нужные зазоры</span>
                      </div>
                    </label>
                    <label className={`flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-none sm:rounded-none border-2 cursor-pointer transition-all ${gapMode === 'exact' ? 'bg-primary/5 border-primary' : 'bg-white border-[#e2e0db]'}`}>
                      <input type="radio" checked={gapMode === 'exact'} onChange={() => setGapMode('exact')} className="mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4 accent-primary" />
                      <div>
                        <span className="text-slate-800 text-xs sm:text-sm font-medium block mb-0.5 sm:mb-1">Укажу зазоры вручную</span>
                        <span className="text-slate-500 text-[10px] sm:text-xs">Для опытных монтажников</span>
                      </div>
                    </label>
                  </div>
                </div>

                {gapMode === 'links' ? (
                  <textarea 
                    placeholder="Вставьте ссылки на петли, коннекторы и ручки..."
                    className="w-full bg-white border-2 border-[#e2e0db] rounded-none sm:rounded-none px-3 sm:px-4 py-2 sm:py-3 text-[#2d2c2b] placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all min-h-[80px] sm:min-h-[120px] resize-none text-sm"
                  />
                ) : (
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex-1">
                      <label className="block text-[10px] sm:text-xs font-medium text-slate-600 mb-1.5 sm:mb-2">Зазор под дверь (мм)</label>
                      <input type="number" placeholder="8" className="w-full bg-white border-2 border-[#e2e0db] rounded-none sm:rounded-none px-3 sm:px-4 py-2 sm:py-3 text-[#2d2c2b] focus:outline-none focus:border-primary transition-colors text-sm" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-[10px] sm:text-xs font-medium text-slate-600 mb-1.5 sm:mb-2">Зазор по стенам (мм)</label>
                      <input type="number" placeholder="3" className="w-full bg-white border-2 border-[#e2e0db] rounded-none sm:rounded-none px-3 sm:px-4 py-2 sm:py-3 text-[#2d2c2b] focus:outline-none focus:border-primary transition-colors text-sm" />
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 4: Contacts & Submit */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  <h3 className="text-lg sm:text-2xl font-sans font-medium tracking-tight text-[#2d2c2b] mb-4 sm:mb-6">
                    Оформление заказа
                  </h3>
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">Ваше Имя</label>
                      <input type="text" placeholder="Иван Иванов" className="w-full bg-white border-2 border-[#e2e0db] rounded-none sm:rounded-none px-3 sm:px-4 py-2 sm:py-3 text-[#2d2c2b] placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">Телефон (WhatsApp/Telegram)</label>
                      <input type="tel" placeholder="+7 (999) 000-00-00" className="w-full bg-white border-2 border-[#e2e0db] rounded-none sm:rounded-none px-3 sm:px-4 py-2 sm:py-3 text-[#2d2c2b] placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm" />
                    </div>
                  </div>
                </div>

                <AnimatedButton 
                  className="w-full py-4 sm:py-5 text-base sm:text-lg shadow-lg shadow-primary/25"
                  variant="primary"
                  shape="rounded"
                  onClick={() => setIsModalOpen(true)}
                >
                  Оплатить 2 000 ₽
                </AnimatedButton>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Wizard Navigation */}
        {currentStep < totalSteps && (
          <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-[#e2e0db] flex items-center justify-between">
            {currentStep > 1 ? (
              <button 
                onClick={prevStep}
                className="px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-slate-500 hover:text-[#2d2c2b] transition-colors"
              >
                ← Назад
              </button>
            ) : <div />}
            
            <button 
              onClick={nextStep}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#2d2c2b] text-white text-xs sm:text-sm font-medium rounded-none sm:rounded-none hover:bg-black hover:shadow-lg transition-all active:scale-95"
            >
              Далее →
            </button>
          </div>
        )}

        {currentStep === totalSteps && (
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#e2e0db] flex justify-start">
            <button 
              onClick={prevStep}
              className="px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-slate-500 hover:text-[#2d2c2b] transition-colors"
            >
              ← Назад
            </button>
          </div>
        )}

      </div>

      <ApplicationBlankModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialType={CABIN_TYPES.find(c => c.id === activeCabin)?.name || ''}
        doorConfig={{
          doorType: DOOR_LABELS[currentDoorType],
          doorPos: doorPos === 'left' ? 'Слева' : 'Справа',
          hingePos: currentDoorType === 'swing' ? (hingePos === 'left' ? 'Слева' : 'Справа') : undefined
        }}
      />
    </div>
  );
}
