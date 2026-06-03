"use client";

import Image from "next/image";
import Configurator from "@/components/Configurator";
import { 
  ArrowRight,
  Check, 
  Layers,
  Settings,
  FileCheck2,
  AlertCircle,
  Plus,
  Minus
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Утилита для анимации плавного появления (Fade-up) при скролле
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
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`} 
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
      a: "Если ошибка в нашем чертеже — мы бесплатно переделываем чертеж и компенсируем вам затраты. Если вы неверно сняли размеры помещения — ответственность на вас. Пожалуйста, следуйте нашей инструкции по замерам."
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
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      
      {/* Header (Glassmorphism) */}
      <header className="fixed top-0 z-50 w-full bg-white/60 backdrop-blur-xl border-b border-border/40 shadow-sm">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-serif font-bold text-lg shadow-md shadow-primary/20">D</div>
            <span className="text-xl font-serif font-semibold tracking-wider text-foreground">Dwgglass</span>
          </div>
          <div className="hidden md:flex items-center gap-12 text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.2em]">
            <a href="#services" className="hover:text-primary transition-colors">Инженерия</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">Процесс</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </div>
          <button onClick={scrollToConfigurator} className="rounded-full bg-foreground px-8 py-3 text-[11px] font-bold text-background uppercase tracking-[0.15em] shadow-lg shadow-foreground/10 transition-all hover:bg-primary hover:shadow-primary/20 hover:-translate-y-0.5">
            Проектировать
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden border-b border-border/40">
        {/* Декоративное мягкое свечение на фоне */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="order-2 lg:order-1 lg:col-span-5 relative z-20">
            <div className={`inline-flex items-center gap-2 border-b border-primary/20 pb-2 mb-10 text-[10px] uppercase tracking-[0.3em] font-semibold text-primary transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Инженерная прозрачность
            </div>
            
            <h1 className={`text-5xl sm:text-6xl xl:text-7xl font-serif font-medium tracking-tight mb-10 leading-[1.1] transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Идеальный<br />
              <span className="italic text-primary font-light">расчет</span> света.
            </h1>
            
            <p className={`max-w-md text-base text-muted-foreground mb-12 font-light leading-relaxed transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Профессиональные CAD-чертежи для производства премиальных стеклянных душевых. Точность до миллиметра, абсолютный минимализм.
            </p>
            
            <div className={`transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button onClick={scrollToConfigurator} className="w-full sm:w-auto rounded-full bg-primary px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-primary/20 transition-all hover:bg-foreground hover:shadow-foreground/20 hover:-translate-y-1 flex items-center justify-center gap-4 group">
                Начать проект 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className={`order-1 lg:order-2 lg:col-span-7 relative h-[500px] lg:h-[750px] w-full transition-all duration-1000 delay-700 ${mounted ? 'opacity-100' : 'opacity-0 blur-sm scale-[1.02]'}`}>
            {/* The Blueprint/Reality Hybrid Image */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
              <Image 
                src="/hero_tech_bg_1780444334766.png" 
                alt="Luxury Minimalist Bathroom vs CAD Blueprint" 
                fill 
                className="object-cover"
                priority
              />
              {/* Glassmorphism overlay corner detail */}
              <div className="absolute bottom-6 right-6 bg-white/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/50 text-[10px] font-mono font-semibold uppercase tracking-widest text-foreground shadow-lg">
                Precision: ±1mm
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services (Grid approach with Glass touches) */}
      <section id="services" className="py-32 bg-white relative border-b border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          
          <Reveal>
            <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-border/40 pb-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight">Математика<br/><span className="text-primary italic font-light">красоты</span></h2>
              <p className="text-muted-foreground max-w-sm font-light text-base leading-relaxed">
                Сложные инженерные вычисления, скрытые за абсолютной визуальной простотой.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border/40">
            {[
              { icon: <Layers strokeWidth={1.5} size={32}/>, title: "Идеальные зазоры", desc: "Рассчитываем допуски для силиконовых уплотнителей и петель, чтобы вода оставалась внутри." },
              { icon: <Settings strokeWidth={1.5} size={32}/>, title: "Любая фурнитура", desc: "Адаптируем чертеж под любую выбранную вами фурнитуру с маркетплейсов или из бутиков." },
              { icon: <FileCheck2 strokeWidth={1.5} size={32}/>, title: "Точный экспорт", desc: "Выдаем понятный PDF для вас и профессиональный формат DWG для заводского станка с ЧПУ." }
            ].map((srv, i) => (
              <Reveal key={i} delay={i * 150} className="border-r border-b border-border/40 p-12 transition-all hover:bg-muted/50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 bg-white relative z-10">
                <div className="mb-12 text-primary bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center">
                  {srv.icon}
                </div>
                <h3 className="mb-4 text-2xl font-serif font-medium">{srv.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{srv.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-32 bg-background relative overflow-hidden">
        {/* Soft circle in background */}
        <div className="absolute -left-40 top-40 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight mb-20">Чистота процесса</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-border/40 bg-white/60 backdrop-blur-sm rounded-[2rem] shadow-xl shadow-primary/5 overflow-hidden">
            {[
              { num: "01", title: "Архитектура", desc: "Укажите тип душевой ниши или нестандартную геометрию пространства." },
              { num: "02", title: "Габариты", desc: "Снимите размеры проема (мы предоставим понятную инструкцию)." },
              { num: "03", title: "Фурнитура", desc: "Выберите любые петли и ручки. Мы учтем их посадочные отверстия." },
              { num: "04", title: "Производство", desc: "Получите DWG файл. Отправьте его на любой стекольный завод." }
            ].map((step, i) => (
              <Reveal key={i} delay={i * 100} className="border-r border-b border-border/40 p-10 lg:p-12">
                <div className="text-5xl font-serif text-primary/30 font-light italic mb-8">{step.num}</div>
                <h3 className="mb-4 text-xl font-serif font-medium text-foreground">{step.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (Accordion) */}
      <section id="faq" className="py-32 bg-white relative border-y border-border/40">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight mb-16 text-center">Прояснение</h2>
          </Reveal>

          <div className="border-t border-border/40">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal key={index} delay={index * 100}>
                  <div className="border-b border-border/40">
                    <button 
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full py-8 flex items-center justify-between text-left group"
                    >
                      <span className="text-xl font-serif font-medium group-hover:text-primary transition-colors">{faq.q}</span>
                      <div className={`text-muted-foreground relative w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-primary border-primary text-white' : 'border-border group-hover:border-primary group-hover:text-primary'}`}>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>
                    
                    <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] pb-8 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="text-muted-foreground font-light leading-relaxed max-w-3xl">
                          {faq.a}
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
      
      {/* Configurator Section */}
      <section id="configurator" className="py-32 bg-background relative overflow-hidden">
        {/* Soft lighting effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="mx-auto max-w-[1000px] px-6 lg:px-12 relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 border-b border-primary/30 pb-2 mb-8 text-[10px] uppercase tracking-[0.3em] font-semibold text-primary">
                Бриф
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight mb-6">Проектирование</h2>
              <p className="text-muted-foreground font-light max-w-xl mx-auto">Отправьте нам исходные данные, и инженер подготовит точный чертеж для идеальной душевой.</p>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <Configurator />
          </Reveal>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-border/40 pt-10">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center font-serif text-xs font-bold">D</div>
            <span className="text-lg font-serif font-semibold text-foreground tracking-widest">Dwgglass</span>
          </div>
          <div className="text-muted-foreground text-[11px] font-light uppercase tracking-widest">
            © 2026. Архитектурное проектирование стекла.
          </div>
          <div className="flex gap-8 text-[11px] text-foreground font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-primary transition-colors">Telegram</a>
            <a href="#" className="hover:text-primary transition-colors">Почта</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
