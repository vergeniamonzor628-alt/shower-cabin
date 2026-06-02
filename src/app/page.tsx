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
    <div className="min-h-screen bg-background text-foreground font-sans">
      
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-serif font-bold text-xl">D</div>
            <span className="text-xl font-serif font-semibold tracking-wide text-foreground">Dwgglass</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-muted-foreground uppercase tracking-widest">
            <a href="#services" className="hover:text-primary transition-colors">Сервисы</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">Процесс</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Цены</a>
          </div>
          <button onClick={scrollToConfigurator} className="rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-all hover:bg-primary">
            Заказать ТЗ
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <div className={`inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-xs uppercase tracking-widest font-semibold text-primary mb-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              CAD-Чертежи для стекла
            </div>
            
            <h1 className={`text-5xl sm:text-7xl font-serif font-medium tracking-tight mb-8 leading-[1.1] transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Эстетика <br />
              <span className="italic text-primary">чистого стекла</span>
            </h1>
            
            <p className={`max-w-xl text-lg text-muted-foreground mb-12 font-light leading-relaxed transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Мы создаем точные инженерные чертежи по вашим размерам. Закажите стекло напрямую на заводе и получите интерьер премиум-класса без наценок салона.
            </p>
            
            <div className={`flex flex-col sm:flex-row items-center gap-6 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button onClick={scrollToConfigurator} className="w-full sm:w-auto rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:opacity-90 flex items-center justify-center gap-3 group">
                Начать проект 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className={`order-1 lg:order-2 relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Image 
              src="/hero_bg_fresh_1780443219250.png" 
              alt="Luxury Minimalist Bathroom" 
              fill 
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight mb-6">Безупречная точность</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg">
              Прозрачность процесса и математическая выверенность каждой детали. Мы переводим ваши идеи в язык, понятный станкам с ЧПУ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Layers size={32}/>, title: "Идеальные зазоры", desc: "Рассчитываем допуски для силиконовых уплотнителей и петель, чтобы вода оставалась внутри." },
              { icon: <Settings size={32}/>, title: "Любая фурнитура", desc: "Адаптируем чертеж под любую выбранную вами фурнитуру с маркетплейсов или из бутиков." },
              { icon: <FileCheck2 size={32}/>, title: "Готовые файлы", desc: "Выдаем понятный PDF для вас и профессиональный формат DWG для стекольного завода." }
            ].map((srv, i) => (
              <div key={i} className="group transition-all">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-background text-primary">
                  {srv.icon}
                </div>
                <h3 className="mb-4 text-2xl font-serif font-medium">{srv.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="relative h-[600px] rounded-2xl overflow-hidden hidden lg:block">
               <Image 
                src="/corner_shower_fresh_1780443230529.png" 
                alt="Minimalist Corner Shower" 
                fill 
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight mb-8">Почему эскиза<br/>недостаточно?</h2>
              <p className="text-lg text-muted-foreground mb-10 font-light leading-relaxed">
                Каленое стекло невозможно подрезать или просверлить после изготовления. Любая ошибка в замерах "от руки" приведет к покупке нового полотна. Мы устраняем этот риск.
              </p>
              
              <div className="rounded-2xl border border-destructive/20 bg-white p-8 flex gap-6 items-start shadow-sm">
                <AlertCircle className="text-destructive shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="text-foreground font-serif font-medium text-xl mb-3">Заводской стандарт</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Фабрики принимают в работу только векторные чертежи (DWG) с точными координатами вырезов. Мы предоставляем именно такой документ.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight mb-6">Как мы работаем</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Форма", desc: "Укажите тип душевой ниши или нестандартную архитектуру." },
              { num: "02", title: "Замеры", desc: "Измерьте ширину и высоту проема (инструкция прилагается)." },
              { num: "03", title: "Детали", desc: "Укажите ссылки на выбранные петли и ручки." },
              { num: "04", title: "Проект", desc: "Получите профессиональный DWG файл для завода." }
            ].map((step, i) => (
              <div key={i} className="pt-8 border-t border-border/60">
                <div className="text-4xl font-serif text-primary/30 font-bold mb-6">{step.num}</div>
                <h3 className="mb-3 text-xl font-serif font-medium text-foreground">{step.title}</h3>
                <p className="text-muted-foreground font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section id="pricing" className="py-32 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight mb-6">Инвестиция в качество</h2>
          <p className="text-muted-foreground font-light text-lg mb-16 max-w-2xl mx-auto">
            Стоимость разработки технического задания, которое сэкономит вам десятки тысяч рублей.
          </p>
          
          <div className="rounded-3xl bg-white p-12 sm:p-16 shadow-xl relative overflow-hidden border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-3xl font-serif font-medium text-foreground mb-4">Инженерный проект</h3>
            <div className="flex items-center justify-center gap-3 mb-10">
              <span className="text-6xl font-light text-foreground">1 500 ₽</span>
            </div>
            
            <ul className="space-y-5 mb-12 text-left max-w-md mx-auto">
              {[
                "Расчет зазоров под фурнитуру",
                "Вырезы под ручки и петли",
                "Экспорт в форматы PDF и DWG",
                "Прямая связь с инженером"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-4 text-muted-foreground font-light">
                  <Check size={20} className="text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <button onClick={scrollToConfigurator} className="w-full rounded-full bg-foreground text-background px-8 py-5 text-sm uppercase tracking-widest font-bold transition-all hover:bg-primary">
              Оформить заказ
            </button>
          </div>
        </div>
      </section>

      {/* Configurator Section */}
      <section id="configurator" className="py-32 bg-white relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight mb-6">Начать проектирование</h2>
            <p className="text-muted-foreground text-lg font-light">Заполните форму ниже, чтобы передать данные в инженерный отдел.</p>
          </div>
          
          <Configurator />
          
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-serif font-bold text-xl">D</div>
            <span className="text-xl font-serif font-semibold text-foreground">Dwgglass</span>
          </div>
          <div className="text-muted-foreground text-sm font-light">
            © 2026. Архитектурное проектирование стекла.
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground font-medium uppercase tracking-wider">
            <a href="#" className="hover:text-primary transition-colors">Политика</a>
            <a href="#" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
