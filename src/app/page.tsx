"use client";

import Image from "next/image";
import Configurator from "@/components/Configurator";
import { 
  ArrowRight,
  Check, 
  Ruler, 
  FileText, 
  Wrench, 
  AlertCircle,
  FileCheck2,
  X,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToConfigurator = () => {
    const el = document.getElementById('configurator');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      q: "01 / ОТВЕТСТВЕННОСТЬ ЗА РАЗМЕРЫ",
      a: "Если ошибка в нашем чертеже (неверно рассчитан зазор под петлю) — мы бесплатно переделываем чертеж и компенсируем вам затраты. Если вы неверно сняли размеры помещения — ответственность на вас. Пожалуйста, следуйте нашей инструкции по замерам."
    },
    {
      q: "02 / ВЫБОР ФУРНИТУРЫ",
      a: "Производство стекла начнется только после того, как вы определитесь с петлями. Разные петли требуют разных вырезов в стекле. Вы можете прислать ссылки на фурнитуру позже напрямую нашему инженеру."
    },
    {
      q: "03 / ЭКОНОМИКА ПРОЕКТА",
      a: "В розничном магазине за 30 000 руб вы получите тонкое стекло (4-6 мм) и пластиковые ролики. За те же деньги, заказав стекло 8 мм на заводе по нашему чертежу, вы соберете кабину премиум-класса, которая в салоне стоит от 80 000 руб."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-6 w-6 items-center justify-center bg-black text-white text-xs font-bold rounded-sm">D</div>
            <span className="text-sm font-bold tracking-widest uppercase">Dwgglass</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-black/60">
            <a href="#how-it-works" className="hover:text-black transition-colors">Процесс</a>
            <a href="#proof" className="hover:text-black transition-colors">Спецификации</a>
            <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
          </div>
          <button onClick={scrollToConfigurator} className="border border-black px-5 py-2 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white rounded-sm">
            Заказать ТЗ
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 border-b border-black/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-9">
              <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-black/50">
                <span className="w-8 h-[1px] bg-black/30"></span>
                Инженерное проектирование
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.9] mb-8">
                ТОЧНОСТЬ.<br />
                БЕЗ КОМПРОМИССОВ.
              </h1>
              <p className="max-w-2xl text-xl font-medium leading-relaxed text-black/70 mb-12">
                Сэкономьте до 50 000 ₽ на душевой кабине. Вы снимаете размеры — мы создаем строгий CAD-чертеж (PDF + DWG), который примет любое стекольное производство.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button onClick={scrollToConfigurator} className="w-full sm:w-auto bg-black text-white px-10 py-5 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 rounded-sm">
                  Рассчитать проект <ArrowRight size={16} />
                </button>
                <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-widest text-black/60">
                  <div className="flex items-center gap-2"><Check size={14} className="text-black"/> 100% Допуск</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-black"/> 24 Часа</div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block lg:col-span-3 pb-4">
              <div className="border border-black/10 p-6 rounded-sm bg-gray-50/50">
                <div className="text-[10px] font-mono text-black/40 mb-4">SPEC_01 // PARAMETERS</div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-black/10 pb-2">
                    <span className="text-xs font-bold uppercase">Формат</span>
                    <span className="text-xs font-mono text-black/60">PDF / DWG</span>
                  </div>
                  <div className="flex justify-between border-b border-black/10 pb-2">
                    <span className="text-xs font-bold uppercase">Точность</span>
                    <span className="text-xs font-mono text-black/60">± 0.5 мм</span>
                  </div>
                  <div className="flex justify-between border-b border-black/10 pb-2">
                    <span className="text-xs font-bold uppercase">Цена</span>
                    <span className="text-xs font-mono text-black/60">1 500 ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 border-b border-black/10 bg-gray-50/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Завод не примет заказ<br/>«на пальцах»</h2>
              <div className="space-y-6 text-lg text-black/70 font-medium">
                <p>
                  Попытка заказать каленое стекло без точных координат сверления под фурнитуру — это гарантированная потеря денег.
                </p>
                <p>
                  Производству нужны технологические зазоры (2-3 мм) и жесткие допуски. Ошибка на миллиметр приведет к тому, что стекло не встанет в нишу. А каленое стекло подрезать невозможно.
                </p>
              </div>
            </div>
            
            <div className="border border-black p-8 bg-white relative rounded-sm shadow-[8px_8px_0_rgba(0,0,0,1)]">
              <div className="absolute -top-3 left-8 bg-white px-2 text-xs font-bold tracking-widest uppercase">
                Требования производства
              </div>
              <div className="flex items-start gap-4">
                <AlertCircle className="text-black shrink-0" size={24} />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider mb-2">Отказ в приемке ТЗ</p>
                  <p className="text-sm text-black/60 leading-relaxed font-mono">
                    "Для запуска в производство необходимо предоставить точный чертеж с допусками и вырезами под фурнитуру. Эскизы от руки без указания зазоров в работу не принимаются."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section id="proof" className="py-32 border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Стандарты документации</h2>
              <p className="text-black/60 font-medium">Разница между любительским подходом и инженерной точностью.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
            {/* Before */}
            <div className="bg-white p-12">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 mb-12">
                <X size={16} /> 01. Эскиз от руки (Риск отказа)
              </div>
              <div className="aspect-video border border-black/10 bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(blue 1px, transparent 1px), linear-gradient(90deg, blue 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="transform -rotate-2 text-center text-black/50 font-writing text-2xl relative z-10">
                  <div className="mb-2">Ширина 90</div>
                  <div className="w-32 h-48 border-2 border-black/40 mx-auto"></div>
                  <div className="mt-2">Высота 2м</div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="bg-white p-12">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black mb-12">
                <FileCheck2 size={16} /> 02. CAD-Чертеж (Гарантия качества)
              </div>
              <div className="aspect-video border border-black bg-white flex items-center justify-center p-8 relative">
                <div className="w-full h-full border border-black/20 flex flex-col p-4">
                  <div className="flex justify-between border-b border-black/10 pb-2 mb-4">
                    <span className="text-[9px] font-mono">DRAWING_NO: 001</span>
                    <span className="text-[9px] font-mono">TOLERANCE: ±0.5</span>
                  </div>
                  <div className="flex-1 relative flex items-center justify-center">
                    <div className="w-32 h-48 border border-black relative">
                      <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-[9px] font-mono -rotate-90">2000.0</div>
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono">900.0</div>
                      <div className="absolute -right-1 top-8 w-2 h-4 border border-black"></div>
                      <div className="absolute -right-1 bottom-8 w-2 h-4 border border-black"></div>
                      <div className="absolute top-6 -right-24 text-[8px] font-mono border border-black p-1 bg-white">
                        DETAIL A<br/>HOLE Ø14
                      </div>
                      <svg className="absolute top-8 right-0 w-24 h-px bg-black"></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-32 border-b border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Протокол работы</h2>
            <p className="text-white/60 font-medium">4 шага от замеров до готового чертежа.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/20 border border-white/20">
            {[
              { icon: <Check size={20}/>, title: "Форма", desc: "Угловая, в нишу, П-образная или нестандарт." },
              { icon: <Ruler size={20}/>, title: "Габариты", desc: "Измерьте ширину и высоту ниши рулеткой." },
              { icon: <Wrench size={20}/>, title: "Фурнитура", desc: "Прикрепите ссылки на петли. Мы рассчитаем вырезы." },
              { icon: <FileText size={20}/>, title: "Экспорт", desc: "Через 24ч файл PDF/DWG у вас в Telegram." }
            ].map((step, i) => (
              <div key={i} className="bg-black p-10 group hover:bg-white hover:text-black transition-colors duration-300">
                <div className="text-[10px] font-mono text-white/40 mb-8 group-hover:text-black/40">STEP // 0{i+1}</div>
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{step.title}</h3>
                <p className="text-sm text-white/60 font-medium leading-relaxed group-hover:text-black/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurator Section */}
      <section id="configurator" className="py-32 border-b border-black/10 bg-gray-50/50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Спецификация заказа</h2>
            <p className="text-black/60 font-medium text-lg">Заполните технические параметры проекта.</p>
          </div>
          
          <Configurator />
          
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 border-b border-black/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-16 text-center">Частые вопросы</h2>
          
          <div className="border-t border-black/10">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-black/10">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-8 flex justify-between items-center text-left hover:text-black/70 transition-colors"
                >
                  <span className="text-sm font-bold uppercase tracking-widest">{faq.q}</span>
                  <ChevronDown className={`transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} size={20}/>
                </button>
                {openFaq === i && (
                  <div className="pb-8 text-black/70 font-medium leading-relaxed pr-12">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center bg-black text-white text-xs font-bold rounded-sm">D</div>
            <span className="text-xs font-bold tracking-widest uppercase">Dwgglass</span>
          </div>
          <div className="text-black/40 text-[10px] font-mono uppercase tracking-widest">
            © 2026. Сделано инженерами.
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-black/60">
            <a href="#" className="hover:text-black transition-colors">Политика</a>
            <a href="#" className="hover:text-black transition-colors">Telegram Support</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
