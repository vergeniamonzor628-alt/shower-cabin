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
  ChevronDown,
  Layers,
  Settings
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToConfigurator = () => {
    const el = document.getElementById('configurator');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      q: "Кто несет ответственность за размеры?",
      a: "Если ошибка в нашем чертеже (неверно рассчитан зазор под петлю) — мы бесплатно переделываем чертеж и компенсируем вам затраты. Если вы неверно сняли размеры помещения — ответственность на вас. Пожалуйста, следуйте нашей инструкции по замерам."
    },
    {
      q: "Как выбрать фурнитуру?",
      a: "Производство стекла начнется только после того, как вы определитесь с петлями. Разные петли требуют разных вырезов в стекле. Вы можете прислать ссылки на фурнитуру позже напрямую нашему инженеру."
    },
    {
      q: "Сколько я реально сэкономлю?",
      a: "В розничном магазине за 30 000 руб вы получите тонкое стекло (4-6 мм) и пластиковые ролики. За те же деньги, заказав стекло 8 мм на заводе по нашему чертежу, вы соберете кабину премиум-класса, которая в салоне стоит от 80 000 руб."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-violet-500/30">
      
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050505]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-white font-bold shadow-[0_0_15px_rgba(139,92,246,0.5)]">D</div>
            <span className="text-xl font-bold tracking-tight text-white">Dwgglass</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-white transition-colors">Сервисы</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">Как это работает</a>
            <a href="#pricing" className="hover:text-white transition-colors">Цены</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <button onClick={scrollToConfigurator} className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 border border-white/10">
            Заказать ТЗ
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero_bg_1780439389103.png" 
            alt="Luxury Bathroom" 
            fill 
            className="object-cover opacity-30 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]"></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-10">
          <div className={`inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 mb-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            Чертежи стекла онлайн (PDF + DWG)
          </div>
          
          <h1 className={`mx-auto max-w-5xl text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Сэкономьте до 50 000 ₽ <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">на душевой кабине</span>
          </h1>
          
          <p className={`mx-auto max-w-2xl text-lg sm:text-xl text-slate-400 mb-12 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Мы создаем точные CAD-чертежи по вашим размерам. С нашим файлом любой стекольный завод изготовит кабину вашей мечты без магазинных наценок.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button onClick={scrollToConfigurator} className="w-full sm:w-auto rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] flex items-center justify-center gap-2 group">
              Спроектировать кабину 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#services" className="w-full sm:w-auto rounded-full bg-white/5 border border-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 flex items-center justify-center">
              Узнать больше
            </a>
          </div>
        </div>
      </section>

      {/* Services (From Client Video) */}
      <section id="services" className="py-24 border-t border-white/5 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Наши сервисы</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Мы помогаем спроектировать стеклянные душевые по вашим размерам: точные вырезы, зазоры под крепежи, экспорт готовых спецификаций.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Layers size={24}/>, title: "Точная геометрия", desc: "Рассчитываем идеальные зазоры для силиконовых уплотнителей и петель." },
              { icon: <Settings size={24}/>, title: "Подбор фурнитуры", desc: "Адаптируем чертеж под любую выбранную вами фурнитуру с маркетплейсов." },
              { icon: <FileCheck2 size={24}/>, title: "Готовые файлы", desc: "Выдаем PDF для вас и DWG для станков с ЧПУ на заводе." }
            ].map((srv, i) => (
              <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-violet-500/30">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white transition-all">
                  {srv.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{srv.title}</h3>
                <p className="text-slate-400">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution (Proof) */}
      <section className="py-24 border-t border-white/5 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-violet-600/10 blur-[100px] pointer-events-none"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Завод не примет заказ<br/>«на пальцах»</h2>
              <p className="text-lg text-slate-400 mb-8">
                Попытка заказать каленое стекло без точных координат сверления под фурнитуру — это гарантированная потеря денег. Ошибка на миллиметр приведет к тому, что стекло не встанет в нишу, а подрезать его невозможно.
              </p>
              
              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur-sm flex gap-4 items-start">
                <AlertCircle className="text-red-400 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-2">Отказ в приемке</h4>
                  <p className="text-slate-400 text-sm">
                    "Для запуска в производство необходимо предоставить точный чертеж с допусками. Эскизы от руки без указания зазоров в работу не принимаются."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* After (Good) */}
              <div className="rounded-2xl border border-white/10 bg-[#111] p-2 shadow-2xl relative z-10 transform lg:-translate-x-8">
                <div className="absolute top-4 left-4 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Check size={14}/> Наш CAD-Чертеж
                </div>
                <div className="aspect-[4/3] rounded-xl border border-white/5 bg-[#1a1a1a] flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="w-full h-full border border-violet-500/30 rounded-lg flex flex-col p-4 relative">
                    <div className="flex justify-between border-b border-white/10 pb-2 mb-4 text-xs font-mono text-slate-500">
                      <span>TOLERANCE: ±0.5</span>
                      <span>FORMAT: DWG/PDF</span>
                    </div>
                    <div className="flex-1 relative flex items-center justify-center">
                      <div className="w-32 h-48 border-2 border-violet-400/50 relative rounded-sm shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400">2000.0</div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-slate-400">900.0</div>
                        <div className="absolute top-6 right-6 w-3 h-3 rounded-full border border-violet-400/50"></div>
                        <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full border border-violet-400/50"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Before (Bad) */}
              <div className="absolute -bottom-8 -right-4 lg:-right-12 w-2/3 rounded-2xl border border-white/10 bg-[#111] p-2 shadow-2xl z-0 opacity-60 grayscale rotate-6">
                <div className="absolute top-4 right-4 bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 z-20">
                  <X size={14}/> Эскиз от руки
                </div>
                <div className="aspect-[4/3] rounded-xl bg-[#e5e5e5] flex items-center justify-center p-8">
                  <div className="transform -rotate-6 text-center text-black/50 font-writing text-xl">
                    <div className="mb-2">~90 см</div>
                    <div className="w-24 h-32 border-2 border-black/40 mx-auto rounded-lg"></div>
                    <div className="mt-2">2 метра</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">4 шага до идеальной кабины</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: <Check size={24}/>, title: "1. Форма", desc: "Выберите тип кабины: угловая, в нишу или нестандарт." },
              { icon: <Ruler size={24}/>, title: "2. Габариты", desc: "Измерьте ширину и высоту ниши обычной рулеткой." },
              { icon: <Wrench size={24}/>, title: "3. Фурнитура", desc: "Прикрепите ссылки на петли. Мы рассчитаем вырезы." },
              { icon: <FileText size={24}/>, title: "4. Экспорт", desc: "Получите готовый файл PDF/DWG в Telegram." }
            ].map((step, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center transition-all hover:bg-white/[0.04]">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-white border border-white/10">
                  {step.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section id="pricing" className="py-24 border-t border-white/5 bg-[#0a0a0a]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Цены на чертежи</h2>
            <p className="text-slate-400">Единый тариф для любых стандартных кабин.</p>
          </div>
          
          <div className="rounded-3xl border border-violet-500/30 bg-[#111] p-8 sm:p-12 shadow-[0_0_40px_rgba(139,92,246,0.1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6">
              <span className="inline-flex rounded-full bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-400">
                Популярный выбор
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Инженерный проект</h3>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-extrabold text-white">1 500 ₽</span>
              <span className="text-slate-500">/ чертеж</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                "Точный расчет зазоров под вашу фурнитуру",
                "Вырезы под ручки и петли",
                "Экспорт в форматы PDF и DWG",
                "Прямая поддержка от инженера",
                "Готовность за 24 часа"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <Check size={18} className="text-violet-400" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <button onClick={scrollToConfigurator} className="w-full rounded-xl bg-white text-black px-8 py-4 text-base font-bold transition-all hover:bg-gray-200 hover:scale-[1.02]">
              Заказать сейчас
            </button>
          </div>
        </div>
      </section>

      {/* Configurator Section */}
      <section id="configurator" className="py-24 border-t border-white/5 relative">
        <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none"></div>
        
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Сконфигурируйте заказ</h2>
            <p className="text-slate-400 text-lg">Заполните форму, и мы подготовим идеальный файл для вашего стекла.</p>
          </div>
          
          <Configurator />
          
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 border-t border-white/5 bg-[#0a0a0a]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 text-center">Частые вопросы</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-colors hover:bg-white/10">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-6 flex justify-between items-center text-left"
                >
                  <span className="font-semibold text-white">{faq.q}</span>
                  <ChevronDown className={`text-slate-400 transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} size={20}/>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-400">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050505] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black font-bold">D</div>
            <span className="text-lg font-bold">Dwgglass</span>
          </div>
          <div className="text-slate-500 text-sm">
            © 2026. Сделано инженерами.
          </div>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Поддержка</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
