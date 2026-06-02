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
    <div className="min-h-screen bg-background text-foreground font-sans">
      
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold shadow-[0_0_15px_var(--primary)]">D</div>
            <span className="text-xl font-bold tracking-tight text-foreground">Dwgglass</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Сервисы</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">Как это работает</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Цены</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
          <button onClick={scrollToConfigurator} className="rounded-full bg-card px-5 py-2 text-sm font-medium text-card-foreground backdrop-blur-md transition-all hover:bg-muted hover:scale-105 border border-border">
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
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-10">
          <div className={`inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Чертежи стекла онлайн (PDF + DWG)
          </div>
          
          <h1 className={`mx-auto max-w-5xl text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Сэкономьте до 50 000 ₽ <br className="hidden sm:block"/>
            <span className="text-primary">на душевой кабине</span>
          </h1>
          
          <p className={`mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground mb-12 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Мы создаем точные CAD-чертежи по вашим размерам. С нашим файлом любой стекольный завод изготовит кабину вашей мечты без магазинных наценок.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button onClick={scrollToConfigurator} className="w-full sm:w-auto rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_0_20px_var(--primary)] transition-all hover:scale-105 flex items-center justify-center gap-2 group">
              Спроектировать кабину 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#services" className="w-full sm:w-auto rounded-full bg-card border border-border px-8 py-4 text-base font-medium text-card-foreground backdrop-blur-md transition-all hover:bg-muted flex items-center justify-center">
              Узнать больше
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 border-t border-border relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Наши сервисы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы помогаем спроектировать стеклянные душевые по вашим размерам: точные вырезы, зазоры под крепежи, экспорт готовых спецификаций.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Layers size={24}/>, title: "Точная геометрия", desc: "Рассчитываем идеальные зазоры для силиконовых уплотнителей и петель." },
              { icon: <Settings size={24}/>, title: "Подбор фурнитуры", desc: "Адаптируем чертеж под любую выбранную вами фурнитуру с маркетплейсов." },
              { icon: <FileCheck2 size={24}/>, title: "Готовые файлы", desc: "Выдаем PDF для вас и DWG для станков с ЧПУ на заводе." }
            ].map((srv, i) => (
              <div key={i} className="group rounded-2xl border border-border bg-card p-8 backdrop-blur-sm transition-all hover:border-primary">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {srv.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">{srv.title}</h3>
                <p className="text-muted-foreground">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 border-t border-border bg-card/30 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Завод не примет заказ<br/>«на пальцах»</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Попытка заказать каленое стекло без точных координат сверления под фурнитуру — это гарантированная потеря денег. Ошибка на миллиметр приведет к тому, что стекло не встанет в нишу, а подрезать его невозможно.
              </p>
              
              <div className="rounded-2xl border border-destructive/20 bg-destructive/10 p-6 backdrop-blur-sm flex gap-4 items-start">
                <AlertCircle className="text-destructive shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-foreground font-semibold mb-2">Отказ в приемке</h4>
                  <p className="text-muted-foreground text-sm">
                    "Для запуска в производство необходимо предоставить точный чертеж с допусками. Эскизы от руки без указания зазоров в работу не принимаются."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* After (Good) */}
              <div className="rounded-2xl border border-border bg-card p-2 shadow-2xl relative z-10 transform lg:-translate-x-8">
                <div className="absolute top-4 left-4 bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Check size={14}/> Наш CAD-Чертеж
                </div>
                <div className="aspect-[4/3] rounded-xl border border-border bg-background flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="w-full h-full border border-primary/30 rounded-lg flex flex-col p-4 relative">
                    <div className="flex justify-between border-b border-border pb-2 mb-4 text-xs font-mono text-muted-foreground">
                      <span>TOLERANCE: ±0.5</span>
                      <span>FORMAT: DWG/PDF</span>
                    </div>
                    <div className="flex-1 relative flex items-center justify-center">
                      <div className="w-32 h-48 border-2 border-primary/50 relative rounded-sm shadow-[0_0_15px_var(--primary)]">
                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-xs font-mono text-muted-foreground">2000.0</div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground">900.0</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 border-t border-border">
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
              <div key={i} className="rounded-2xl border border-border bg-card p-8 text-center transition-all hover:bg-muted">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
                  {step.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section id="pricing" className="py-24 border-t border-border bg-card/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Цены на чертежи</h2>
            <p className="text-muted-foreground">Единый тариф для любых стандартных кабин.</p>
          </div>
          
          <div className="rounded-3xl border border-primary/30 bg-card p-8 sm:p-12 shadow-[0_0_40px_var(--primary)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6">
              <span className="inline-flex rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                Популярный выбор
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-2">Инженерный проект</h3>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-extrabold text-foreground">1 500 ₽</span>
              <span className="text-muted-foreground">/ чертеж</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                "Точный расчет зазоров под вашу фурнитуру",
                "Вырезы под ручки и петли",
                "Экспорт в форматы PDF и DWG",
                "Прямая поддержка от инженера",
                "Готовность за 24 часа"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <Check size={18} className="text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <button onClick={scrollToConfigurator} className="w-full rounded-xl bg-primary text-primary-foreground px-8 py-4 text-base font-bold transition-all hover:opacity-90 hover:scale-[1.02]">
              Заказать сейчас
            </button>
          </div>
        </div>
      </section>

      {/* Configurator Section */}
      <section id="configurator" className="py-24 border-t border-border relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Сконфигурируйте заказ</h2>
            <p className="text-muted-foreground text-lg">Заполните форму, и мы подготовим идеальный файл для вашего стекла.</p>
          </div>
          
          <Configurator />
          
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 border-t border-border bg-card/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 text-center">Частые вопросы</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden transition-colors hover:bg-muted/50">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-6 flex justify-between items-center text-left"
                >
                  <span className="font-semibold text-foreground">{faq.q}</span>
                  <ChevronDown className={`text-muted-foreground transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} size={20}/>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">D</div>
            <span className="text-lg font-bold text-foreground">Dwgglass</span>
          </div>
          <div className="text-muted-foreground text-sm">
            © 2026. Сделано инженерами.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-foreground transition-colors">Поддержка</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
