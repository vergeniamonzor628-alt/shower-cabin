import Image from "next/image";
import Configurator from "@/components/Configurator";
import { BeamsBackground } from "@/components/ui/beams-background";
import { SmoothVideoLoop } from "@/components/ui/smooth-video-loop";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 relative">
      
      {/* Global Animated Beams */}
      <div className="fixed inset-0 z-0 pointer-events-none mix-blend-screen opacity-100">
        <BeamsBackground className="h-full w-full" intensity="strong" />
      </div>
      {/* Header */}
      <header className="absolute top-0 w-full z-50 border-b border-white/10 bg-background/30 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-lg">
              A
            </div>
            <div>
              <span className="font-serif font-semibold text-xl text-white tracking-wide">AquaDraft</span>
              <span className="hidden lg:inline text-[10px] text-white/40 ml-3 uppercase tracking-[0.15em]">Инженерные чертежи для душевых</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-12 text-[11px] font-semibold text-white/70 uppercase tracking-[0.2em]">
            <a href="#how-it-works" className="hover:text-white transition-colors">Процесс</a>
            <a href="#configurator" className="hover:text-white transition-colors">Конфигуратор</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <a href="#configurator" className="bg-white text-background px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/90 transition-all">
            Рассчитать проект
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-20 pb-20 overflow-hidden border-b border-border/40">
        
        {/* Animated Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-background">
          <SmoothVideoLoop 
            src="/hero_video.mp4" 
            className="absolute inset-0 w-full h-full opacity-80 scale-[1.05]" 
            fadeDurationMs={3000} 
          />
          {/* Glassmorphism Overlays */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-background/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
        </div>

        <div className="mx-auto max-w-[1000px] px-6 lg:px-12 relative z-10 text-center opacity-0 animate-fade-in-up">

          <h1 className="text-5xl sm:text-6xl md:text-[4.5rem] font-serif text-white leading-[1.1] mb-8 tracking-tight">
            Душевая за 80 000? <br className="hidden md:block"/>
            <span className="text-primary italic font-light">Соберите такую же за 25.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-12 font-light leading-relaxed">
            Мы делаем чертеж — вы заказываете стекло напрямую на заводе. Без салонов, без наценок.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in-up-delay-1">
            <a href="#configurator" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium text-sm transition-all flex items-center gap-2 shadow-[0_0_40px_rgba(99,102,241,0.3)]">
              Создать чертеж
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            
            <p className="text-xs text-white/50 font-light">1 500 ₽ · готово за 24 часа</p>
          </div>
        </div>
      </section>

      {/* Pain */}
      <section className="py-32 bg-black/60 backdrop-blur-[2px] relative z-10 border-border/40 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-[1.2]">
              Заводу нужен чертеж.
            </h2>
            
            <p className="text-white/60 leading-relaxed text-lg font-light mb-12 max-w-2xl mx-auto">
              Не эскиз на салфетке. Не &quot;примерно метр на два&quot;. Точные размеры, вырезы под петли, зазоры 2-3 мм. Иначе стекло не влезет. А каленое <strong className="text-white">не подрезать</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-red-500/5 border border-red-500/15 rounded-2xl p-6">
                <div className="text-red-400/80 text-xs font-bold uppercase tracking-wider mb-2">Без чертежа</div>
                <p className="text-white/50 font-light text-sm">Отказ или брак. Переделка за ваш счет.</p>
              </div>
              <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6">
                <div className="text-primary/80 text-xs font-bold uppercase tracking-wider mb-2">С чертежом</div>
                <p className="text-white/70 font-light text-sm">Завод берет файл в работу. Гарантия.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Method (How it works) */}
      <section id="how-it-works" className="py-32 bg-black/60 backdrop-blur-[2px] relative border-border/40 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Как это работает</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Step 1 - Bento (col-span-8) */}
            <div className="md:col-span-8 group bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors flex flex-col md:flex-row relative">
              <div className="p-10 md:w-1/2 z-10 flex flex-col justify-center">
                <div className="text-white/20 font-serif text-7xl mb-6 group-hover:text-primary/40 transition-colors">01</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Замерьте</h3>
                <p className="text-white/50 leading-relaxed font-light">
                  Рулетка и 10 минут. Есть видео-инструкция.
                </p>
              </div>
              <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden border-l border-white/5">
                <Image src="/blueprint_on_table.png" alt="Чертежи" fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-gradient-to-t md:from-black/20" />
              </div>
            </div>
            
            {/* Step 2 - Bento (col-span-4) */}
            <div className="md:col-span-4 group bg-primary/10 border border-primary/20 rounded-[2rem] overflow-hidden relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-10 z-10 flex flex-col flex-grow">
                <div className="text-primary/40 font-serif text-7xl mb-6 group-hover:text-primary transition-colors">02</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Мы чертим</h3>
                <p className="text-white/70 leading-relaxed font-light mb-6">
                  CAD-чертеж с допусками. PDF + DWG.
                </p>
              </div>
              <div className="relative h-48 w-full overflow-hidden border-t border-primary/20">
                <Image src="/hero_blueprint_shower_1780488146668.png" alt="CAD чертеж" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90" />
              </div>
            </div>

            {/* Step 3 - Bento (col-span-12) */}
            <div className="md:col-span-12 group bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors relative flex flex-col md:flex-row-reverse">
              <div className="p-10 md:w-1/2 z-10 flex flex-col justify-center lg:pl-16">
                <div className="text-white/20 font-serif text-7xl mb-6 group-hover:text-primary/40 transition-colors">03</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Завод режет</h3>
                <p className="text-white/50 leading-relaxed font-light">
                  Отправляете PDF на ближайший завод. Стекло встает идеально.
                </p>
              </div>
              <div className="relative md:w-1/2 h-64 md:h-96 overflow-hidden border-r border-white/5">
                <Image src="/split_hero_neutral_1780475992592.png" alt="Готовая кабина" fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Configurator Section */}
      <section id="configurator" className="py-24 bg-black/80 backdrop-blur-[2px] border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight">Начать</h2>
          </div>
          
          <Configurator />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-black/60 backdrop-blur-[2px] relative z-10 border-t border-border/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Вопросы</h2>
          </div>
          
          <div className="grid gap-6">
            <details className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer marker:content-['']">
              <summary className="flex items-center justify-between text-xl font-semibold text-white outline-none">
                А что если завод сделает стекло, а оно не влезет?
                <svg className="w-5 h-5 text-primary transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="pt-6 text-white/60 leading-relaxed font-light">
                Если ошибка в нашем чертеже (неверно рассчитан зазор под петлю) — мы бесплатно переделываем чертеж и компенсируем затраты. Если завод нарушил размеры чертежа — это брак производства. Если вы неверно сняли размеры помещения — ответственность на вас. Обязательно посмотрите нашу видео-инструкцию по замерам!
              </div>
            </details>

            <details className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer marker:content-['']">
              <summary className="flex items-center justify-between text-xl font-semibold text-white outline-none">
                Я еще не купил фурнитуру, можно заказать чертеж?
                <svg className="w-5 h-5 text-primary transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="pt-6 text-white/60 leading-relaxed font-light">
                Да, но производство стекла начнется только после того, как вы определитесь с петлями. Разные петли требуют разных вырезов в стекле. Вы можете прислать ссылки на фурнитуру позже напрямую инженеру.
              </div>
            </details>

            <details className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer marker:content-['']">
              <summary className="flex items-center justify-between text-xl font-semibold text-white outline-none">
                Зачем мне ваш чертеж, если в магазине душевая стоит 30 000 руб?
                <svg className="w-5 h-5 text-primary transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="pt-6 text-white/60 leading-relaxed font-light">
                В магазине за эти деньги вы получите тонкое стекло (4-6 мм), пластиковые заедающие ролики и стандартный размер (из-за которого придется лить 5 см герметика в щели). За те же деньги, заказав стекло 8 мм на заводе по нашему чертежу, вы соберете премиальную кабину, которая в салоне стоила бы от 80 000 руб.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background pt-24 pb-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border-b border-white/10 pb-24">
            <div className="flex flex-col items-center text-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <h4 className="text-white font-semibold mb-2">Чертеж за 24 часа</h4>
              <p className="text-white/50 text-sm font-light">Готовый файл в формате PDF + DWG.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <h4 className="text-white font-semibold mb-2">Гарантия точности</h4>
              <p className="text-white/50 text-sm font-light">Допуски по ГОСТам. Компенсация при ошибке.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-6"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              <h4 className="text-white font-semibold mb-2">Поддержка 24/7</h4>
              <p className="text-white/50 text-sm font-light">Инженерная консультация в Telegram.</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-xs">A</div>
              <span className="font-serif font-semibold text-white">AquaDraft Bureau</span>
            </div>
            <div className="flex items-center gap-6 text-white/30 text-sm">
              <a href="#" className="hover:text-white/60 transition-colors">Оферта</a>
              <a href="#" className="hover:text-white/60 transition-colors">Политика конфиденциальности</a>
              <a href="https://t.me/aquadraft" target="_blank" rel="noreferrer" className="hover:text-white/60 transition-colors">Telegram</a>
            </div>
            <p className="text-white/40 text-sm">© 2026. Сделано инженерами для людей.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
