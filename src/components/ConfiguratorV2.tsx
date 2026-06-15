"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ApplicationBlankModal from "./ApplicationBlankModal";

type Sides = "1" | "2" | "3" | null;
type DoorType = "hinged" | "sliding" | "fixed" | null;
type Layout = string | null;

const sidesOptions = [
  { id: "1", label: "В НИШУ (1 СТОРОНА)" },
  { id: "2", label: "УГЛОВАЯ (2 СТОРОНЫ)" },
  { id: "3", label: "П-ОБРАЗНАЯ (3 СТОРОНЫ)" },
];

const doorTypeOptions = {
  "1": [
    { id: "hinged", label: "РАСПАШНАЯ ДВЕРЬ" },
    { id: "sliding", label: "РАЗДВИЖНАЯ ДВЕРЬ" },
    { id: "fixed", label: "СТАЦИОНАРНАЯ ПЕРЕГОРОДКА" },
  ],
  "2": [
    { id: "hinged", label: "РАСПАШНЫЕ ДВЕРИ" },
    { id: "sliding", label: "РАЗДВИЖНЫЕ ДВЕРИ" },
    { id: "fixed", label: "СТАЦИОНАРНАЯ ПЕРЕГОРОДКА" },
  ],
  "3": [
    { id: "hinged", label: "РАСПАШНЫЕ ДВЕРИ" },
    { id: "sliding", label: "РАЗДВИЖНЫЕ ДВЕРИ" },
    { id: "fixed", label: "СТАЦИОНАРНАЯ ПЕРЕГОРОДКА" },
  ],
};

const layoutOptions = {
  "1": {
    "hinged": [
      { id: "left", label: "ПЕТЛИ СЛЕВА" },
      { id: "right", label: "ПЕТЛИ СПРАВА" },
      { id: "double", label: "ДВЕ ДВЕРИ" }
    ],
    "sliding": [
      { id: "left", label: "ОТКАТ СЛЕВА НАПРАВО" },
      { id: "right", label: "ОТКАТ СПРАВА НАЛЕВО" },
      { id: "center", label: "РАЗДВИЖЕНИЕ ОТ ЦЕНТРА" }
    ],
    "fixed": [
      { id: "left", label: "КРЕПЛЕНИЕ СЛЕВА" },
      { id: "right", label: "КРЕПЛЕНИЕ СПРАВА" }
    ]
  },
  "2": {
    "hinged": [
      { id: "corner", label: "ВХОД С УГЛА" },
      { id: "left", label: "ДВЕРЬ СЛЕВА" },
      { id: "right", label: "ДВЕРЬ СПРАВА" }
    ],
    "sliding": [
      { id: "corner", label: "ВХОД С УГЛА" },
      { id: "left", label: "СДВИГ СЛЕВА" },
      { id: "right", label: "СДВИГ СПРАВА" }
    ],
    "fixed": [
      { id: "corner", label: "СВОБОДНЫЙ ВХОД" }
    ]
  },
  "3": {
    "hinged": [
      { id: "center", label: "ВХОД ПО ЦЕНТРУ" },
      { id: "left", label: "ВХОД СЛЕВА" },
      { id: "right", label: "ВХОД СПРАВА" }
    ],
    "sliding": [
      { id: "center", label: "СДВИГ ПО ЦЕНТРУ" },
      { id: "side", label: "СДВИГ ВБОК" }
    ],
    "fixed": [
      { id: "center", label: "СВОБОДНЫЙ ВХОД" }
    ]
  }
};

const getImageUrl = (sides: Sides) => {
  if (sides === "1") return "/images/configurator/1-side.png";
  if (sides === "2") return "/images/configurator/2-sides.png";
  if (sides === "3") return "/images/configurator/3-sides.png";
  // Default image if nothing selected yet
  return "/images/configurator/2-sides.png";
};

