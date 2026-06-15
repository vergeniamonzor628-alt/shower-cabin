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
              <span className="font-sans font-semibold tracking-tight text-xl text-slate-50 tracking-wide">dwgglass</span>
              <span className="hidden lg:inline text-[10px] text-slate-300 ml-3 uppercase tracking-[0.15em] font-medium">онлайн-чертежи стекла</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-12 text-[11px] font-semibold text-slate-300 uppercase tracking-[0.2em]">
            <a href="#how-it-works" className="hover:text-slate-50 transition-colors">как это работает</a>
            <a href="#configurator" className="hover:text-slate-50 transition-colors">конфигуратор</a>
            <a href="#comparison-proof" className="hover:text-slate-50 transition-colors">сравнение</a>
            <a href="#faq" className="hover:text-slate-50 transition-colors">faq</a>
          </div>

          <AnimatedButton href="#configurator" variant="primary" shape="rounded" className="px-5 py-2.5 text-sm whitespace-nowrap bg-white text-black hover:bg-slate-200">
            рассчитать проект
          </AnimatedButton>
        </div>
      </header>

      {/* ============================================ */}
      {/* блок 1. HERO SECTION (B2C Premium Layout)    */}
      {/* ============================================ */}
      <section className="relative min-h-[100svh] pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden border-b border-white/10">
        
        {/* Animated Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-transparent">
          <SmoothVideoLoop 
            src="/hero_video.mp4" 
            className="absolute inset-0 w-full h-full object-cover scale-[1.05] opacity-100" 
            fadeDurationMs={3000} 
          />
          {/* Frosted glass overlay (lighter, blurred) */}
          <div className="absolute inset-0 bg-slate-700/40 backdrop-blur-[10px] pointer-events-none transition-all duration-1000"></div>
          {/* Subtle edge darkening for text readability */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(30,41,59,0.5)_100%)] pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/20 text-white/90 text-[10px] font-medium uppercase tracking-[0.15em] mb-10 backdrop-blur-md">
            точный проект за 24 часа
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-sans font-light tracking-tight text-white leading-[1.1] mb-8 max-w-5xl drop-shadow-lg lowercase">
            стеклянная душевая <br className="hidden sm:block"/> <span className="font-normal">без переплат.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/90 mb-14 font-light leading-relaxed max-w-3xl drop-shadow-md lowercase">
            сделаем инженерный чертёж. вы закажете стекло напрямую у завода-<br className="hidden sm:block"/>производителя и <span className="text-white font-medium">сэкономите до 45 000 ₽</span>.
          </p>

          <AnimatedButton href="#configurator" variant="primary" shape="oval" className="px-12 py-5 text-lg md:text-xl mb-16 bg-[#2563EB] hover:bg-[#1d4ed8] text-white shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all lowercase">
            собрать свою душевую
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </AnimatedButton>
          
          {/* Compact Glassmorphism Badges for Mobile */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 w-full max-w-4xl">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 shadow-lg">
              <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
              <span className="text-sm md:text-base text-white font-light tracking-wide lowercase">точность 1 мм</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 shadow-lg">
              <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
              <span className="text-sm md:text-base text-white font-light tracking-wide lowercase">ваш дизайн</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 shadow-lg">
              <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
              <span className="text-sm md:text-base text-white font-light tracking-wide lowercase">100% гарантия</span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* блок 2. было / стало (Proof)                 */}
      {/* ============================================ */}
      <section id="comparison-proof" className="py-24 bg-transparent relative z-10 border-b border-slate-200/50 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <RevealOnScroll className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-slate-50 mb-6 tracking-tight">как должен выглядеть заказ, чтобы вас поняли на производстве</h2>
            <p className="text-slate-300 text-lg font-light">сравните, с чем клиенты приходят на завод, и с чем они уходят от нас.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* было */}
            {/* было */}
            <RevealOnScroll delay={0.1}>
              <div className="bg-transparent border border-white/10 rounded-none p-6 lg:p-8 relative overflow-hidden flex flex-col h-full hover:border-white/30 transition-colors duration-500">
                <h3 className="text-xl md:text-2xl font-sans font-light tracking-widest text-white/50 mb-8">эскиз</h3>
                <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-none border border-white/5">
                  <Image 
                    src="/images/sketch_wide.png" 
                    alt="эскиз от руки" 
                    fill 
                    className="object-cover opacity-80 mix-blend-lighten" 
                  />
                </div>
                <p className="text-slate-400 font-light leading-relaxed mt-auto text-sm md:text-base">
                  приблизительные размеры и формы. завод откажет в производстве или снимет с себя ответственность за любые технические нестыковки.
                </p>
              </div>
            </RevealOnScroll>

            {/* стало */}
            <RevealOnScroll delay={0.2}>
              <div className="bg-transparent border border-white/10 rounded-none p-6 lg:p-8 relative overflow-hidden flex flex-col h-full hover:border-white/30 transition-colors duration-500">
                <h3 className="text-xl md:text-2xl font-sans font-light tracking-widest text-white/90 mb-8">проект</h3>
                <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-none border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                  <Image 
                    src="/images/cad_wide.png" 
                    alt="cad чертеж" 
                    fill 
                    className="object-cover opacity-90 mix-blend-lighten" 
                  />
                </div>
                <p className="text-slate-300 font-light leading-relaxed mt-auto text-sm md:text-base">
                  точный инженерный расчет зазоров и фурнитуры. гарантирует, что стекло идеально встанет в ванную комнату. завод принимает в работу мгновенно.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* блок 3. как это работает (этапы)             */}
      {/* ============================================ */}
      <section id="how-it-works" className="py-24 bg-transparent relative border-b border-slate-200/50 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          
          <RevealOnScroll delay={0.1} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-slate-50 mb-6 tracking-tight">всего 4 шага до идеальной душевой</h2>
            <p className="text-slate-300 text-lg font-light">это проще, чем кажется. вы справитесь, даже если никогда не делали ремонт.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            
            {/* шаг 1 */}
            <RevealOnScroll delay={0.1}>
              <div className="group h-full bg-white/10 border border-white/40 rounded-none p-8 hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden relative backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/20">
                <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>
                </div>
                <h3 className="text-2xl font-sans font-medium tracking-tight text-slate-50 mb-4 relative z-10">вы снимаете мерки</h3>
                <p className="text-slate-300 leading-relaxed font-light mb-6 relative z-10">
                  вам понадобится только обычная рулетка. измеряете ширину и высоту будущей кабины по нашей инструкции.
                </p>
                <div className="mt-auto relative w-full rounded-none aspect-video group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden border border-white/10">
                  <Image src="/wf-1.png" alt="замеры" fill className="object-cover rounded-none" />
                </div>
              </div>
            </RevealOnScroll>

            {/* шаг 2 */}
            <RevealOnScroll delay={0.2}>
              <div className="group h-full bg-white/10 border border-white/40 rounded-none p-8 hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden relative backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/20">
                <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                </div>
                <h3 className="text-2xl font-sans font-medium tracking-tight text-slate-50 mb-4 relative z-10">выбираете фурнитуру</h3>
                <p className="text-slate-300 leading-relaxed font-light mb-6 relative z-10">
                  прикрепите ссылки на петли и ручки с маркетплейсов — инженер сам рассчитает нужные вырезы.
                </p>
                <div className="mt-auto relative w-full rounded-none aspect-video group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden border border-white/10">
                  <Image src="/wf-2.png" alt="фурнитура" fill className="object-cover rounded-none" />
                </div>
              </div>
            </RevealOnScroll>

            {/* шаг 3 */}
            <RevealOnScroll delay={0.3}>
              <div className="group h-full bg-white/10 border border-white/40 rounded-none p-8 hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden relative backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/20">
                <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M10 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/><path d="m11.4 14.4-4.8 4.8"/></svg>
                </div>
                <h3 className="text-2xl font-sans font-medium tracking-tight text-slate-50 mb-4 relative z-10">мы чертим</h3>
                <p className="text-slate-300 leading-relaxed font-light mb-6 relative z-10">
                  переводим данные в профессиональный проект. закладываем все зазоры и допуски для производства. ровно за 24 часа.
                </p>
                <div className="mt-auto relative w-full rounded-none aspect-video group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden border border-white/10">
                  <Image src="/wf-3.png" alt="чертеж" fill className="object-cover rounded-none" />
                </div>
              </div>
            </RevealOnScroll>

            {/* шаг 4 */}
            <RevealOnScroll delay={0.4}>
              <div className="group h-full bg-white/10 border border-white/40 rounded-none p-8 hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden relative backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-none"></div>
                <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
                </div>
                <h3 className="text-2xl font-sans font-medium tracking-tight text-slate-50 mb-4 relative z-10">завод производит</h3>
                <p className="text-slate-300 leading-relaxed font-light mb-6 relative z-10">
                  вы отправляете готовый pdf-файл на ближайший стекольный завод и забираете стекло по себестоимости.
                </p>
                <div className="mt-auto relative w-full rounded-none aspect-video group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden border border-white/10">
                  <Image src="/wf-4.png" alt="готовая душевая" fill className="object-cover rounded-none" />
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* блок 4. интерактивный конфигуратор           */}
      {/* ============================================ */}
      <section id="configurator" className="py-32 bg-transparent border-b border-slate-200/50 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <RevealOnScroll className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight text-slate-50 tracking-tight">соберите свою душевую</h2>
          </RevealOnScroll>
          
          <Configurator />
        </div>
      </section>

      {/* ============================================ */}
      {/* блок 5. сравнение цен (доказательство)       */}
      {/* ============================================ */}
      <section id="comparison" className="py-24 bg-transparent relative z-10 border-b border-slate-200/50 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-slate-50 mb-4 tracking-tight">оцените реальную выгоду</h2>
            <p className="text-slate-400 text-lg font-light">сравнение стоимости готовых кабин у стекольных компаний со стоимостью заказа стекла на заводе.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <RevealOnScroll delay={0.1}>
              <div className="bg-white/10 border border-white/40 rounded-none p-8 backdrop-blur-md relative overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                <h3 className="text-2xl font-sans font-medium tracking-tight text-slate-50 mb-2">угловая кабина</h3>
                <p className="text-slate-400 text-sm font-light mb-8">стекло 8мм · 900×900</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200/50">
                    <span className="text-slate-300">у стекольных компаний:</span>
                    <span className="text-slate-400 line-through text-lg">~ 55 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200/50">
                    <span className="text-slate-300">цена на заводе + наш чертеж:</span>
                    <span className="text-slate-50 font-medium text-lg">~ 14 000 ₽</span>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-none p-6 border border-[#e2e0db] flex justify-between items-center">
                  <span className="text-slate-50 font-medium">ваша экономия:</span>
                  <span className="text-primary text-3xl font-bold font-sans font-medium tracking-tight">41 000 ₽</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Card 2 */}
            <RevealOnScroll delay={0.2}>
              <div className="bg-white/10 border border-white/40 rounded-none p-8 backdrop-blur-md relative overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                <h3 className="text-2xl font-sans font-medium tracking-tight text-slate-50 mb-2">дверь в нишу</h3>
                <p className="text-slate-400 text-sm font-light mb-8">стекло 8мм · 800×2000</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200/50">
                    <span className="text-slate-300">у стекольных компаний:</span>
                    <span className="text-slate-400 line-through text-lg">~ 30 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200/50">
                    <span className="text-slate-300">цена на заводе + наш чертеж:</span>
                    <span className="text-slate-50 font-medium text-lg">~ 10 500 ₽</span>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-none p-6 border border-[#e2e0db] flex justify-between items-center">
                  <span className="text-slate-50 font-medium">ваша экономия:</span>
                  <span className="text-primary text-3xl font-bold font-sans font-medium tracking-tight">19 500 ₽</span>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* блок 6. гарантии                             */}
      {/* ============================================ */}
      <section className="py-24 bg-transparent relative z-10 border-b border-slate-200/50 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-slate-50 mb-4 tracking-tight">инженерный контроль каждого проекта</h2>
          </RevealOnScroll>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RevealOnScroll delay={0.1} className="group bg-white/10 border border-white/40 rounded-none p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/20">
                <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <ShieldCheck size={28} strokeWidth={1.5} />
                </div>
                <div className="text-slate-50 text-xl font-sans font-medium tracking-tight mb-4">финансовая гарантия</div>
                <div className="text-slate-300 text-sm font-light leading-relaxed">
                  если стекло не подойдет из-за нашей ошибки в чертеже, мы бесплатно переделаем проект и компенсируем ваши убытки на перевыпуск стекла.
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.2} className="group bg-white/10 border border-white/40 rounded-none p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/20">
                <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <PencilRuler size={28} strokeWidth={1.5} />
                </div>
                <div className="text-slate-50 text-xl font-sans font-medium tracking-tight mb-4">защита от «кривых» замеров</div>
                <div className="text-slate-300 text-sm font-light leading-relaxed">
                  инженер проверяет ваши цифры на логичность. если что-то не сходится — мы свяжемся с вами и поможем перепроверить.
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.3} className="group bg-white/10 border border-white/40 rounded-none p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/20">
                <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Clock size={28} strokeWidth={1.5} />
                </div>
                <div className="text-slate-50 text-xl font-sans font-medium tracking-tight mb-4">без срыва сроков</div>
                <div className="text-slate-300 text-sm font-light leading-relaxed">
                  ремонт не должен простаивать. ваш проект будет готов ровно через 24 часа.
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* блок 7. faq                                  */}
      {/* ============================================ */}
      <section id="faq" className="py-24 bg-transparent relative z-10">
        <div className="container mx-auto px-6 max-w-3xl">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-slate-50 mb-16 text-center tracking-tight">вопросы и ответы</h2>
          </RevealOnScroll>
          
          <div className="space-y-4">
            <RevealOnScroll delay={0.1}>
              <details className="group bg-white/10 border border-white/40 rounded-none p-6 hover:bg-white/20 transition-colors cursor-pointer marker:content-[''] backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                <summary className="flex items-center justify-between text-lg font-medium text-slate-50 outline-none">
                  что, если я измерю неправильно?
                  <svg className="w-5 h-5 text-slate-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="pt-4 text-slate-300 font-light leading-relaxed">
                  мы страхуем вас от этого. перед тем как делать чертёж, наш инженер проверяет ваши замеры на возможные перекосы. а если ошибка произойдет по вине нашего чертежа — мы вернем деньги за проект и компенсируем стоимость стекла.
                </p>
              </details>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <details className="group bg-white/10 border border-white/40 rounded-none p-6 hover:bg-white/20 transition-colors cursor-pointer marker:content-[''] backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                <summary className="flex items-center justify-between text-lg font-medium text-slate-50 outline-none">
                  где мне заказать само стекло?
                  <svg className="w-5 h-5 text-slate-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="pt-4 text-slate-300 font-light leading-relaxed">
                  практически в любом городе есть заводы или крупные фабрики по обработке стекла. вы просто отправляете им наш pdf-файл в мессенджер или на почту — он составлен по гостам производства, им всё будет абсолютно понятно.
                </p>
              </details>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <details className="group bg-white/10 border border-white/40 rounded-none p-6 hover:bg-white/20 transition-colors cursor-pointer marker:content-[''] backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                <summary className="flex items-center justify-between text-lg font-medium text-slate-50 outline-none">
                  а что делать с фурнитурой? где брать петли и ручки?
                  <svg className="w-5 h-5 text-slate-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="pt-4 text-slate-300 font-light leading-relaxed">
                  вы можете купить их в любом строительном гипермаркете (леруа мерлен) или заказать на ozon/wildberries. в конфигураторе выше вы просто прикрепляете ссылки на то, что вам понравилось, а мы делаем точные вырезы в стекле именно под вашу фурнитуру.
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
              <span className="font-sans font-semibold tracking-tight text-slate-50">dwgglass</span>
            </div>
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-slate-300 transition-colors">оферта</a>
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
