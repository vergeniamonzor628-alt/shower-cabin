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
      
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border/40">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-foreground text-background font-serif font-bold text-lg">D</div>
            <span className="text-xl font-serif font-semibold tracking-wider uppercase text-foreground">Dwgglass</span>
          </div>
          <div className="hidden md:flex items-center gap-12 text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.2em]">
            <a href="#services" className="hover:text-primary transition-colors">Сервисы</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">Процесс</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Стоимость</a>
          </div>
          <button onClick={scrollToConfigurator} className="rounded-none bg-foreground px-8 py-3 text-[11px] font-bold text-background uppercase tracking-[0.15em] transition-all hover:bg-primary">
            Проектировать
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden border-b border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className={`inline-flex items-center gap-2 border-b border-foreground/20 pb-2 mb-10 text-[10px] uppercase tracking-[0.3em] font-semibold text-muted-foreground transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Архитектурное стекло
            </div>
            
            <h1 className={`text-5xl sm:text-6xl xl:text-7xl font-serif font-medium tracking-tight mb-10 leading-[1.1] transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Эстетика<br />
              <span className="italic text-primary font-light">воздуха</span> и света.
            </h1>
            
            <p className={`max-w-md text-base text-muted-foreground mb-12 font-light leading-relaxed transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Создаем точные инженерные чертежи по вашим размерам. Закажите стекло напрямую на заводе и получите интерьер без визуального шума.
            </p>
            
            <div className={`transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button onClick={scrollToConfigurator} className="w-full sm:w-auto rounded-none bg-primary px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-foreground flex items-center justify-center gap-4 group">
                Начать проект 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className={`order-1 lg:order-2 lg:col-span-7 relative h-[500px] lg:h-[750px] w-full transition-all duration-1000 delay-700 ${mounted ? 'opacity-100' : 'opacity-0 blur-sm scale-[1.02]'}`}>
            <Image 
              src="/hero_bg_fresh_1780443219250.png" 
              alt="Luxury Minimalist Bathroom" 
              fill 
              className="object-cover"
              priority
            />
            {/* Декоративная линия */}
            <div className="absolute top-0 left-8 w-[1px] h-full bg-white/20"></div>
          </div>

        </div>
      </section>

      {/* Services (Grid approach) */}
      <section id="services" className="py-32 bg-white relative border-b border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          
          <Reveal>
            <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-border/40 pb-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight">Безупречная<br/>точность</h2>
              <p className="text-muted-foreground max-w-sm font-light text-base leading-relaxed">
                Прозрачность процесса и математическая выверенность каждой детали. От идеи до ЧПУ станка.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border/40">
            {[
              { icon: <Layers strokeWidth={1.5} size={32}/>, title: "Идеальные зазоры", desc: "Рассчитываем допуски для силиконовых уплотнителей и петель, чтобы вода оставалась внутри." },
              { icon: <Settings strokeWidth={1.5} size={32}/>, title: "Любая фурнитура", desc: "Адаптируем чертеж под любую выбранную вами фурнитуру с маркетплейсов или из бутиков." },
              { icon: <FileCheck2 strokeWidth={1.5} size={32}/>, title: "Готовые файлы", desc: "Выдаем понятный PDF для вас и профессиональный формат DWG для стекольного завода." }
            ].map((srv, i) => (
              <Reveal key={i} delay={i * 150} className="border-r border-b border-border/40 p-12 transition-colors hover:bg-background">
                <div className="mb-12 text-primary">
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
      <section id="how-it-works" className="py-32 bg-background border-b border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight mb-20">Этапы работы</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-border/40 bg-white">
            {[
              { num: "01", title: "Форма", desc: "Укажите тип душевой ниши или нестандартную архитектуру." },
              { num: "02", title: "Замеры", desc: "Измерьте ширину и высоту проема (инструкция прилагается)." },
              { num: "03", title: "Детали", desc: "Укажите ссылки на выбранные петли и ручки." },
              { num: "04", title: "Проект", desc: "Получите профессиональный DWG файл для завода." }
            ].map((step, i) => (
              <Reveal key={i} delay={i * 100} className="border-r border-b border-border/40 p-10 lg:p-12">
                <div className="text-5xl font-serif text-primary/20 font-light italic mb-8">{step.num}</div>
                <h3 className="mb-4 text-xl font-serif font-medium text-foreground">{step.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (Accordion) */}
      <section id="faq" className="py-32 bg-white border-b border-border/40">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight mb-16 text-center">Частые вопросы</h2>
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
                      <div className="text-muted-foreground relative w-6 h-6 flex items-center justify-center transition-transform duration-500">
                        {isOpen ? <Minus size={20} className="text-primary"/> : <Plus size={20} className="group-hover:text-primary"/>}
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
      <section id="configurator" className="py-32 bg-background relative">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-12 relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 border-b border-primary/30 pb-2 mb-8 text-[10px] uppercase tracking-[0.3em] font-semibold text-primary">
                Опросный лист
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight mb-6">Проектирование</h2>
              <p className="text-muted-foreground font-light">Заполните спецификацию для инженерного отдела.</p>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <Configurator />
          </Reveal>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="text-xl font-serif font-semibold text-foreground uppercase tracking-widest">Dwgglass</span>
          </div>
          <div className="text-muted-foreground text-[11px] font-light uppercase tracking-widest">
            © 2026. Архитектурное проектирование.
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