export const ConfiguratorV2 = () => {
  const [step, setStep] = useState(1);
  const [sides, setSides] = useState<Sides>(null);
  const [doorType, setDoorType] = useState<DoorType>(null);
  const [layout, setLayout] = useState<Layout>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    if (step === 1 && sides) setStep(2);
    if (step === 2 && doorType) setStep(3);
    if (step === 3 && layout) setStep(4);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const getSummary = () => {
    let text = "";
    if (sides) text += sidesOptions.find((o) => o.id === sides)?.label + " | ";
    if (doorType && sides) text += doorTypeOptions[sides].find((o) => o.id === doorType)?.label + " | ";
    if (layout && sides && doorType) {
      // @ts-ignore
      text += layoutOptions[sides][doorType].find((o: any) => o.id === layout)?.label;
    }
    return text.replace(/ \| $/, "");
  };

  return (
    <section className="py-20 bg-black text-white" id="configurator">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-oswald tracking-wider uppercase mb-4">
            СОЗДАЙТЕ СВОЮ ДУШЕВУЮ
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto uppercase text-sm md:text-base tracking-widest">
            ВЫБЕРИТЕ КОНФИГУРАЦИЮ, КОТОРАЯ ИДЕАЛЬНО ВПИШЕТСЯ В ВАШ ИНТЕРЬЕР
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 ring-1 ring-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={sides || "default"}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={getImageUrl(sides)}
                    alt="Configurator preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Summary overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/50 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                  <p className="text-xs text-blue-400 tracking-widest uppercase mb-1">ТЕКУЩАЯ КОНФИГУРАЦИЯ</p>
                  <p className="text-sm font-light text-white uppercase">{getSummary() || "СДЕЛАЙТЕ ВЫБОР"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Controls */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-white/10">
                  <motion.div
                    className="h-full bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: step >= i ? "100%" : "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {/* STEP 1 */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-6"
                >
                  <h3 className="text-2xl font-oswald uppercase tracking-wider mb-2">ШАГ 1: РАСПОЛОЖЕНИЕ</h3>
                  <div className="grid gap-4">
                    {sidesOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSides(option.id as Sides)}
                        className={`p-6 text-left border rounded-xl transition-all duration-300 uppercase tracking-wider text-sm font-medium
                          ${sides === option.id ? "bg-blue-600/20 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]" : "border-white/10 hover:border-white/30 hover:bg-white/5"}
                        `}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2 */}
              {step === 2 && sides && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-6"
                >
                  <h3 className="text-2xl font-oswald uppercase tracking-wider mb-2">ШАГ 2: ТИП ОТКРЫВАНИЯ</h3>
                  <div className="grid gap-4">
                    {doorTypeOptions[sides].map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setDoorType(option.id as DoorType)}
                        className={`p-6 text-left border rounded-xl transition-all duration-300 uppercase tracking-wider text-sm font-medium
                          ${doorType === option.id ? "bg-blue-600/20 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]" : "border-white/10 hover:border-white/30 hover:bg-white/5"}
                        `}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 3 */}
              {step === 3 && sides && doorType && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-6"
                >
                  <h3 className="text-2xl font-oswald uppercase tracking-wider mb-2">ШАГ 3: КОНФИГУРАЦИЯ</h3>
                  <div className="grid gap-4">
                    {/* @ts-ignore */}
                    {layoutOptions[sides][doorType].map((option: any) => (
                      <button
                        key={option.id}
                        onClick={() => setLayout(option.id)}
                        className={`p-6 text-left border rounded-xl transition-all duration-300 uppercase tracking-wider text-sm font-medium
                          ${layout === option.id ? "bg-blue-600/20 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]" : "border-white/10 hover:border-white/30 hover:bg-white/5"}
                        `}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-6"
                >
                  <div className="p-8 border border-blue-500/30 bg-blue-900/10 rounded-2xl flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-oswald uppercase tracking-wider mb-4">КОНФИГУРАЦИЯ ЗАВЕРШЕНА</h3>
                    <p className="text-gray-400 uppercase tracking-widest text-sm mb-8 leading-relaxed">
                      МЫ ПОЛУЧИЛИ ВАШИ ПРЕДПОЧТЕНИЯ.<br/> 
                      ТЕПЕРЬ ВЫ МОЖЕТЕ ОСТАВИТЬ ЗАЯВКУ ДЛЯ ТОЧНОГО РАСЧЕТА И ПОДГОТОВКИ ЧЕРТЕЖА.
                    </p>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded-full w-full sm:w-auto"
                    >
                      ОСТАВИТЬ ЗАЯВКУ НА РАСЧЕТ
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className={`uppercase tracking-widest text-sm font-bold transition-colors duration-300 px-6 py-3 rounded-full border border-white/20
                  ${step === 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/10"}
                `}
              >
                НАЗАД
              </button>
              
              {step < 4 && (
                <button
                  onClick={handleNext}
                  disabled={(step === 1 && !sides) || (step === 2 && !doorType) || (step === 3 && !layout)}
                  className={`uppercase tracking-widest text-sm font-bold transition-all duration-300 px-8 py-3 rounded-full
                    ${((step === 1 && !sides) || (step === 2 && !doorType) || (step === 3 && !layout)) 
                      ? "bg-white/10 text-white/30 cursor-not-allowed" 
                      : "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]"}
                  `}
                >
                  ДАЛЕЕ
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <ApplicationBlankModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
