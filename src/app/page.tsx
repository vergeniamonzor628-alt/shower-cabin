import Image from "next/image";
import Configurator from "@/components/Configurator";
import { SmoothVideoLoop } from "@/components/ui/smooth-video-loop";
import StickyCTA from "@/components/StickyCTA";
import { Check, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TiltCard } from "@/components/ui/TiltCard";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 relative text-foreground">
      
      {/* ============================================ */}
      {/* HEADER                                       */}
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
            <a href="#how-it-works" className="hover:text-white transition-colors">Как это работает</a>
            <a href="#configurator" className="hover:text-white transition-colors">Конфигуратор</a>
            <a href="#comparison" className="hover:text-white transition-colors">Сравнение</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <AnimatedButton href="#configurator" variant="primary" shape="rounded" className="px-6 py-2.5 text-sm">
            Рассчитать проект
          </AnimatedButton>
        </div>
      </header>

      {/* ============================================ */}
      {/* БЛОК 1. HERO SECTION                         */}
      {/* ============================================ */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden border-b border-border/20">
        
        {/* Animated Video Background - No blur on the video! */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-background">
          <SmoothVideoLoop 
            src="/hero_video.mp4" 
            className="absolute inset-0 w-full h-full object-cover scale-[1.05]" 
            fadeDurationMs={3000} 
          />
          {/* Gradient overlay to make text readable but keep video clear */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 pointer-events-none"></div>
          
          {/* Soft background light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[150px] opacity-[0.05] pointer-events-none"></div>
        </div>

        <div className="mx-auto max-w-5xl px-6 relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 mt-20">
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
            Стеклянная душевая без наценок салонов сантехники. <br className="hidden md:block"/>
            <span className="italic font-light text-white/90">Платите только за заводское стекло.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
            Сделаем точный инженерный чертёж под вашу ванную за 24 часа. Закажите закаленное стекло напрямую у производителя и сэкономьте до 45 000 ₽.
          </p>

          <div className="flex flex-col items-center gap-10">
            <AnimatedButton href="#configurator" variant="primary" shape="oval" className="px-10 py-5 text-lg shadow-xl">
              Собрать свою душевую
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </AnimatedButton>
            
            {/* Плашки преимуществ */}
            <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 text-sm text-left mx-auto">
              <div className="flex flex-col gap-1 max-w-[220px] bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                <span className="flex items-center gap-2 font-medium text-white">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  Точность до 1 мм
                </span>
                <span className="text-white/60 text-xs pl-6 leading-relaxed">допуски по стандартам CAD.</span>
              </div>
              <div className="flex flex-col gap-1 max-w-[220px] bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                <span className="flex items-center gap-2 font-medium text-white">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  Готовый PDF
                </span>
                <span className="text-white/60 text-xs pl-6 leading-relaxed">примет в работу любой завод в РФ.</span>
              </div>
              <div className="flex flex-col gap-1 max-w-[220px] bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                <span className="flex items-center gap-2 font-medium text-white">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  Гарантия
                </span>
                <span className="text-white/60 text-xs pl-6 leading-relaxed">компенсируем убытки при ошибке в проекте.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* БЛОК 2. БЫЛО / СТАЛО (Proof)                 */}
      {/* ============================================ */}
      <section id="comparison-proof" className="py-24 bg-background relative z-10 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <RevealOnScroll className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight">Как должен выглядеть заказ, чтобы вас поняли на производстве</h2>
            <p className="text-white/60 text-lg font-light">Сравните, с чем клиенты приходят на завод, и с чем они уходят от нас.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* БЫЛО */}
            <RevealOnScroll delay={0.1}>
              <div className="bg-white/5 border border-red-500/20 rounded-[2rem] p-6 lg:p-8 backdrop-blur-xl relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 bg-red-500/10 text-red-400 px-6 py-2 rounded-bl-3xl font-medium text-sm border-b border-l border-red-500/20">Как не надо</div>
                <h3 className="text-2xl font-serif text-white mt-4 mb-6">Эскиз «на коленке»</h3>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 border border-white/5 grayscale-[50%] opacity-80">
                  <Image 
                    src="/images/comparison_before_1780651358593.png" 
                    alt="Рисунок от руки" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <p className="text-white/60 font-light leading-relaxed mt-auto">
                  С таким эскизом завод откажет в производстве или снимет с себя ответственность за ошибки. Никто не будет гадать, где сверлить отверстия.
                </p>
              </div>
            </RevealOnScroll>

            {/* СТАЛО */}
            <RevealOnScroll delay={0.2}>
              <div className="bg-gradient-to-b from-primary/10 to-white/5 border border-primary/20 rounded-[2rem] p-6 lg:p-8 backdrop-blur-xl relative overflow-hidden flex flex-col h-full shadow-2xl">
                <div className="absolute top-0 right-0 bg-primary text-white px-6 py-2 rounded-bl-3xl font-medium text-sm shadow-md">CAD-чертеж</div>
                <h3 className="text-2xl font-serif text-white mt-4 mb-6">Наш инженерный проект</h3>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-2xl border border-primary/20">
                  <Image 
                    src="/images/comparison_after_1780651369363.png" 
                    alt="CAD чертеж душевой" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="text-white/80 font-light leading-relaxed mt-auto">
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
      <section id="how-it-works" className="py-24 bg-background relative border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          
          <RevealOnScroll delay={0.1} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight">Всего 4 шага до идеальной душевой</h2>
            <p className="text-white/60 text-lg font-light">Это проще, чем кажется. Вы справитесь, даже если никогда не делали ремонт.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            
            {/* Шаг 1 */}
            <RevealOnScroll delay={0.1}>
              <div className="group h-full bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-500 backdrop-blur-xl shadow-lg hover:shadow-2xl flex flex-col overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] group-hover:bg-primary/20 transition-colors duration-500"></div>
                <div className="text-white/10 font-serif text-6xl mb-6 group-hover:text-primary/30 transition-colors duration-500 relative z-10">01</div>
                <h3 className="text-2xl font-serif text-white mb-4 relative z-10">Вы снимаете мерки</h3>
                <p className="text-white/60 leading-relaxed font-light mb-6 relative z-10">
                  Вам понадобится только обычная рулетка. Измеряете ширину и высоту будущей кабины по нашей инструкции.
                </p>
                <div className="mt-auto relative w-full h-32 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/20 transition-colors">
                  <Image src="/images/workspace_1_1780447199052.png" alt="Замеры" fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                </div>
              </div>
            </RevealOnScroll>

            {/* Шаг 2 */}
            <RevealOnScroll delay={0.2}>
              <div className="group h-full bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-500 backdrop-blur-xl shadow-lg hover:shadow-2xl flex flex-col overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] group-hover:bg-primary/20 transition-colors duration-500"></div>
                <div className="text-white/10 font-serif text-6xl mb-6 group-hover:text-primary/30 transition-colors duration-500 relative z-10">02</div>
                <h3 className="text-2xl font-serif text-white mb-4 relative z-10">Выбираете фурнитуру</h3>
                <p className="text-white/60 leading-relaxed font-light mb-6 relative z-10">
                  Прикрепите ссылки на петли и ручки с маркетплейсов — инженер сам рассчитает нужные вырезы.
                </p>
                <div className="mt-auto relative w-full h-32 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/20 transition-colors">
                  <Image src="/images/workspace_2_1780447209664.png" alt="Фурнитура" fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                </div>
              </div>
            </RevealOnScroll>

            {/* Шаг 3 */}
            <RevealOnScroll delay={0.3}>
              <div className="group h-full bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-500 backdrop-blur-xl shadow-lg hover:shadow-2xl flex flex-col overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] group-hover:bg-primary/20 transition-colors duration-500"></div>
                <div className="text-primary/20 font-serif text-6xl mb-6 group-hover:text-primary/40 transition-colors duration-500 relative z-10">03</div>
                <h3 className="text-2xl font-serif text-white mb-4 relative z-10">Мы чертим</h3>
                <p className="text-white/60 leading-relaxed font-light mb-6 relative z-10">
                  Переводим данные в профессиональный проект. Закладываем все зазоры и допуски для производства. Ровно за 24 часа.
                </p>
                <div className="mt-auto relative w-full h-32 rounded-xl overflow-hidden border border-primary/20 shadow-lg group-hover:shadow-2xl transition-shadow">
                  <Image src="/images/hero_blueprint_shower_1780488146668.png" alt="Чертеж" fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                </div>
              </div>
            </RevealOnScroll>

            {/* Шаг 4 */}
            <RevealOnScroll delay={0.4}>
              <div className="group h-full bg-gradient-to-b from-primary/10 to-white/5 border border-primary/20 rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-500 backdrop-blur-xl shadow-xl hover:shadow-2xl flex flex-col overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-white/10 font-serif text-6xl mb-6 group-hover:text-primary/30 transition-colors duration-500 relative z-10">04</div>
                <h3 className="text-2xl font-serif text-white mb-4 relative z-10">Завод производит</h3>
                <p className="text-white/80 leading-relaxed font-light mb-6 relative z-10">
                  Вы отправляете готовый PDF-файл на ближайший стекольный завод и забираете стекло по себестоимости.
                </p>
                <div className="mt-auto relative w-full h-32 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/20 transition-colors">
                  <Image src="/images/dark_niche_shower.png" alt="Готовая душевая" fill className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* БЛОК 4. ИНТЕРАКТИВНЫЙ КОНФИГУРАТОР           */}
      {/* ============================================ */}
      <section id="configurator" className="py-32 bg-background border-b border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <RevealOnScroll className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">Соберите свою душевую</h2>
          </RevealOnScroll>
          
          <Configurator />
        </div>
      </section>

      {/* ============================================ */}
      {/* БЛОК 5. СРАВНЕНИЕ ЦЕН (Доказательство)       */}
      {/* ============================================ */}
      <section id="comparison" className="py-24 bg-background relative z-10 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-tight">Оцените реальную выгоду</h2>
            <p className="text-white/50 text-lg font-light">Сравнение стоимости готовых кабин в салонах со стоимостью заказа стекла на заводе.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <RevealOnScroll delay={0.1}>
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl relative overflow-hidden">
                <h3 className="text-2xl font-serif text-white mb-2">Угловая кабина</h3>
                <p className="text-white/40 text-sm font-light mb-8">Стекло 8мм · 900×900</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-white/60">Цена в салоне:</span>
                    <span className="text-white/40 line-through text-lg">~ 55 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-white/90">Цена на заводе + наш чертеж:</span>
                    <span className="text-white font-medium text-lg">~ 14 000 ₽</span>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 flex justify-between items-center">
                  <span className="text-white font-medium">Ваша экономия:</span>
                  <span className="text-primary text-3xl font-bold font-serif">41 000 ₽</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Card 2 */}
            <RevealOnScroll delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl relative overflow-hidden">
                <h3 className="text-2xl font-serif text-white mb-2">Дверь в нишу</h3>
                <p className="text-white/40 text-sm font-light mb-8">Стекло 8мм · 800×2000</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-white/60">Цена в салоне:</span>
                    <span className="text-white/40 line-through text-lg">~ 30 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-white/90">Цена на заводе + наш чертеж:</span>
                    <span className="text-white font-medium text-lg">~ 10 500 ₽</span>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 flex justify-between items-center">
                  <span className="text-white font-medium">Ваша экономия:</span>
                  <span className="text-primary text-3xl font-bold font-serif">19 500 ₽</span>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* БЛОК 6. ГАРАНТИИ                             */}
      {/* ============================================ */}
      <section className="py-24 bg-background relative z-10 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-tight">Инженерный контроль каждого проекта</h2>
          </RevealOnScroll>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RevealOnScroll delay={0.1} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center backdrop-blur-xl">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🛡️</span>
                </div>
                <div className="text-white text-xl font-serif mb-4">Финансовая гарантия</div>
                <div className="text-white/60 text-sm font-light leading-relaxed">
                  Если стекло не подойдет из-за нашей ошибки в чертеже, мы бесплатно переделаем проект и компенсируем ваши убытки на перевыпуск стекла.
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.2} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center backdrop-blur-xl">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">👨‍💻</span>
                </div>
                <div className="text-white text-xl font-serif mb-4">Защита от «кривых» замеров</div>
                <div className="text-white/60 text-sm font-light leading-relaxed">
                  Инженер проверяет ваши цифры на логичность. Если что-то не сходится — мы свяжемся с вами и поможем перепроверить.
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.3} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">⏳</span>
                </div>
                <div className="text-white text-xl font-serif mb-4">Без срыва сроков</div>
                <div className="text-white/60 text-sm font-light leading-relaxed">
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
      <section id="faq" className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-6 max-w-3xl">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-16 text-center tracking-tight">Вопросы и ответы</h2>
          </RevealOnScroll>
          
          <div className="space-y-4">
            <RevealOnScroll delay={0.1}>
              <details className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer marker:content-[''] backdrop-blur-xl">
                <summary className="flex items-center justify-between text-lg font-medium text-white outline-none">
                  Что, если я измерю неправильно?
                  <svg className="w-5 h-5 text-white/40 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="pt-4 text-white/60 font-light leading-relaxed">
                  Мы страхуем вас от этого. Перед тем как делать чертёж, наш инженер проверяет ваши замеры на возможные перекосы. А если ошибка произойдет по вине нашего чертежа — мы вернем деньги за проект и компенсируем стоимость стекла.
                </p>
              </details>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <details className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer marker:content-[''] backdrop-blur-xl">
                <summary className="flex items-center justify-between text-lg font-medium text-white outline-none">
                  Где мне заказать само стекло?
                  <svg className="w-5 h-5 text-white/40 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="pt-4 text-white/60 font-light leading-relaxed">
                  Практически в любом городе есть заводы или крупные фабрики по обработке стекла. Вы просто отправляете им наш PDF-файл в мессенджер или на почту — он составлен по ГОСТам производства, им всё будет абсолютно понятно.
                </p>
              </details>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <details className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer marker:content-[''] backdrop-blur-xl">
                <summary className="flex items-center justify-between text-lg font-medium text-white outline-none">
                  А что делать с фурнитурой? Где брать петли и ручки?
                  <svg className="w-5 h-5 text-white/40 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="pt-4 text-white/60 font-light leading-relaxed">
                  Вы можете купить их в любом строительном гипермаркете (Леруа Мерлен) или заказать на Ozon/Wildberries. В конфигураторе выше вы просто прикрепляете ссылки на то, что вам понравилось, а мы делаем точные вырезы в стекле именно под вашу фурнитуру.
                </p>
              </details>
            </RevealOnScroll>
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
      {/* STICKY CTA                                   */}
      {/* ============================================ */}
      <StickyCTA />
    </main>
  );
}
