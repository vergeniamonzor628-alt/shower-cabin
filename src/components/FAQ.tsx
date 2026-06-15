"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const faqs = [
  {
    question: "что, если я измерю неправильно?",
    answer: "мы страхуем вас от этого. перед тем как делать чертёж, наш инженер проверяет ваши замеры на возможные перекосы. а если ошибка произойдет по вине нашего чертежа — мы вернем деньги за проект и компенсируем стоимость стекла."
  },
  {
    question: "где мне заказать само стекло?",
    answer: "практически в любом городе есть заводы или крупные фабрики по обработке стекла. вы просто отправляете им наш pdf-файл в мессенджер или на почту — он составлен по гостам производства, им всё будет абсолютно понятно."
  },
  {
    question: "а что делать с фурнитурой? где брать петли и ручки?",
    answer: "вы можете купить их в любом строительном гипермаркете (леруа мерлен) или заказать на ozon/wildberries. в конфигураторе выше вы просто прикрепляете ссылки на то, что вам понравилось, а мы делаем точные вырезы в стекле именно под вашу фурнитуру."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-slate-200/50">
      <RevealOnScroll className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-slate-900 mb-6 uppercase">вопросы и ответы</h2>
      </RevealOnScroll>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <RevealOnScroll key={index} delay={index * 0.1}>
            <div 
              className="group border border-slate-200 rounded-3xl p-6 md:p-8 cursor-pointer hover:border-[#2563EB]/50 transition-colors duration-500 bg-slate-50 hover:bg-blue-50/30 text-center"
              onClick={() => toggleOpen(index)}
            >
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-2xl md:text-3xl font-sans font-medium text-slate-900 uppercase">
                  {faq.question}
                </h3>
                <motion.div 
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#2563EB] shadow-sm"
                >
                  <ChevronDown size={24} strokeWidth={2} />
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pt-6 text-slate-600 font-light leading-relaxed text-lg md:text-xl uppercase max-w-3xl mx-auto">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
