import Image from "next/image";
import Configurator from "@/components/Configurator";
import { SmoothVideoLoop } from "@/components/ui/smooth-video-loop";
import StickyCTA from "@/components/StickyCTA";
import { Check, ArrowRight, ShieldCheck, PencilRuler, Clock } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TiltCard } from "@/components/ui/TiltCard";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <AuroraBackground className="min-h-screen selection:bg-primary/30 relative text-foreground w-full !h-auto">
      
      {/* ============================================ */}
      {/* HEADER                                       */}
      {/* ============================================ */}
      <header className="absolute top-0 w-full z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-slate-50 font-sans font-bold tracking-tight text-lg">
              D
            </div>
            <div>
              <span className="font-sans font-semibold tracking-tight text-xl text-slate-50 tracking-wide">Dwgglass</span>
              <span className="hidden lg:inline text-[10px] text-slate-300 ml-3 uppercase tracking-[0.15em] font-medium">Онлайн-чертежи стекла</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-12 text-[11px] font-semibold text-slate-300 uppercase tracking-[0.2em]">
            <a href="#how-it-works" className="hover:text-slate-50 transition-colors">Как это работает</a>
            <a href="#configurator" className="hover:text-slate-50 transition-colors">Конфигуратор</a>
            <a href="#comparison-proof" className="hover:text-slate-50 transition-colors">Сравнение</a>
            <a href="#faq" className="hover:text-slate-50 transition-colors">FAQ</a>
          </div>

          <AnimatedButton href="#configurator" variant="primary" shape="rounded" className="px-5 py-2.5 text-sm whitespace-nowrap bg-white text-black hover:bg-slate-200">
            Рассчитать проект
          </AnimatedButton>
        </div>
      </header>

      {/* ============================================ */}
      {/* БЛОК 1. HERO SECTION (B2C Premium Layout)    */}
      {/* ============================================ */}
      <section className="relative min-h-[100svh] pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden border-b border-white/10">
        
        {/* Animated Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <SmoothVideoLoop 
            src="/hero_video.mp4" 
            className="absolute inset-0 w-full h-full object-cover scale-[1.05] opacity-80" 
            fadeDurationMs={3000} 
          />
          {/* Gradient overlay to ensure perfect text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 pointer-events-none"></div>
          {/* Radial vignette for cinematic feel */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-medium uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
            Точный проект за 24 часа
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-light tracking-tight text-white leading-[1.1] mb-6 max-w-4xl drop-shadow-lg">
            Стеклянная душевая <br className="hidden sm:block"/> <span className="font-medium">без переплат.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 font-light leading-relaxed max-w-2xl drop-shadow-md">
            Сделаем инженерный чертёж. Вы закажете стекло напрямую у завода-производителя и <span className="text-white font-medium">сэкономите до 45 000 ₽</span>.
          </p>

          <AnimatedButton href="#configurator" variant="primary" shape="oval" className="px-10 py-5 text-lg md:text-xl mb-12 shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] transition-all">
            Собрать свою душевую
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </AnimatedButton>
          
          {/* Compact Glassmorphism Badges for Mobile */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 w-full max-w-3xl">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-lg">
              <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
              <span className="text-sm text-white font-medium tracking-wide">Точность 1 мм</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-lg">
              <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
              <span className="text-sm text-white font-medium tracking-wide">Ваш дизайн</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-lg">
              <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
              <span className="text-sm text-white font-medium tracking-wide">100% Гарантия</span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* БЛОК 2. БЫЛО / СТАЛО (Proof)                 */}
      {/* ============================================ */}
      <section id="comparison-proof" className="py-24 bg-transparent relative z-10 border-b border-slate-200/50 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <RevealOnScroll className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-slate-50 mb-6 tracking-tight">Как должен выглядеть заказ, чтобы вас поняли на производстве</h2>
            <p className="text-slate-300 text-lg font-light">Сравните, с чем клиенты приходят на завод, и с чем они уходят от нас.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* БЫЛО */}
            <RevealOnScroll delay={0.1}>
              <div className="bg-white/10 border border-white/40 rounded-3xl p-6 lg:p-8 backdrop-blur-md relative overflow-hidden flex flex-col h-full shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                <div className="absolute top-0 right-0 bg-red-500/10 text-red-400 px-6 py-2 rounded-bl-3xl font-medium text-sm border-b border-l border-red-500/20">Как не надо</div>
                <h3 className="text-2xl font-sans font-medium tracking-tight text-slate-50 mt-4 mb-6">Эскиз «на коленке»</h3>
                <div className="relative w-full bg-white p-4 rounded-2xl shadow-xl aspect-video mb-8 grayscale-[50%] opacity-90">
                  <Image 
                    src="/images/sketch_shower_bad_v2.png" 
                    alt="Эскиз от руки" 
                    fill 
                    className="object-contain rounded-xl" 
                  />
                </div>
                <p className="text-slate-300 font-light leading-relaxed mt-auto">
                  С таким эскизом завод откажет в производстве или снимет с себя ответственность за ошибки. Никто не будет гадать, где сверлить отверстия.
                </p>
              </div>
            </RevealOnScroll>

            {/* СТАЛО */}
            <RevealOnScroll delay={0.2}>
              <div className="bg-gradient-to-b from-white/20 to-white/5 border border-white/40 rounded-3xl p-6 lg:p-8 backdrop-blur-md relative overflow-hidden flex flex-col h-full shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                <div className="absolute top-0 right-0 bg-primary text-slate-50 px-6 py-2 rounded-bl-3xl font-medium text-sm shadow-none">CAD-чертеж</div>
                <h3 className="text-2xl font-sans font-medium tracking-tight text-slate-50 mt-4 mb-6">Наш инженерный проект</h3>
                <div className="relative w-full bg-white p-4 rounded-2xl shadow-xl aspect-video mb-8">
                  <Image 
                    src="/images/cad_shower_good_v2.png" 
                    alt="CAD чертеж" 
                    fill 
                    className="object-contain rounded-xl" 
                  />
                </div>
                <p className="text-slate-300 font-light leading-relaxed mt-auto">
                  Гарантирует, что стекло идеально встанет в вашу ванную, а выбранная фурнитура закрепится без люфтов. Завод примет в работу без вопросов.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* БЛОК 3. КАК ЭТО РАБОТАЕТ (Этапы)             */}
      {/* ============================================ */}
      <section id="how-it-works" className="py-24 bg-transparent relative border-b border-slate-200/50 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          
          <RevealOnScroll delay={0.1} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-slate-50 mb-6 tracking-tight">Всего 4 шага до идеальной душевой</h2>
            <p className="text-slate-300 text-lg font-light">Это проще, чем кажется. Вы справитесь, даже если никогда не делали ремонт.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            
            {/* Шаг 1 */}
            <RevealOnScroll delay={0.1}>
              <div className="group h-full bg-white/10 border border-white/40 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden relative backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/20">
                <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>
                </div>
                <h3 className="text-2xl font-sans font-medium tracking-tight text-slate-50 mb-4 relative z-10">Вы снимаете мерки</h3>
                <p className="text-slate-300 leading-relaxed font-light mb-6 relative z-10">
                  Вам понадобится только обычная рулетка. Измеряете ширину и высоту будущей кабины по нашей инструкции.
                </p>
                <div className="mt-auto relative w-full bg-white p-2 md:p-4 rounded-[1.5rem] shadow-xl aspect-video group-hover:scale-[1.02] transition-transform duration-500">
                  <Image src="/images/sketch_shower_bad_v2.png" alt="Замеры" fill className="object-contain rounded-xl" />
                </div>
              </div>
            </RevealOnScroll>

            {/* Шаг 2 */}
            <RevealOnScroll delay={0.2}>
              <div className="group h-full bg-white/10 border border-white/40 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden relative backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/20">
                <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                </div>
                <h3 className="text-2xl font-sans font-medium tracking-tight text-slate-50 mb-4 relative z-10">Выбираете фурнитуру</h3>
                <p className="text-slate-300 leading-relaxed font-light mb-6 relative z-10">
                  Прикрепите ссылки на петли и ручки с маркетплейсов — инженер сам рассчитает нужные вырезы.
                </p>
                <div className="mt-auto relative w-full bg-white p-2 md:p-4 rounded-[1.5rem] shadow-xl aspect-video group-hover:scale-[1.02] transition-transform duration-500">
                  <Image src="/images/workspace_2_new_1780447634535.png" alt="Фурнитура" fill className="object-contain rounded-xl" />
                </div>
              </div>
            </RevealOnScroll>

            {/* Шаг 3 */}
            <RevealOnScroll delay={0.3}>
              <div className="group h-full bg-white/10 border border-white/40 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden relative backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/20">
                <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M10 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/><path d="m11.4 14.4-4.8 4.8"/></svg>
                </div>
                <h3 className="text-2xl font-sans font-medium tracking-tight text-slate-50 mb-4 relative z-10">Мы чертим</h3>
                <p className="text-slate-300 leading-relaxed font-light mb-6 relative z-10">
                  Переводим данные в профессиональный проект. Закладываем все зазоры и допуски для производства. Ровно за 24 часа.
                </p>
                <div className="mt-auto relative w-full bg-white p-2 md:p-4 rounded-[1.5rem] shadow-xl aspect-video group-hover:scale-[1.02] transition-transform duration-500">
                  <Image src="/images/cad_shower_good_v2.png" alt="Чертеж" fill className="object-contain rounded-xl" />
                </div>
              </div>
            </RevealOnScroll>

            {/* Шаг 4 */}
            <RevealOnScroll delay={0.4}>
              <div className="group h-full bg-white/10 border border-white/40 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden relative backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-none"></div>
                <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
                </div>
                <h3 className="text-2xl font-sans font-medium tracking-tight text-slate-50 mb-4 relative z-10">Завод производит</h3>
                <p className="text-slate-300 leading-relaxed font-light mb-6 relative z-10">
                  Вы отправляете готовый PDF-файл на ближайший стекольный завод и забираете стекло по себестоимости.
                </p>
                <div className="mt-auto relative w-full bg-white p-2 md:p-4 rounded-[1.5rem] shadow-xl aspect-video group-hover:scale-[1.02] transition-transform duration-500">
                  <Image src="/images/niche_shower_render_v2.png" alt="Готовая душевая" fill className="object-contain rounded-xl" />
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* БЛОК 4. ИНТЕРАКТИВНЫЙ КОНФИГУРАТОР           */}
      {/* ============================================ */}
      <section id="configurator" className="py-32 bg-transparent border-b border-slate-200/50 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <RevealOnScroll className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight text-slate-50 tracking-tight">Соберите свою душевую</h2>
          </RevealOnScroll>
          
          <Configurator />
        </div>
      </section>

      {/* ============================================ */}
      {/* БЛОК 5. СРАВНЕНИЕ ЦЕН (Доказательство)       */}
      {/* ============================================ */}
      <section id="comparison" className="py-24 bg-transparent relative z-10 border-b border-slate-200/50 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-slate-50 mb-4 tracking-tight">Оцените реальную выгоду</h2>
            <p className="text-slate-400 text-lg font-light">Сравнение стоимости готовых кабин у стекольных компаний со стоимостью заказа стекла на заводе.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <RevealOnScroll delay={0.1}>
              <div className="bg-white/10 border border-white/40 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                <h3 className="text-2xl font-sans font-medium tracking-tight text-slate-50 mb-2">Угловая кабина</h3>
                <p className="text-slate-400 text-sm font-light mb-8">Стекло 8мм · 900×900</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200/50">
                    <span className="text-slate-300">У стекольных компаний:</span>
                    <span className="text-slate-400 line-through text-lg">~ 55 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200/50">
                    <span className="text-slate-300">Цена на заводе + наш чертеж:</span>
                    <span className="text-slate-50 font-medium text-lg">~ 14 000 ₽</span>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-none p-6 border border-[#e2e0db] flex justify-between items-center">
                  <span className="text-slate-50 font-medium">Ваша экономия:</span>
                  <span className="text-primary text-3xl font-bold font-sans font-medium tracking-tight">41 000 ₽</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Card 2 */}
            <RevealOnScroll delay={0.2}>
              <div className="bg-white/10 border border-white/40 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                <h3 className="text-2xl font-sans font-medium tracking-tight text-slate-50 mb-2">Дверь в нишу</h3>
                <p className="text-slate-400 text-sm font-light mb-8">Стекло 8мм · 800×2000</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200/50">
                    <span className="text-slate-300">У стекольных компаний:</span>
                    <span className="text-slate-400 line-through text-lg">~ 30 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200/50">
                    <span className="text-slate-300">Цена на заводе + наш чертеж:</span>
                    <span className="text-slate-50 font-medium text-lg">~ 10 500 ₽</span>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-none p-6 border border-[#e2e0db] flex justify-between items-center">
                  <span className="text-slate-50 font-medium">Ваша экономия:</span>
                  <span className="text-primary text-3xl font-bold font-sans font-medium tracking-tight">19 500 ₽</span>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* БЛОК 6. ГАРАНТИИ                             */}
      {/* ============================================ */}
      <section className="py-24 bg-transparent relative z-10 border-b border-slate-200/50 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-slate-50 mb-4 tracking-tight">Инженерный контроль каждого проекта</h2>
          </RevealOnScroll>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RevealOnScroll delay={0.1} className="group bg-white/10 border border-white/40 rounded-3xl p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/20">
                <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <ShieldCheck size={28} strokeWidth={1.5} />
                </div>
                <div className="text-slate-50 text-xl font-sans font-medium tracking-tight mb-4">Финансовая гарантия</div>
                <div className="text-slate-300 text-sm font-light leading-relaxed">
                  Если стекло не подойдет из-за нашей ошибки в чертеже, мы бесплатно переделаем проект и компенсируем ваши убытки на перевыпуск стекла.
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.2} className="group bg-white/10 border border-white/40 rounded-3xl p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/20">
                <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <PencilRuler size={28} strokeWidth={1.5} />
                </div>
                <div className="text-slate-50 text-xl font-sans font-medium tracking-tight mb-4">Защита от «кривых» замеров</div>
                <div className="text-slate-300 text-sm font-light leading-relaxed">
                  Инженер проверяет ваши цифры на логичность. Если что-то не сходится — мы свяжемся с вами и поможем перепроверить.
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.3} className="group bg-white/10 border border-white/40 rounded-3xl p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/20">
                <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Clock size={28} strokeWidth={1.5} />
                </div>
                <div className="text-slate-50 text-xl font-sans font-medium tracking-tight mb-4">Без срыва сроков</div>
                <div className="text-slate-300 text-sm font-light leading-relaxed">
                  Ремонт не должен простаивать. Ваш проект будет готов ровно через 24 часа.
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* БЛОК 7. FAQ                                  */}
      {/* ============================================ */}
      <section id="faq" className="py-24 bg-transparent relative z-10">
        <div className="container mx-auto px-6 max-w-3xl">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-slate-50 mb-16 text-center tracking-tight">Вопросы и ответы</h2>
          </RevealOnScroll>
          
          <div className="space-y-4">
            <RevealOnScroll delay={0.1}>
              <details className="group bg-white/10 border border-white/40 rounded-3xl p-6 hover:bg-white/20 transition-colors cursor-pointer marker:content-[''] backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                <summary className="flex items-center justify-between text-lg font-medium text-slate-50 outline-none">
                  Что, если я измерю неправильно?
                  <svg className="w-5 h-5 text-slate-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="pt-4 text-slate-300 font-light leading-relaxed">
                  Мы страхуем вас от этого. Перед тем как делать чертёж, наш инженер проверяет ваши замеры на возможные перекосы. А если ошибка произойдет по вине нашего чертежа — мы вернем деньги за проект и компенсируем стоимость стекла.
                </p>
              </details>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <details className="group bg-white/10 border border-white/40 rounded-3xl p-6 hover:bg-white/20 transition-colors cursor-pointer marker:content-[''] backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                <summary className="flex items-center justify-between text-lg font-medium text-slate-50 outline-none">
                  Где мне заказать само стекло?
                  <svg className="w-5 h-5 text-slate-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="pt-4 text-slate-300 font-light leading-relaxed">
                  Практически в любом городе есть заводы или крупные фабрики по обработке стекла. Вы просто отправляете им наш PDF-файл в мессенджер или на почту — он составлен по ГОСТам производства, им всё будет абсолютно понятно.
                </p>
              </details>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <details className="group bg-white/10 border border-white/40 rounded-3xl p-6 hover:bg-white/20 transition-colors cursor-pointer marker:content-[''] backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                <summary className="flex items-center justify-between text-lg font-medium text-slate-50 outline-none">
                  А что делать с фурнитурой? Где брать петли и ручки?
                  <svg className="w-5 h-5 text-slate-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="pt-4 text-slate-300 font-light leading-relaxed">
                  Вы можете купить их в любом строительном гипермаркете (Леруа Мерлен) или заказать на Ozon/Wildberries. В конфигураторе выше вы просто прикрепляете ссылки на то, что вам понравилось, а мы делаем точные вырезы в стекле именно под вашу фурнитуру.
                </p>
              </details>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent py-12 border-t border-[#e2e0db]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-slate-50 font-sans font-bold tracking-tight text-xs">D</div>
              <span className="font-sans font-semibold tracking-tight text-slate-50">Dwgglass</span>
            </div>
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-slate-300 transition-colors">Оферта</a>
            </div>
            <p className="text-slate-400 text-xs">© 2026</p>
          </div>
        </div>
      </footer>

      {/* ============================================ */}
      {/* STICKY CTA                                   */}
      {/* ============================================ */}
      <StickyCTA />
    </AuroraBackground>
  );
}
