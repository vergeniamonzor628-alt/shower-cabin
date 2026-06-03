import Image from "next/image";
import Configurator from "@/components/Configurator";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      
      {/* Header */}
      <header className="absolute top-0 w-full z-50 border-b border-white/10 bg-background/30 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-lg">
              A
            </div>
            <span className="font-serif font-semibold text-xl text-white tracking-wide">AquaDraft</span>
          </div>
          
          <div className="hidden md:flex items-center gap-12 text-[11px] font-semibold text-white/70 uppercase tracking-[0.2em]">
            <a href="#how-it-works" className="hover:text-white transition-colors">Метод</a>
            <a href="#configurator" className="hover:text-white transition-colors">Конфигуратор</a>
          </div>

          <a href="#configurator" className="bg-white text-background px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/90 transition-all">
            Начать проект
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-20 pb-20 overflow-hidden border-b border-border/40">
        
        {/* Animated Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-background">
          <div className="absolute inset-0 w-full h-full opacity-80">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-[1.05]"
            >
              <source src="/hero_video.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Glassmorphism Overlays */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-background/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
        </div>

        <div className="mx-auto max-w-[1000px] px-6 lg:px-12 relative z-10 text-center opacity-0 animate-fade-in-up">
          
          <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
            Проектирование по стандартам ГОСТ
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-[5rem] font-serif text-white leading-[1.1] mb-8 tracking-tight">
            Индивидуальные душевые <br className="hidden md:block"/>
            <span className="text-primary italic font-light">по инженерным стандартам.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Никаких переплат салонам сантехники. Вы снимаете размеры — мы делаем профессиональный CAD-чертеж, с которым любой стекольный завод изготовит вашу кабину с точностью до миллиметра.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in-up-delay-1">
            <a href="#configurator" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium text-sm transition-all flex items-center gap-2 shadow-[0_0_40px_rgba(99,102,241,0.3)]">
              Создать чертеж моей кабины
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            
            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm text-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
              </div>
              <p className="text-xs text-white/70 font-medium leading-tight">Готовый PDF-файл за 24 часа.<br/>Подходит для РФ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Pain (Problem) */}
      <section className="py-32 bg-background/80 relative z-10 border-t border-border/40 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in-up">
            <div className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Рынок против вас</div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-[1.2]">
              Зачем переплачивать 300% <span className="italic text-white/50">салонам сантехники?</span>
            </h2>
            
            <p className="text-white/60 leading-relaxed text-lg font-light mb-12">
              Салоны не производят стекло — они просто перепродают его, закладывая маржу за бренд, логистику и аренду шоурума. Мы предлагаем другой путь — прямой доступ к промышленному стекольному производству.
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <li className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-white/80 font-medium">Никаких наценок за "премиум бренд"</span>
              </li>
              <li className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-white/80 font-medium">Индивидуальный размер без доплат</span>
              </li>
              <li className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-white/80 font-medium">Инженерный расчет (допуски 1мм)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Method (How it works) */}
      <section id="how-it-works" className="py-32 bg-background relative border-t border-border/40">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <div className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Процесс работы</div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Как мы ломаем систему</h2>
            <p className="text-white/60 text-lg font-light">
              Мы превращаем сложный процесс заказа индивидуальной кабины в три простых и абсолютно прозрачных шага.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="group bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-colors">
              <div className="text-white/20 font-serif text-7xl mb-8 group-hover:text-primary/40 transition-colors">01</div>
              <h3 className="text-xl font-semibold text-white mb-4">Вы снимаете размеры</h3>
              <p className="text-white/50 leading-relaxed font-light">
                Используйте нашу простую видеоинструкцию. Вам понадобится только рулетка и 10 минут времени. Никаких специальных навыков не требуется.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="group bg-primary/10 border border-primary/20 p-10 rounded-[2rem] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-primary/40 font-serif text-7xl mb-8 group-hover:text-primary transition-colors">02</div>
                <h3 className="text-xl font-semibold text-white mb-4">Мы делаем проект</h3>
                <p className="text-white/70 leading-relaxed font-light">
                  Наши инженеры создают точный CAD-чертеж с допусками, вырезами под петли и спецификацией фурнитуры. Готовый PDF-файл за 24 часа.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-colors">
              <div className="text-white/20 font-serif text-7xl mb-8 group-hover:text-primary/40 transition-colors">03</div>
              <h3 className="text-xl font-semibold text-white mb-4">Завод производит</h3>
              <p className="text-white/50 leading-relaxed font-light">
                Вы отправляете чертеж на ближайший стекольный завод. Они производят стекло в точности по чертежу. Никаких переплат салонам.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Blueprint Gallery */}
      <section className="py-24 bg-background relative border-t border-border/40 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto opacity-0 animate-fade-in-up">
            <div className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Наши проекты</div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Точность в каждой линии</h2>
            <p className="text-white/60 text-lg font-light">
              Мы проектируем конструкции любой сложности: от простых душевых перегородок до нестандартных кабин в мансарды с вырезами под бортики и трубы.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 animate-fade-in-up-delay-1">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image src="/blueprint_on_table.png" alt="Чертеж на столе" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-medium">Инженерный анализ</span>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image src="/hero_blueprint_shower_1780488146668.png" alt="CAD чертеж кабины" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-medium">CAD проектирование</span>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image src="/split_hero_neutral_1780475992592.png" alt="Сравнение чертежа и фото" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-medium">Идеальная посадка</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configurator Section */}
      <section id="configurator" className="py-24 bg-[#17181c] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight">Спроектируйте свою кабину</h2>
            <p className="text-white/60 text-lg font-light">
              Выберите базовую форму, чтобы запустить процесс проектирования. 
              Каждая кабина будет адаптирована инженерами под ваши точные размеры.
            </p>
          </div>
          
          <Configurator />
        </div>
      </section>

      {/* Trust & Footer */}
      <footer className="bg-background pt-24 pb-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border-b border-white/10 pb-24">
            <div className="flex flex-col items-center text-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <h4 className="text-white font-semibold mb-2">Чертеж за 24 часа</h4>
              <p className="text-white/50 text-sm font-light">Вы не теряете время на ожидание.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <h4 className="text-white font-semibold mb-2">Точность посадки</h4>
              <p className="text-white/50 text-sm font-light">Гарантия соответствия всем ГОСТам.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-6"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              <h4 className="text-white font-semibold mb-2">Поддержка производства</h4>
              <p className="text-white/50 text-sm font-light">Бесплатная консультация вашего завода.</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-xs">A</div>
              <span className="font-serif font-semibold text-white">AquaDraft Bureau</span>
            </div>
            <p className="text-white/40 text-sm">© 2026 Все права защищены.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
