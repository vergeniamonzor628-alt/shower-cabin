import Image from "next/image";
import { ConfiguratorV2 } from "@/components/ConfiguratorV2";
import { SmoothVideoLoop } from "@/components/ui/smooth-video-loop";
import StickyCTA from "@/components/StickyCTA";
import { Check, ArrowRight, ShieldCheck, PencilRuler, Clock } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { AuroraBackground } from "@/components/ui/aurora-background";
import FAQ from "@/components/FAQ";

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
          
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-slate-500 uppercase tracking-wider bg-white px-8 py-3 rounded-full shadow-sm border border-slate-100">
            <a href="#how-it-works" className="hover:text-primary transition-colors">как это работает</a>
            <a href="#configurator" className="hover:text-primary transition-colors">конфигуратор</a>
            <a href="#comparison-proof" className="hover:text-primary transition-colors">сравнение</a>
            <a href="#faq" className="hover:text-primary transition-colors">faq</a>
          </div>

          <AnimatedButton href="#configurator" variant="primary" shape="oval" className="px-6 py-3 text-sm whitespace-nowrap bg-primary text-white hover:bg-primary/90 shadow-sm">
            рассчитать проект
          </AnimatedButton>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 flex flex-col gap-6 md:gap-8 pb-24">
        
        {/* ============================================ */}
        {/* блок 1. HERO SECTION (Bento Style)           */}
        {/* ============================================ */}
        <section className="relative w-full rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-200/50 min-h-[85svh] flex flex-col md:flex-row p-8 md:p-16 gap-8">
          
          {/* Animated Video Background INSIDE the bento card */}
          <div className="absolute inset-0 z-0">
            <SmoothVideoLoop 
              src="/boomerang.mp4" 
              className="w-full h-full object-cover scale-[1.05] opacity-100" 
              fadeDurationMs={3000} 
            />
            {/* Reduced Blur Glass Overlay */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm pointer-events-none"></div>
          </div>

          {/* Left Column: Text and CTA */}
          <div className="relative z-10 flex-1 flex flex-col justify-center max-w-xl">
            <h1 className="text-6xl sm:text-7xl md:text-[5.5rem] font-heading text-slate-900 leading-[1] mb-6 tracking-wide">
              СТЕКЛЯННАЯ ДУШЕВАЯ БЕЗ ПЕРЕПЛАТ.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-800 mb-10 font-sans leading-relaxed tracking-wide">
              СДЕЛАЕМ ИНЖЕНЕРНЫЙ ЧЕРТЁЖ. ВЫ ЗАКАЖЕТЕ СТЕКЛО НАПРЯМУЮ У ЗАВОДА-ПРОИЗВОДИТЕЛЯ И СЭКОНОМИТЕ ДО 45 000 ₽.
            </p>

            <div className="flex items-center gap-4 mb-12">
              <AnimatedButton href="#configurator" variant="primary" shape="oval" className="px-10 py-5 text-lg bg-[#2563EB] hover:bg-[#1d4ed8] text-white transition-all font-sans tracking-widest border border-transparent hover:border-white/20">
                ПЕРЕЙТИ В КОНФИГУРАТОР
              </AnimatedButton>
            </div>
            
            {/* Outline Box like the reference left bottom */}
            <div className="border border-slate-500/30 rounded-[2rem] p-6 w-fit backdrop-blur-md bg-white/30">
              <ul className="space-y-3 text-slate-900 font-sans tracking-wider font-medium">
                <li>• ТОЧНЫЙ ПРОЕКТ ЗА 24 ЧАСА</li>
                <li>• ЭКОНОМИЯ ДО 45 000 ₽</li>
                <li>• 100% ГАРАНТИЯ ЧЕРТЕЖА</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Stats Card */}
          <div className="relative z-10 flex-1 flex flex-col justify-center items-end gap-6 mt-12 md:mt-0">
            
            {/* Elegant Pricing Card (outline only) */}
            <div className="rounded-[2rem] p-8 max-w-sm w-full border border-slate-500/30 flex flex-col backdrop-blur-sm bg-white/10">
               <h3 className="text-xl font-sans tracking-widest text-slate-900 mb-6 font-semibold uppercase">стоимость проекта</h3>
               
               <div className="flex justify-between items-end border-b border-slate-400/30 pb-4 mb-4">
                 <div>
                   <div className="text-slate-900 font-sans font-bold tracking-wider mb-1 uppercase">обычный чертеж</div>
                   <div className="text-xs text-slate-700 tracking-wider uppercase">для типовых решений</div>
                 </div>
                 <div className="text-4xl font-heading text-slate-900 leading-none">2000 ₽</div>
               </div>

               <div className="flex justify-between items-end pb-2">
                 <div>
                   <div className="text-slate-900 font-sans font-bold tracking-wider mb-1 uppercase">индивидуальный</div>
                   <div className="text-xs text-slate-700 tracking-wider uppercase">расширенные замеры</div>
                 </div>
                 <div className="text-4xl font-heading text-slate-900 leading-none">4000 ₽</div>
               </div>
            </div>

            {/* Pill outlines like reference bottom right */}
            <div className="flex flex-wrap gap-3 justify-end max-w-md w-full mt-2">
              <div className="px-6 py-2 border border-slate-500/30 rounded-full text-slate-900 font-sans tracking-widest backdrop-blur-md bg-white/30 text-sm font-medium">ПОД КЛЮЧ</div>
              <div className="px-6 py-2 border border-slate-500/30 rounded-full text-slate-900 font-sans tracking-widest backdrop-blur-md bg-white/30 text-sm font-medium">КАЧЕСТВО</div>
              <div className="px-6 py-2 border border-slate-500/30 rounded-full text-slate-900 font-sans tracking-widest backdrop-blur-md bg-white/30 text-sm font-medium">НАДЕЖНОСТЬ</div>
            </div>

          </div>
        </section>

        {/* ============================================ */}
        {/* блок 2. как это работает (этапы)             */}
        {/* ============================================ */}
        <section id="how-it-works" className="w-full bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-slate-200/50">
          <RevealOnScroll className="mb-12">
            <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-slate-900 mb-4 ">всего 4 шага до идеальной душевой</h2>
            <p className="text-slate-500 text-lg font-light ">это проще, чем кажется. вы справитесь, даже если никогда не делали ремонт.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:h-[600px]">
            
            {/* Block 1 (Col 1) */}
            <RevealOnScroll delay={0.1} className="h-full">
              <div className="group bg-[#2563EB] rounded-[2.5rem] p-8 text-white flex flex-col justify-between h-full min-h-[300px] hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-700 ease-out cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-[2] transition-transform duration-1000 ease-out"></div>
                <div className="relative z-10">
                  <h3 className="text-6xl font-sans font-light mb-6 opacity-90 group-hover:scale-110 origin-left transition-transform duration-700 ease-out">1</h3>
                  <h4 className="text-2xl font-sans font-medium mb-4 group-hover:text-white transition-colors duration-500">вы снимаете мерки</h4>
                  <p className="text-blue-100 font-light group-hover:text-white transition-colors duration-500">вам понадобится только обычная рулетка. измеряете ширину и высоту будущей кабины по нашей инструкции.</p>
                </div>
                <div className="relative z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#2563EB] mt-8 shrink-0 group-hover:translate-x-6 group-hover:scale-110 transition-all duration-700 ease-out shadow-md">
                  <ArrowRight strokeWidth={2} />
                </div>
              </div>
            </RevealOnScroll>

            {/* Block 2 (Col 2) */}
            <RevealOnScroll delay={0.2} className="h-full">
              <div className="group relative rounded-[2.5rem] overflow-hidden h-full min-h-[300px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-700 ease-out cursor-pointer">
                <Image src="/wf-1.png" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" alt="замеры" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700"></div>
              </div>
            </RevealOnScroll>

            {/* Block 3 & 4 (Col 3) - Stacked */}
            <RevealOnScroll delay={0.3} className="h-full">
              <div className="flex flex-col gap-4 md:gap-6 h-full">
                {/* Top block */}
                <div className="group bg-[#0f172a] rounded-[2.5rem] p-8 text-white flex-1 flex flex-col justify-center min-h-[250px] hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-700 ease-out cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>
                  <div className="relative z-10">
                    <h3 className="text-4xl font-sans font-light mb-4 opacity-90 group-hover:scale-110 origin-left transition-transform duration-700 ease-out">2</h3>
                    <h4 className="text-xl font-sans font-medium mb-3 group-hover:text-blue-400 transition-colors duration-500">выбираете фурнитуру</h4>
                    <p className="text-slate-300 font-light text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-500">прикрепите ссылки на петли и ручки с маркетплейсов — инженер сам рассчитает нужные вырезы.</p>
                  </div>
                </div>
                {/* Bottom block */}
                <div className="group bg-white border border-slate-200 shadow-sm rounded-[2.5rem] p-8 text-slate-900 flex-1 flex flex-col justify-center relative min-h-[250px] hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200 transition-all duration-700 ease-out cursor-pointer overflow-hidden">
                  <div className="absolute right-0 bottom-0 w-32 h-32 bg-blue-50 rounded-tl-full opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                  <div className="relative z-10">
                    <h3 className="text-4xl font-sans font-light mb-4 text-slate-300 group-hover:text-[#2563EB] group-hover:scale-110 origin-left transition-all duration-700 ease-out">3</h3>
                    <h4 className="text-xl font-sans font-medium mb-3 text-[#2563EB]">мы чертим</h4>
                    <p className="text-slate-500 font-light text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-500">переводим данные в проект. закладываем зазоры для производства. готово за 24 часа.</p>
                  </div>
                  <div className="relative z-10 absolute right-6 bottom-6 w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] group-hover:text-white group-hover:translate-x-3 group-hover:scale-110 transition-all duration-700 ease-out">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Block 5 (Col 4) */}
            <RevealOnScroll delay={0.4} className="h-full">
              <div className="group relative rounded-[2.5rem] overflow-hidden h-full min-h-[400px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-700 ease-out cursor-pointer">
                <Image src="/wf-4.png" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" alt="завод производит" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700"></div>
                <div className="absolute inset-x-4 bottom-4 bg-white/90 backdrop-blur-md rounded-[2rem] p-6 shadow-sm border border-white/50 group-hover:bg-white group-hover:-translate-y-3 transition-all duration-700 ease-out">
                  <h3 className="text-3xl font-sans font-light mb-2 text-slate-400 group-hover:text-slate-900 group-hover:scale-110 origin-left transition-all duration-700 ease-out">4</h3>
                  <h4 className="text-lg font-sans font-medium mb-2 text-slate-900">завод производит</h4>
                  <p className="text-slate-600 font-light text-sm leading-relaxed">отправляете готовый pdf на завод и забираете стекло по себестоимости.</p>
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
            <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-slate-900 ">соберите свою душевую</h2>
          </RevealOnScroll>
          <div className="bg-slate-50 rounded-3xl md:p-8 border border-slate-100 overflow-hidden">
            <ConfiguratorV2 />
          </div>
        </section>

        {/* ============================================ */}
        {/* блок 4. сравнение (Proof)                    */}
        {/* ============================================ */}
        <section id="comparison-proof" className="w-full bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-slate-200/50">
          <RevealOnScroll className="mb-12">
            <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-slate-900 mb-4 ">почему это выгодно?</h2>
            <p className="text-slate-500 text-lg font-light ">сравнение стоимости готовых кабин со стоимостью заказа стекла на заводе.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:h-[600px]">
            
            {/* Col 1: Big Stats Card (like reference orange card, but blue) */}
            <RevealOnScroll delay={0.1} className="h-full">
              <div className="group bg-[#2563EB] rounded-[2.5rem] p-8 text-white flex flex-col justify-between h-full min-h-[400px] hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-700 ease-out cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-[2] transition-transform duration-1000 ease-out"></div>
                
                <div className="relative z-10 flex flex-col gap-8">
                  <div>
                    <div className="text-5xl font-sans font-medium mb-1 group-hover:scale-105 origin-left transition-transform duration-700 ease-out">до 70%</div>
                    <div className="text-blue-200 text-sm tracking-widest font-light">ЭКОНОМИЯ НА СТЕКЛЕ</div>
                  </div>
                  <div>
                    <div className="text-5xl font-sans font-medium mb-1 group-hover:scale-105 origin-left transition-transform duration-700 ease-out">24 часа</div>
                    <div className="text-blue-200 text-sm tracking-widest font-light">ГОТОВНОСТЬ ПРОЕКТА</div>
                  </div>
                  <div>
                    <div className="text-5xl font-sans font-medium mb-1 group-hover:scale-105 origin-left transition-transform duration-700 ease-out">8 мм</div>
                    <div className="text-blue-200 text-sm tracking-widest font-light">ЗАКАЛЕННОЕ СТЕКЛО</div>
                  </div>
                </div>

                <div className="relative z-10 self-end w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#2563EB] mt-8 group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:scale-110 transition-all duration-700 ease-out shadow-md">
                  <ArrowRight strokeWidth={2} />
                </div>
              </div>
            </RevealOnScroll>

            {/* Col 2: Image 1 */}
            <RevealOnScroll delay={0.2} className="h-full">
              <div className="group relative rounded-[2.5rem] overflow-hidden h-full min-h-[400px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-700 ease-out cursor-pointer">
                <Image src="/dark_corner.png" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" alt="угловая кабина" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700"></div>
              </div>
            </RevealOnScroll>

            {/* Col 3: Stacked Comparison Cards */}
            <RevealOnScroll delay={0.3} className="h-full">
              <div className="flex flex-col gap-4 md:gap-6 h-full">
                
                {/* Top: Corner Cabin */}
                <div className="group bg-[#0f172a] rounded-[2.5rem] p-8 text-white flex-1 flex flex-col justify-center min-h-[250px] hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-700 ease-out cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-2xl font-sans font-medium mb-1 group-hover:text-blue-400 group-hover:scale-105 origin-left transition-all duration-700 ease-out">угловая кабина</h3>
                      <p className="text-slate-400 text-xs font-light mb-4">стекло 8мм · 900×900</p>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center text-sm border-b border-slate-700/50 pb-2 group-hover:border-slate-600 transition-colors duration-700">
                        <span className="text-slate-400">у компаний:</span>
                        <span className="text-slate-500 line-through">~55 000 ₽</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-400">у нас:</span>
                        <span className="text-white font-medium group-hover:scale-105 origin-right transition-transform duration-700">~14 000 ₽</span>
                      </div>
                    </div>

                    <div className="mt-auto bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/5 group-hover:bg-white/20 group-hover:scale-[1.02] transition-all duration-700 ease-out">
                      <div className="text-xs text-blue-300 mb-1">ВАША ЭКОНОМИЯ:</div>
                      <div className="text-2xl font-sans font-medium">41 000 ₽</div>
                    </div>
                  </div>
                </div>

                {/* Bottom: Niche Door */}
                <div className="group bg-white border border-slate-200 shadow-sm rounded-[2.5rem] p-8 text-slate-900 flex-1 flex flex-col justify-center relative min-h-[250px] hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200 transition-all duration-700 ease-out cursor-pointer overflow-hidden">
                  <div className="absolute right-0 bottom-0 w-32 h-32 bg-blue-50 rounded-tl-full opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-2xl font-sans font-medium mb-1 group-hover:text-[#2563EB] group-hover:scale-105 origin-left transition-all duration-700 ease-out">дверь в нишу</h3>
                      <p className="text-slate-500 text-xs font-light mb-4">стекло 8мм · 800×2000</p>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2 group-hover:border-blue-100 transition-colors duration-700">
                        <span className="text-slate-500">у компаний:</span>
                        <span className="text-slate-400 line-through">~30 000 ₽</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">у нас:</span>
                        <span className="text-slate-900 font-medium group-hover:scale-105 origin-right transition-transform duration-700">~10 500 ₽</span>
                      </div>
                    </div>

                    <div className="mt-auto bg-blue-50 rounded-xl p-4 border border-blue-100 group-hover:bg-blue-100 group-hover:scale-[1.02] transition-all duration-700 ease-out">
                      <div className="text-xs text-blue-800 mb-1">ВАША ЭКОНОМИЯ:</div>
                      <div className="text-2xl font-sans font-medium text-blue-600">19 500 ₽</div>
                    </div>
                  </div>
                  <div className="absolute right-4 bottom-4 w-8 h-8 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] group-hover:text-white group-hover:scale-110 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100">
                    <ArrowRight size={14} />
                  </div>
                </div>

              </div>
            </RevealOnScroll>

            {/* Col 4: Image 2 */}
            <RevealOnScroll delay={0.4} className="h-full">
              <div className="group relative rounded-[2.5rem] overflow-hidden h-full min-h-[400px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-700 ease-out cursor-pointer">
                <Image src="/dark_niche.png" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" alt="дверь в нишу" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700"></div>
              </div>
            </RevealOnScroll>

          </div>
        </section>

        {/* ============================================ */}
        {/* блок 5. FAQ                                  */}
        {/* ============================================ */}
        <FAQ />

      </main>

      {/* Footer */}
      <footer className="bg-transparent py-12 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-white font-sans font-bold tracking-tight text-xs">d</div>
              <span className="font-sans font-semibold tracking-tight text-slate-900 ">dwgglass</span>
            </div>
            <div className="flex items-center gap-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-slate-900 transition-colors ">оферта</a>
            </div>
            <p className="text-slate-400 text-xs ">© 2026</p>
          </div>
        </div>
      </footer>

      {/* STICKY CTA */}
      <StickyCTA />
    </AuroraBackground>
  );
}
