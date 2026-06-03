"use client";

import Image from "next/image";
import Configurator from "@/components/Configurator";
import { 
  ArrowRight,
  ShieldCheck, 
  Ruler,
  Factory,
  CheckCircle2,
  Plus,
  Minus
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

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
      q: "Зачем мне ваш чертеж, если в магазине кабина стоит 30 000 руб?",
      a: "В магазине за эти деньги вы получите тонкое стекло (4-6 мм), пластиковые заедающие ролики и стандартный размер (из-за которого придется лить 5 см герметика). За те же деньги, заказав толстое стекло 8 мм на заводе по нашему чертежу, вы соберете премиальную кабину, которая в салоне стоила бы от 80 000 руб."
    },
    {
      q: "А что если завод сделает стекло, а оно не влезет?",
      a: "Если ошибка в нашем чертеже (неверно рассчитан зазор под петлю) — мы бесплатно переделываем чертеж и компенсируем вам затраты. Если завод нарушил размеры чертежа — вы защищены договором с заводом. Если вы сами неверно сняли размеры помещения — ответственность на вас. Обязательно посмотрите нашу инструкцию по замерам!"
    },
    {
      q: "Я еще не купил фурнитуру, можно заказать чертеж?",
      a: "Да, но производство на заводе начнется только после того, как вы определитесь с петлями. Разные петли требуют разных вырезов в стекле. Вы можете прислать ссылки на фурнитуру позже напрямую нашему инженеру."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white/60 backdrop-blur-xl border-b border-border/40 shadow-sm">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-serif font-bold text-lg shadow-md shadow-primary/20">A</div>
            <span className="text-xl font-serif font-semibold tracking-wider text-foreground">AquaDraft</span>
          </div>
          <div className="hidden md:flex items-center gap-12 text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.2em]">
            <a href="#problem" className="hover:text-primary transition-colors">Суть</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">Как это работает</a>
            <a href="#faq" className="hover:text-primary transition-colors">Вопросы</a>
          </div>
          <button onClick={scrollToConfigurator} className="rounded-full bg-foreground px-8 py-3 text-[11px] font-bold text-background uppercase tracking-[0.15em] shadow-lg shadow-foreground/10 transition-all hover:bg-primary hover:shadow-primary/20 hover:-translate-y-0.5">
            Рассчитать проект
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden border-b border-border/40">
        {/* Декоративное мягкое свечение на фоне */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="order-2 lg:order-1 lg:col-span-5 relative z-20">
            <div className={`inline-flex items-center gap-2 border-b border-primary/20 pb-2 mb-8 text-[10px] uppercase tracking-[0.2em] font-bold text-primary transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Экономия до 50 000 ₽ на ремонте
            </div>
            
            <h1 className={`text-4xl sm:text-5xl xl:text-6xl font-serif font-medium tracking-tight mb-8 leading-[1.1] transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Премиум душевая напрямую <span className="italic text-primary font-light">с завода.</span>
            </h1>
            
            <p className={`max-w-md text-base text-muted-foreground mb-10 font-light leading-relaxed transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Никаких переплат салонам сантехники. Вы снимаете размеры — мы делаем <strong>профессиональный CAD-чертеж</strong>, с которым любой стекольный завод изготовит вашу идеальную кабину за 1/3 цены.
            </p>
            
            <div className={`transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button onClick={scrollToConfigurator} className="w-full sm:w-auto rounded-full bg-primary px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-primary/20 transition-all hover:bg-foreground hover:-translate-y-1 flex items-center justify-center gap-4 group mb-4">
                Создать чертеж моей кабины
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-muted-foreground font-medium flex items-center gap-2">
                <ShieldCheck size={14} className="text-primary"/> Готовый PDF-файл за 24 часа. Подходит для РФ.
              </p>
            </div>
          </div>

          <div className={`order-1 lg:order-2 lg:col-span-7 relative h-[500px] lg:h-[700px] w-full transition-all duration-1000 delay-700 ${mounted ? 'opacity-100' : 'opacity-0 blur-sm scale-[1.02]'}`}>
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border border-border/40">
              <Image 
                src="/split_hero_cold_1780448227691.png" 
                alt="Luxury Minimalist Bathroom vs CAD Blueprint" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute bottom-6 right-6 bg-white/60 backdrop-blur-md px-5 py-3 rounded-xl border border-white/80 shadow-lg flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">От идеи к чертежу</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Problem / Workspace Section */}
      <section id="problem" className="py-32 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative z-10 order-2 lg:order-1">
            <Reveal>
              <div className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-6">Почему чертеж необходим?</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight mb-8">
                Завод не примет заказ<br/><span className="italic font-light">"на пальцах"</span>
              </h2>
              <p className="text-muted-foreground font-light text-base leading-relaxed mb-10">
                На производстве никто не будет слушать "мне стекло примерно метр на два". Им нужны точные координаты сверления отверстий под петли и учет технологических зазоров (2-3 мм). 
                <br/><br/>
                Ошибетесь на миллиметр при расчете — стекло не влезет в нишу, а каленое стекло <strong>нельзя подрезать</strong>.
              </p>

              <div className="flex flex-col gap-6 border-l-2 border-primary/20 pl-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><Ruler size={16}/></div>
                  <div>
                    <h4 className="font-serif font-medium text-lg mb-1">Абсолютная точность</h4>
                    <p className="text-sm font-light text-muted-foreground">Мы закладываем все допуски под выбранную вами фурнитуру.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><CheckCircle2 size={16}/></div>
                  <div>
                    <h4 className="font-serif font-medium text-lg mb-1">Готово для любого ЧПУ станка</h4>
                    <p className="text-sm font-light text-muted-foreground">Форматы DWG и PDF гарантируют, что вас примет любой завод.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
            <Reveal className="w-full h-full">
              <Image 
                src="/workspace_1_new.png" 
                alt="Architectural workspace" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* How it works (With Workspace Close Up) */}
      <section id="how-it-works" className="py-32 bg-white relative border-t border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight mb-6">Путь к идеальной душевой</h2>
              <p className="text-muted-foreground font-light max-w-xl mx-auto">Всего 4 простых шага отделяют вас от роскошной душевой по цене масс-маркета.</p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
              <Reveal className="w-full h-full">
                <Image 
                  src="/workspace_2_new.png" 
                  alt="Blueprint close-up" 
                  fill 
                  className="object-cover"
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
              {[
                { num: "01", title: "Архитектура", desc: "Угловая, в нишу, П-образная или нестандартная. Выберите тип кабины." },
                { num: "02", title: "Габариты", desc: "Измерьте ширину и высоту вашей ниши обычной рулеткой (мы поможем)." },
                { num: "03", title: "Фурнитура", desc: "Прикрепите ссылки на петли, которые вы купили. Мы рассчитаем под них вырезы." },
                { num: "04", title: "Завод", desc: "Через 24 часа отправьте наш PDF-файл на ближайший стекольный завод." }
              ].map((step, i) => (
                <Reveal key={i} delay={i * 100} className="bg-background rounded-2xl p-8 border border-border/50">
                  <div className="text-4xl font-serif text-primary/20 font-light italic mb-6">{step.num}</div>
                  <h3 className="mb-3 text-lg font-serif font-medium text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{step.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (Accordion) */}
      <section id="faq" className="py-32 bg-background relative border-t border-border/40">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight mb-16 text-center">Частые сомнения</h2>
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
                      <span className="text-xl font-serif font-medium group-hover:text-primary transition-colors pr-8">{faq.q}</span>
                      <div className={`shrink-0 text-muted-foreground relative w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-primary border-primary text-white' : 'border-border group-hover:border-primary group-hover:text-primary'}`}>
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
      <section id="configurator" className="py-32 bg-white relative overflow-hidden border-t border-border/40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="mx-auto max-w-[1000px] px-6 lg:px-12 relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 border-b border-primary/30 pb-2 mb-8 text-[10px] uppercase tracking-[0.3em] font-semibold text-primary">
                Шаг первый
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight mb-6">Какая у вас ванная?</h2>
              <p className="text-muted-foreground font-light max-w-xl mx-auto">Ответьте на несколько вопросов ниже, и мы подготовим чертеж, с которым вы сэкономите до 50 000 рублей.</p>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <Configurator />
          </Reveal>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-border/40 pt-10">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center font-serif text-xs font-bold">A</div>
            <span className="text-lg font-serif font-semibold text-foreground tracking-widest">AquaDraft</span>
          </div>
          <div className="text-muted-foreground text-[11px] font-light uppercase tracking-widest">
            © 2026. Инженерные чертежи. Сделано для людей.
          </div>
          <div className="flex gap-8 text-[11px] text-foreground font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-primary transition-colors">Telegram Поддержка</a>
            <a href="#" className="hover:text-primary transition-colors">Оферта</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
