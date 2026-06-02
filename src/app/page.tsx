"use client";

import Image from "next/image";
import Configurator from "@/components/Configurator";
import { 
  ArrowRight,
  Settings,
  FileCheck2,
  AlertCircle,
  Plus,
  Minus,
  Maximize,
  Crosshair
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Утилита для анимации плавного появления
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

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
      a: "ЕСЛИ ОШИБКА В НАШЕМ ЧЕРТЕЖЕ — МЫ БЕСПЛАТНО ПЕРЕДЕЛЫВАЕМ ДОКУМЕНТАЦИЮ И КОМПЕНСИРУЕМ ВАМ ЗАТРАТЫ. ЕСЛИ ВЫ НЕВЕРНО СНЯЛИ РАЗМЕРЫ ПОМЕЩЕНИЯ — ОТВЕТСТВЕННОСТЬ НА ВАС. ПОЖАЛУЙСТА, СЛЕДУЙТЕ НАШЕЙ ИНСТРУКЦИИ ПО ЗАМЕРАМ."
    },
    {
      q: "Спецификация фурнитуры?",
      a: "ПРОИЗВОДСТВО СТЕКЛА НАЧНЕТСЯ ТОЛЬКО ПОСЛЕ ОПРЕДЕЛЕНИЯ ТИПА ПЕТЕЛЬ. РАЗНЫЕ ПЕТЛИ ТРЕБУЮТ РАЗНЫХ ВЫРЕЗОВ В МАТЕРИАЛЕ. ССЫЛКИ НА ФУРНИТУРУ МОЖНО ПРИСЛАТЬ ПОЗЖЕ НАПРЯМУЮ НАШЕМУ ИНЖЕНЕРУ."
    },
    {
      q: "Оптимизация бюджета?",
      a: "В РОЗНИЧНОМ МАГАЗИНЕ ЗА 30 000 РУБ ВЫ ПОЛУЧИТЕ СТЕКЛО 4-6 ММ И ПЛАСТИК. ПО ЗАВОДСКОМУ ЧЕРТЕЖУ (СТЕКЛО 8 ММ) ВЫ СОБЕРЕТЕ КАБИНУ ПРЕМИУМ-КЛАССА, КОТОРАЯ В САЛОНЕ СТОИТ ОТ 80 000 РУБ."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white border-x-4 border-foreground mx-auto max-w-[1600px] shadow-2xl relative">
      
      {/* Global Blueprint Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0"></div>

      {/* Header */}
      <header className="fixed top-0 z-50 w-full max-w-[1592px] bg-background/95 backdrop-blur-sm border-b-2 border-foreground">
        <div className="flex h-16 items-stretch justify-between">
          
          <div className="flex items-center gap-4 px-6 border-r-2 border-foreground bg-primary text-white">
            <Crosshair size={24} strokeWidth={1.5} />
            <span className="text-xl font-mono font-bold tracking-widest uppercase">DWG_GLASS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 px-6 text-xs font-mono font-bold text-foreground uppercase tracking-widest">
            <a href="#services" className="hover:text-primary transition-colors">>> Спецификация</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">>> Протокол</a>
            <a href="#faq" className="hover:text-primary transition-colors">>> FAQ</a>
          </div>
          
          <button onClick={scrollToConfigurator} className="border-l-2 border-foreground bg-accent px-8 text-sm font-mono font-bold text-white uppercase tracking-widest transition-all hover:bg-foreground flex items-center gap-2">
            [ RUN CAD ]
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 border-b-2 border-foreground overflow-hidden">
        <div className="px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 border-2 border-foreground p-8 bg-white relative">
            <div className="absolute -top-3 -left-3 text-foreground bg-white"><Plus size={24}/></div>
            <div className="absolute -top-3 -right-3 text-foreground bg-white"><Plus size={24}/></div>
            <div className="absolute -bottom-3 -left-3 text-foreground bg-white"><Plus size={24}/></div>
            <div className="absolute -bottom-3 -right-3 text-foreground bg-white"><Plus size={24}/></div>

            <div className={`inline-block border border-foreground bg-foreground text-background px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest mb-8 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
              SYS.STATUS: ONLINE
            </div>
            
            <h1 className={`text-5xl sm:text-6xl xl:text-7xl font-sans font-black tracking-tighter mb-8 uppercase leading-[0.9] transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              CAD-ПРОЕКТЫ<br />
              <span className="text-primary font-mono text-4xl sm:text-5xl">// СТЕКЛА</span>
            </h1>
            
            <p className={`max-w-md text-sm font-mono text-muted-foreground mb-12 uppercase leading-relaxed transition-all duration-700 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
              > РАЗРАБАТЫВАЕМ ТОЧНЫЕ ИНЖЕНЕРНЫЕ ЧЕРТЕЖИ ПОД СТАНКИ С ЧПУ.<br/>
              > ЗАКАЖИТЕ СТЕКЛО НАПРЯМУЮ НА ЗАВОДЕ.<br/>
              > ТОЧНОСТЬ ДО 1 МИЛЛИМЕТРА.
            </p>
            
            <div className={`transition-all duration-700 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
              <button onClick={scrollToConfigurator} className="w-full sm:w-auto border-2 border-foreground bg-primary px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest text-white transition-all hover:bg-foreground flex items-center justify-center gap-4 group">
                ИНИЦИИРОВАТЬ РАСЧЕТ 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className={`order-1 lg:order-2 relative h-[500px] lg:h-[700px] w-full border-2 border-foreground transition-all duration-1000 delay-700 bg-primary ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}>
            <Image 
              src="/hero_tech_bg_1780444334766.png" 
              alt="CAD Blueprint vs Reality" 
              fill 
              className="object-cover"
              priority
            />
            {/* Technical Overlays */}
            <div className="absolute top-4 left-4 bg-black/80 text-white font-mono text-[10px] px-2 py-1">VIEW: HYBRID_RENDER</div>
            <div className="absolute bottom-4 right-4 bg-primary text-white font-mono text-[10px] px-2 py-1">SCALE: 1:10</div>
          </div>

        </div>
      </section>

      {/* Blueprint Grid Services */}
      <section id="services" className="border-b-2 border-foreground bg-background relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-foreground">
          
          <div className="col-span-1 md:col-span-3 p-6 lg:p-12 border-b-2 border-foreground bg-grid-pattern-lg">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl font-sans font-black uppercase tracking-tighter mb-4">Технический протокол</h2>
              <p className="font-mono text-sm uppercase text-muted-foreground">| Инженерия без допущений |</p>
            </Reveal>
          </div>

          {[
            { id: "S-01", title: "ДОПУСКИ & ЗАЗОРЫ", desc: "РАССЧИТЫВАЕМ МИКРО-ДОПУСКИ ДЛЯ СИЛИКОНОВЫХ УПЛОТНИТЕЛЕЙ. ВОДА ОСТАЕТСЯ ВНУТРИ КОНТУРА." },
            { id: "S-02", title: "ИНТЕГРАЦИЯ ФУРНИТУРЫ", desc: "АДАПТИРУЕМ DWG-ФАЙЛ ПОД ПЕТЛИ И КОННЕКТОРЫ ЛЮБОГО ПРОИЗВОДИТЕЛЯ ИЗ ТЕХ. ЗАДАНИЯ." },
            { id: "S-03", title: "ЭКСПОРТ ЧПУ", desc: "ГЕНЕРИРУЕМ ГОТОВЫЙ DWG ДЛЯ ЗАВОДСКИХ СТАНКОВ И ЧИТАЕМЫЙ PDF ДЛЯ МОНТАЖНИКА." }
          ].map((srv, i) => (
            <Reveal key={i} delay={i * 150} className="p-8 lg:p-12 bg-white relative group hover:bg-secondary transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="mb-8 font-mono text-4xl font-bold text-primary">{srv.id}</div>
              <h3 className="mb-4 text-xl font-sans font-bold uppercase tracking-tight">{srv.title}</h3>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed uppercase">{srv.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works (Data Flow) */}
      <section id="how-it-works" className="border-b-2 border-foreground bg-white relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-foreground">
          
          <div className="col-span-1 md:col-span-4 p-6 lg:p-12 border-b-2 border-foreground bg-primary text-white">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-sans font-black uppercase tracking-tighter">Алгоритм сборки данных</h2>
            </Reveal>
          </div>

          {[
            { num: "01", title: "АРХИТЕКТУРА", desc: "ВЫБОР ТИПА КОНСТРУКЦИИ" },
            { num: "02", title: "ГАБАРИТЫ", desc: "ВВОД X / Y / Z ПАРАМЕТРОВ" },
            { num: "03", title: "ФУРНИТУРА", desc: "ВВОД ССЫЛОК НА ПЕТЛИ" },
            { num: "04", title: "ЭКСПОРТ", desc: "ПОЛУЧЕНИЕ DWG + PDF" }
          ].map((step, i) => (
            <Reveal key={i} delay={i * 100} className="p-8 relative bg-white">
              <div className="text-5xl font-sans font-black text-foreground/10 mb-6">{step.num}</div>
              <h3 className="mb-2 text-base font-sans font-bold text-foreground uppercase">{step.title}</h3>
              <p className="font-mono text-xs text-muted-foreground">{step.desc}</p>
              
              {i < 3 && (
                <div className="absolute top-1/2 -right-3 hidden md:flex items-center justify-center w-6 h-6 bg-foreground text-white z-10 font-mono text-xs">
                  >
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tech FAQ */}
      <section id="faq" className="border-b-2 border-foreground bg-background relative z-10">
        <div className="px-6 lg:px-12 py-20">
          <Reveal>
            <div className="inline-block border border-foreground px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest mb-8">
              DATABASE_QUERY: FAQ
            </div>
          </Reveal>

          <div className="border-2 border-foreground bg-white">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal key={index} delay={index * 100}>
                  <div className="border-b-2 border-foreground last:border-b-0">
                    <button 
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-6 lg:p-8 flex items-center justify-between text-left group hover:bg-secondary transition-colors"
                    >
                      <span className="text-lg lg:text-xl font-sans font-bold uppercase tracking-tight">{faq.q}</span>
                      <div className="text-foreground border-2 border-foreground p-1 font-mono text-xl transition-colors group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                        {isOpen ? '-' : '+'}
                      </div>
                    </button>
                    
                    <div className={`grid transition-all duration-300 ease-in-out bg-secondary ${isOpen ? 'grid-rows-[1fr] border-t-2 border-foreground' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <p className="p-6 lg:p-8 font-mono text-xs lg:text-sm text-foreground leading-relaxed">
                          > {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Configurator Terminal */}
      <section id="configurator" className="bg-primary py-20 relative z-10 bg-grid-pattern border-b-2 border-foreground">
        <div className="mx-auto max-w-5xl px-6 relative z-20">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-sans font-black text-white uppercase tracking-tighter mb-4">Терминал расчетов</h2>
              <p className="font-mono text-xs text-white/70 uppercase">Введите входные параметры для генерации чертежа</p>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <Configurator />
          </Reveal>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-mono font-bold uppercase tracking-widest text-primary">DWG_GLASS</span>
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground text-center">
            SYSTEM VERSION 2.0.26<br/>ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 font-mono text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">>> TELEGRAM</a>
            <a href="#" className="hover:text-primary transition-colors">>> E-MAIL</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
