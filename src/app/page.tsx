import Image from "next/image";
import Configurator from "@/components/Configurator";
import { BeamsBackground } from "@/components/ui/beams-background";
import { SmoothVideoLoop } from "@/components/ui/smooth-video-loop";
import StickyCTA from "@/components/StickyCTA";
import { Check, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 relative">
      
      {/* Global Animated Beams */}
      <div className="fixed inset-0 z-0 pointer-events-none mix-blend-screen opacity-100">
        <BeamsBackground className="h-full w-full" intensity="strong" />
      </div>

      {/* ============================================ */}
      {/* HEADER — Блок 11: FOMO badge                */}
      {/* ============================================ */}
      <header className="absolute top-0 w-full z-50 border-b border-white/10 bg-background/30 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-lg">
              D
            </div>
            <div>
              <span className="font-serif font-semibold text-xl text-white tracking-wide">Dwgglass</span>
              <span className="hidden lg:inline text-[10px] text-white/40 ml-3 uppercase tracking-[0.15em]">Онлайн-чертежи стекла</span>
            </div>
          </div>

          
          <div className="hidden lg:flex items-center gap-12 text-[11px] font-semibold text-white/70 uppercase tracking-[0.2em]">
            <a href="#how-it-works" className="hover:text-white transition-colors">Процесс</a>
            <a href="#examples" className="hover:text-white transition-colors">Примеры</a>
            <a href="#configurator" className="hover:text-white transition-colors">Конфигуратор</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <a href="#configurator" className="bg-white text-background px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/90 transition-all">
            Рассчитать проект
          </a>
        </div>
      </header>

      {/* ============================================ */}
      {/* HERO — Premium Mix                          */}
      {/* ============================================ */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden border-b border-border/20">
        
        {/* Animated Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-background">
          <SmoothVideoLoop 
            src="/hero_video.mp4" 
            className="absolute inset-0 w-full h-full object-cover opacity-[0.35] scale-[1.05]" 
            fadeDurationMs={3000} 
          />
          {/* Glassmorphism Overlays for premium dark mode */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background backdrop-blur-[1px]"></div>
          
          {/* Subtle radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
        </div>

        <div className="mx-auto max-w-4xl px-6 relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
             <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
             <span className="text-xs font-medium text-white/80 uppercase tracking-widest">Инженерное бюро</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/50 leading-[1.1] mb-6 tracking-tight">
            Стеклянные душевые <br className="hidden md:block"/>
            <span className="italic font-light text-white/70">без наценок салона.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Стекло делает завод. Салон просто ставит наценку. <br className="hidden sm:block" />Мы проектируем точный чертеж под ваши размеры — вы заказываете напрямую.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a href="#configurator" className="group relative inline-flex items-center justify-center gap-3 bg-white text-background px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Спроектировать свою
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            
            <div className="flex items-center gap-6 text-sm text-white/50 font-light">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Чертёж 1 500 ₽
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Готов за сутки
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Без предоплаты
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SOCIAL PROOF — Minimal                       */}
      {/* ============================================ */}
      <section className="py-12 bg-black/40 backdrop-blur-md relative z-10 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-center">
            <div>
              <div className="text-3xl font-serif text-white mb-1">Точность 1 мм</div>
              <div className="text-white/40 text-xs font-light uppercase tracking-widest">Допуски CAD</div>
            </div>
            <div>
              <div className="text-3xl font-serif text-white mb-1">~15-25 тыс.</div>
              <div className="text-white/40 text-xs font-light uppercase tracking-widest">Средняя цена на заводе</div>
            </div>
            <div>
              <div className="text-3xl font-serif text-primary mb-1">24 часа</div>
              <div className="text-white/40 text-xs font-light uppercase tracking-widest">Срок подготовки файла</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* HOW IT WORKS                                 */}
      {/* ============================================ */}
      <section id="how-it-works" className="py-24 bg-background relative border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight">Как это устроено</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto">
            
            {/* Step 1 - Bento */}
            <div className="md:col-span-8 group bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden hover:bg-white/[0.04] transition-colors flex flex-col md:flex-row relative">
              <div className="p-10 md:w-1/2 z-10 flex flex-col justify-center">
                <div className="text-white/10 font-serif text-7xl mb-6 group-hover:text-primary/30 transition-colors">01</div>
                <h3 className="text-2xl font-serif text-white mb-4">Вы измеряете</h3>
                <p className="text-white/50 leading-relaxed font-light">
                  Форма, размер, тип стекла. Обычная рулетка и наша пошаговая видео-инструкция.
                </p>
              </div>
              <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden border-l border-white/5">
                <Image src="/blueprint_on_table.png" alt="Замер" fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent md:bg-gradient-to-t" />
              </div>
            </div>
            
            {/* Step 2 - Bento */}
            <div className="md:col-span-4 group bg-primary/5 border border-primary/10 rounded-[2rem] overflow-hidden relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-10 z-10 flex flex-col flex-grow">
                <div className="text-primary/20 font-serif text-7xl mb-6 group-hover:text-primary/50 transition-colors">02</div>
                <h3 className="text-2xl font-serif text-white mb-4">Мы чертим</h3>
                <p className="text-white/60 leading-relaxed font-light mb-6">
                  Инженер готовит проект с допусками для производства за 24 часа.
                </p>
              </div>
            </div>

            {/* Step 3 - Bento */}
            <div className="md:col-span-12 group bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden hover:bg-white/[0.04] transition-colors relative flex flex-col md:flex-row-reverse">
              <div className="p-10 md:w-1/2 z-10 flex flex-col justify-center lg:pl-16">
                <div className="text-white/10 font-serif text-7xl mb-6 group-hover:text-primary/30 transition-colors">03</div>
                <h3 className="text-2xl font-serif text-white mb-4">Завод производит</h3>
                <p className="text-white/50 leading-relaxed font-light">
                  Вы отправляете PDF на ближайший завод — и получаете готовое закаленное стекло. Без переплат салонам.
                </p>
              </div>
              <div className="relative md:w-1/2 h-64 md:h-96 overflow-hidden border-r border-white/5">
                <Image src="/premium_walkin_shower_1780571966263.png" alt="Готовая кабина" fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-l from-background to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* EMOTIONAL TRIGGER — Блок 10: Результат       */}
      {/* ============================================ */}
      {/* EXAMPLES                                     */}
      {/* ============================================ */}
      <section id="examples" className="py-24 bg-background relative z-10 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-tight">Примеры работ</h2>
            <p className="text-white/50 text-lg font-light">Готовые проекты по нашим чертежам.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Example 1 */}
            <div className="group rounded-[2rem] overflow-hidden bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/premium_corner_shower_1780571932250.png" alt="Угловая кабина" fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white font-serif text-xl mb-1">Угловая кабина</div>
                  <p className="text-white/40 text-sm font-light">Стекло 8мм · 900×900</p>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="group rounded-[2rem] overflow-hidden bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/premium_walkin_shower_1780571966263.png" alt="Walk-in" fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white font-serif text-xl mb-1">Свободный вход</div>
                  <p className="text-white/40 text-sm font-light">Стекло 10мм · 1200×2100</p>
                </div>
              </div>
            </div>

            {/* Example 3 */}
            <div className="group rounded-[2rem] overflow-hidden bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/premium_niche_shower_1780571944244.png" alt="Ниша" fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white font-serif text-xl mb-1">Дверь в нишу</div>
                  <p className="text-white/40 text-sm font-light">Стекло 8мм · 800×2000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TRUST SIGNALS                                */}
      {/* ============================================ */}
      <section className="py-16 bg-background relative z-10 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white/80 text-xl">🛡️</span>
                </div>
                <div className="text-white text-lg font-medium mb-2">Гарантия точности</div>
                <div className="text-white/40 text-sm font-light leading-relaxed">Ошибка в чертеже? Переделаем бесплатно и компенсируем убытки.</div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white/80 text-xl">⏳</span>
                </div>
                <div className="text-white text-lg font-medium mb-2">Готово за 24 часа</div>
                <div className="text-white/40 text-sm font-light leading-relaxed">Быстро проектируем, чтобы вы быстрее заказали стекло.</div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white/80 text-xl">👨‍💻</span>
                </div>
                <div className="text-white text-lg font-medium mb-2">Контроль инженера</div>
                <div className="text-white/40 text-sm font-light leading-relaxed">Проверяем замеры на логичность. Если что-то не так — свяжемся.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CONFIGURATOR                                 */}
      {/* ============================================ */}
      <section id="configurator" className="py-32 bg-background border-b border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight">Заказать проект</h2>
          </div>
          
          <Configurator />
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ                                          */}
      {/* ============================================ */}
      <section id="faq" className="py-32 bg-background relative z-10">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-16 text-center tracking-tight">Вопросы и ответы</h2>
          
          <div className="space-y-4">
            <details className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors cursor-pointer marker:content-['']">
              <summary className="flex items-center justify-between text-lg font-medium text-white outline-none">
                Что, если я измерю неправильно?
                <svg className="w-5 h-5 text-white/40 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="pt-4 text-white/50 font-light leading-relaxed">Мы даем видео-инструкцию, ошибиться сложно. Но если цифры не будут биться логически, инженер это заметит и свяжется с вами.</p>
            </details>

            <details className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors cursor-pointer marker:content-['']">
              <summary className="flex items-center justify-between text-lg font-medium text-white outline-none">
                Где мне заказать стекло?
                <svg className="w-5 h-5 text-white/40 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="pt-4 text-white/50 font-light leading-relaxed">В любом стекольном цеху вашего города. Просто отправьте им наш PDF.</p>
            </details>

            <details className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors cursor-pointer marker:content-['']">
              <summary className="flex items-center justify-between text-lg font-medium text-white outline-none">
                А что с фурнитурой?
                <svg className="w-5 h-5 text-white/40 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="pt-4 text-white/50 font-light leading-relaxed">Пришлите ссылки на петли и ручки. Мы добавим правильные вырезы в чертеж.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-xs">D</div>
              <span className="font-serif font-semibold text-white">Dwgglass</span>
            </div>
            <div className="flex items-center gap-6 text-white/30 text-sm">
              <a href="#" className="hover:text-white/60 transition-colors">Оферта</a>
            </div>
            <p className="text-white/30 text-xs">© 2026</p>
          </div>
        </div>
      </footer>

      {/* ============================================ */}
      {/* STICKY CTA — Блок 11                         */}
      {/* ============================================ */}
      <StickyCTA />
    </main>
  );
}
