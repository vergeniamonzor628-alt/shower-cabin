import Image from "next/image";
import Configurator from "@/components/Configurator";
import { SmoothVideoLoop } from "@/components/ui/smooth-video-loop";
import StickyCTA from "@/components/StickyCTA";
import { Check, ArrowRight, ShieldCheck, PencilRuler, Clock } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <AuroraBackground className="min-h-screen relative text-slate-900 w-full !h-auto bg-slate-50">
      
      {/* ============================================ */}
      {/* HEADER                                       */}
      {/* ============================================ */}
      <header className="w-full z-50 pt-6 pb-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center text-primary font-sans font-bold tracking-tight text-xl">
              D
            </div>
            <div>
              <span className="font-sans font-semibold tracking-tight text-xl text-slate-900 tracking-wide">dwgglass</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-[12px] font-medium text-slate-500 uppercase tracking-wider bg-white px-8 py-3 rounded-full shadow-sm border border-slate-100">
            <a href="#how-it-works" className="hover:text-primary transition-colors">как это работает</a>
            <a href="#configurator" className="hover:text-primary transition-colors">конфигуратор</a>
            <a href="#comparison-proof" className="hover:text-primary transition-colors">сравнение</a>
            <a href="#faq" className="hover:text-primary transition-colors">faq</a>
          </div>

          <AnimatedButton href="#configurator" variant="primary" shape="pill" className="px-6 py-3 text-sm whitespace-nowrap bg-primary text-white hover:bg-primary/90 shadow-sm">
            рассчитать проект
          </AnimatedButton>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 flex flex-col gap-6 md:gap-8 pb-24">
        
        {/* ============================================ */}
        {/* блок 1. HERO SECTION (Bento Style)           */}
        {/* ============================================ */}
        <section className="relative w-full rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-200/50 min-h-[80svh] flex flex-col">
          
          {/* Animated Video Background INSIDE the bento card */}
          <div className="absolute inset-0 z-0">
            <SmoothVideoLoop 
              src="/hero_video.mp4" 
              className="w-full h-full object-cover scale-[1.05] opacity-100" 
              fadeDurationMs={3000} 
            />
            {/* Light Glass Overlay for readability over video */}
            <div className="absolute inset-0 bg-white/50 backdrop-blur-md pointer-events-none"></div>
          </div>

          <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center p-8 md:p-16">
            
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 shadow-sm border border-white/50 text-slate-800 text-[11px] font-medium uppercase tracking-[0.15em] mb-8 backdrop-blur-md">
              точный проект за 24 часа
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-sans font-light tracking-tight text-slate-900 leading-[1.05] mb-6 max-w-4xl lowercase">
              стеклянная душевая <br className="hidden sm:block"/> <span className="font-normal text-primary">без переплат.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 mb-12 font-light leading-relaxed max-w-2xl lowercase">
              сделаем инженерный чертёж. вы закажете стекло напрямую у завода-производителя и <span className="font-medium text-slate-900">сэкономите до 45 000 ₽</span>.
            </p>

            <AnimatedButton href="#configurator" variant="primary" shape="pill" className="px-10 py-5 text-lg mb-16 bg-[#2563EB] hover:bg-[#1d4ed8] text-white shadow-lg shadow-blue-500/30 transition-all lowercase">
              собрать свою душевую
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </AnimatedButton>
            
            {/* Floating Stats / Features Card */}
            <div className="flex flex-col sm:flex-row gap-4 bg-white/80 backdrop-blur-lg border border-white/50 rounded-2xl p-4 sm:p-6 shadow-xl absolute bottom-6 md:bottom-12 right-6 md:right-12 text-left">
              <div className="flex items-center gap-3 pr-6 sm:border-r border-slate-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <Check strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900">1 мм</div>
                  <div className="text-xs text-slate-500 lowercase">точность расчетов</div>
                </div>
              </div>
              <div className="flex items-center gap-3 pl-0 sm:pl-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <ShieldCheck strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 lowercase">гарантия чертежа</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================ */}
        {/* блок 2. как это работает (этапы)             */}
        {/* ============================================ */}
        <section id="how-it-works" className="w-full bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-slate-200/50">
          <RevealOnScroll className="mb-12">
            <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-slate-900 mb-4 lowercase">всего 4 шага до идеальной душевой</h2>
            <p className="text-slate-500 text-lg font-light lowercase">это проще, чем кажется. вы справитесь, даже если никогда не делали ремонт.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* шаг 1 */}
            <RevealOnScroll delay={0.1}>
              <div className="group h-full bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">1</div>
                  <h3 className="text-xl font-sans font-medium text-slate-900 lowercase">вы снимаете мерки</h3>
                </div>
                <p className="text-slate-600 font-light mb-6 lowercase text-sm">
                  вам понадобится только обычная рулетка. измеряете ширину и высоту будущей кабины по нашей инструкции.
                </p>
                <div className="mt-auto relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/wf-1.png" alt="замеры" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </RevealOnScroll>

            {/* шаг 2 */}
            <RevealOnScroll delay={0.2}>
              <div className="group h-full bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">2</div>
                  <h3 className="text-xl font-sans font-medium text-slate-900 lowercase">выбираете фурнитуру</h3>
                </div>
                <p className="text-slate-600 font-light mb-6 lowercase text-sm">
                  прикрепите ссылки на петли и ручки с маркетплейсов — инженер сам рассчитает нужные вырезы.
                </p>
                <div className="mt-auto relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/wf-2.png" alt="фурнитура" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </RevealOnScroll>

            {/* шаг 3 */}
            <RevealOnScroll delay={0.3}>
              <div className="group h-full bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">3</div>
                  <h3 className="text-xl font-sans font-medium text-slate-900 lowercase">мы чертим</h3>
                </div>
                <p className="text-slate-600 font-light mb-6 lowercase text-sm">
                  переводим данные в проект. закладываем зазоры для производства. готово за 24 часа.
                </p>
                <div className="mt-auto relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/wf-3.png" alt="чертеж" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </RevealOnScroll>

            {/* шаг 4 */}
            <RevealOnScroll delay={0.4}>
              <div className="group h-full bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">4</div>
                  <h3 className="text-xl font-sans font-medium text-slate-900 lowercase">завод производит</h3>
                </div>
                <p className="text-slate-600 font-light mb-6 lowercase text-sm">
                  отправляете готовый pdf на завод и забираете стекло по себестоимости.
                </p>
                <div className="mt-auto relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/wf-4.png" alt="готовая душевая" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </section>

        {/* ============================================ */}
        {/* блок 3. интерактивный конфигуратор           */}
        {/* ============================================ */}
        <section id="configurator" className="w-full bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-slate-200/50">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-slate-900 lowercase">соберите свою душевую</h2>
          </RevealOnScroll>
          <div className="bg-slate-50 rounded-3xl p-4 md:p-8 border border-slate-100">
            <Configurator />
          </div>
        </section>

        {/* ============================================ */}
        {/* блок 4. сравнение (Proof)                    */}
        {/* ============================================ */}
        <section id="comparison-proof" className="w-full bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-slate-200/50">
          <RevealOnScroll className="mb-12">
            <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-slate-900 mb-4 lowercase">почему это выгодно?</h2>
            <p className="text-slate-500 text-lg font-light lowercase">сравнение стоимости готовых кабин со стоимостью заказа стекла на заводе.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 */}
            <RevealOnScroll delay={0.1}>
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 relative overflow-hidden flex flex-col h-full">
                <h3 className="text-2xl font-sans font-medium tracking-tight text-slate-900 mb-2 lowercase">угловая кабина</h3>
                <p className="text-slate-500 text-sm font-light mb-8 lowercase">стекло 8мм · 900×900</p>
                
                <div className="space-y-4 mb-8 flex-1">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-slate-600 lowercase">у стекольных компаний:</span>
                    <span className="text-slate-400 line-through text-lg">~ 55 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-slate-600 lowercase">цена на заводе + наш чертеж:</span>
                    <span className="text-slate-900 font-medium text-lg">~ 14 000 ₽</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex justify-between items-center">
                  <span className="text-blue-900 font-medium lowercase">ваша экономия:</span>
                  <span className="text-blue-600 text-3xl font-bold font-sans tracking-tight">41 000 ₽</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Card 2 */}
            <RevealOnScroll delay={0.2}>
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 relative overflow-hidden flex flex-col h-full">
                <h3 className="text-2xl font-sans font-medium tracking-tight text-slate-900 mb-2 lowercase">дверь в нишу</h3>
                <p className="text-slate-500 text-sm font-light mb-8 lowercase">стекло 8мм · 800×2000</p>
                
                <div className="space-y-4 mb-8 flex-1">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-slate-600 lowercase">у стекольных компаний:</span>
                    <span className="text-slate-400 line-through text-lg">~ 30 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-slate-600 lowercase">цена на заводе + наш чертеж:</span>
                    <span className="text-slate-900 font-medium text-lg">~ 10 500 ₽</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex justify-between items-center">
                  <span className="text-blue-900 font-medium lowercase">ваша экономия:</span>
                  <span className="text-blue-600 text-3xl font-bold font-sans tracking-tight">19 500 ₽</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ============================================ */}
        {/* блок 5. FAQ                                  */}
        {/* ============================================ */}
        <section id="faq" className="w-full bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-slate-200/50">
          <RevealOnScroll className="mb-12">
            <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-slate-900 mb-4 lowercase">вопросы и ответы</h2>
          </RevealOnScroll>
          
          <div className="space-y-4">
            <RevealOnScroll delay={0.1}>
              <details className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-slate-100 transition-colors cursor-pointer marker:content-['']">
                <summary className="flex items-center justify-between text-lg font-medium text-slate-900 outline-none lowercase">
                  что, если я измерю неправильно?
                  <svg className="w-5 h-5 text-slate-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="pt-4 text-slate-600 font-light leading-relaxed lowercase">
                  мы страхуем вас от этого. перед тем как делать чертёж, наш инженер проверяет ваши замеры на возможные перекосы. а если ошибка произойдет по вине нашего чертежа — мы вернем деньги за проект и компенсируем стоимость стекла.
                </p>
              </details>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <details className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-slate-100 transition-colors cursor-pointer marker:content-['']">
                <summary className="flex items-center justify-between text-lg font-medium text-slate-900 outline-none lowercase">
                  где мне заказать само стекло?
                  <svg className="w-5 h-5 text-slate-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="pt-4 text-slate-600 font-light leading-relaxed lowercase">
                  практически в любом городе есть заводы или крупные фабрики по обработке стекла. вы просто отправляете им наш pdf-файл в мессенджер или на почту — он составлен по гостам производства, им всё будет абсолютно понятно.
                </p>
              </details>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <details className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-slate-100 transition-colors cursor-pointer marker:content-['']">
                <summary className="flex items-center justify-between text-lg font-medium text-slate-900 outline-none lowercase">
                  а что делать с фурнитурой? где брать петли и ручки?
                  <svg className="w-5 h-5 text-slate-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="pt-4 text-slate-600 font-light leading-relaxed lowercase">
                  вы можете купить их в любом строительном гипермаркете (леруа мерлен) или заказать на ozon/wildberries. в конфигураторе выше вы просто прикрепляете ссылки на то, что вам понравилось, а мы делаем точные вырезы в стекле именно под вашу фурнитуру.
                </p>
              </details>
            </RevealOnScroll>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-transparent py-12 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-white font-sans font-bold tracking-tight text-xs">d</div>
              <span className="font-sans font-semibold tracking-tight text-slate-900 lowercase">dwgglass</span>
            </div>
            <div className="flex items-center gap-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-slate-900 transition-colors lowercase">оферта</a>
            </div>
            <p className="text-slate-400 text-xs lowercase">© 2026</p>
          </div>
        </div>
      </footer>

      {/* STICKY CTA */}
      <StickyCTA />
    </AuroraBackground>
  );
}
