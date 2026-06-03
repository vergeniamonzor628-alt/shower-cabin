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
          
          <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
            Проектирование по стандартам ГОСТ
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-[4.5rem] font-serif text-white leading-[1.1] mb-8 tracking-tight">
            Сэкономьте до 50 000 ₽ на <br className="hidden md:block"/>
            <span className="text-primary italic font-light">премиальной душевой.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Получите точный инженерный чертеж (PDF + DWG) для заказа стекла напрямую на заводе всего за 1 500 ₽. Никаких переплат салонам сантехники — соберите кабину мечты по цене комплектующих.
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
      <section className="py-32 bg-black/60 backdrop-blur-[2px] relative z-10 border-border/40 overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in-up">
            <div className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Рынок против вас</div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-[1.2]">
              Зачем переплачивать 300% <span className="italic text-white/50">салонам сантехники?</span>
            </h2>
            
            <p className="text-white/60 leading-relaxed text-lg font-light mb-12">
              Решили заказать стекло напрямую и сэкономить? Завод не примет заказ &quot;на пальцах&quot;. Им нужны координаты отверстий под петли и учет технологических зазоров (2-3 мм). Ошибетесь на миллиметр — стекло не влезет в нишу, а каленое стекло <strong className="text-white font-semibold">нельзя подрезать</strong>. Доверьте расчет инженерам.
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <li className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-white/80 font-medium">Никаких наценок за &quot;премиум бренд&quot;</span>
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

      {/* Proof (Было / Стало) Section */}
      <section className="py-24 bg-black/60 backdrop-blur-[2px] relative border-t border-border/40 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Как должен выглядеть заказ</h2>
            <p className="text-white/60 text-lg font-light">
              Чтобы вас поняли на производстве и сделали всё без ошибок
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-5xl mx-auto">
            {/* Было */}
            <div className="flex-1 bg-white/5 border border-red-500/20 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50" />
              <div>
                <div className="text-red-400 font-medium mb-6 uppercase tracking-wider text-sm">❌ Рисунок от руки</div>
                <h3 className="text-2xl text-white mb-4">Отказ на заводе</h3>
                <p className="text-white/50 font-light leading-relaxed">
                  С эскизом &quot;на коленке&quot; завод откажет в производстве или снимет с себя ответственность за любые ошибки. Без указания зазоров, отступов под петли и фасок стекло будет испорчено.
                </p>
              </div>
              <div className="mt-8 h-48 bg-black/40 rounded-xl border border-white/10 flex items-center justify-center">
                <span className="text-white/20">Место для фото листка в клетку</span>
              </div>
            </div>

            {/* Стало */}
            <div className="flex-1 bg-primary/10 border border-primary/30 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <div>
                <div className="text-primary font-medium mb-6 uppercase tracking-wider text-sm">✅ CAD-чертеж</div>
                <h3 className="text-2xl text-white mb-4">Идеальная посадка</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Наш инженерный чертеж гарантирует, что стекло встанет в ванную с точностью до миллиметра, а фурнитура закрепится без люфтов и перекосов. Завод примет такой файл в работу за 5 минут.
                </p>
              </div>
              <div className="mt-8 h-48 relative overflow-hidden rounded-xl border border-primary/20">
                <Image src="/hero_blueprint_shower_1780488146668.png" alt="CAD-чертеж" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Method (How it works) */}
      <section id="how-it-works" className="py-32 bg-black/60 backdrop-blur-[2px] relative border-border/40 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <div className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Процесс работы</div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Как мы ломаем систему</h2>
            <p className="text-white/60 text-lg font-light">
              Мы превращаем сложный процесс заказа индивидуальной кабины в три простых и абсолютно прозрачных шага.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Step 1 - Bento (col-span-8) */}
            <div className="md:col-span-8 group bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors flex flex-col md:flex-row relative">
              <div className="p-10 md:w-1/2 z-10 flex flex-col justify-center">
                <div className="text-white/20 font-serif text-7xl mb-6 group-hover:text-primary/40 transition-colors">01</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Вы снимаете размеры</h3>
                <p className="text-white/50 leading-relaxed font-light">
                  Используйте нашу простую видеоинструкцию. Вам понадобится только рулетка и 10 минут времени. Никаких специальных навыков не требуется.
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
                <h3 className="text-2xl font-semibold text-white mb-4">Мы делаем проект</h3>
                <p className="text-white/70 leading-relaxed font-light mb-6">
                  Наши инженеры создают точный CAD-чертеж с допусками и спецификацией.
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
                <h3 className="text-2xl font-semibold text-white mb-4">Завод производит</h3>
                <p className="text-white/50 leading-relaxed font-light">
                  Вы отправляете готовый PDF-чертеж на ближайший стекольный завод. Они производят стекло в точности по инженерному чертежу. Никаких переплат салонам сантехники — только прямая работа с производством.
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
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight">Спроектируйте свою кабину</h2>
            <p className="text-white/60 text-lg font-light">
              Выберите базовую форму, чтобы запустить процесс проектирования. 
              Каждая кабина будет адаптирована инженерами под ваши точные размеры.
            </p>
          </div>
          
          <Configurator />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-black/60 backdrop-blur-[2px] relative z-10 border-t border-border/40">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <div className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Отзывы</div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Реальный опыт заказчиков</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative">
              <div className="text-primary text-4xl font-serif absolute top-6 left-6 opacity-20">&quot;</div>
              <p className="text-white/80 font-light leading-relaxed mb-6 relative z-10 pt-4">
                Чертеж окупился в первый же день! Салон посчитал мне душевую в нишу на 85 000 рублей. Заказал чертеж за полторы, отправил файл на ближайший завод и забрал каленое стекло за 18 000 руб. Итого экономия космическая, а встало всё идеально.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/50 font-medium">АМ</div>
                <div>
                  <div className="text-white font-medium">Алексей М.</div>
                  <div className="text-white/40 text-sm">Частный заказчик</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative">
              <div className="text-primary text-4xl font-serif absolute top-6 left-6 opacity-20">&quot;</div>
              <p className="text-white/80 font-light leading-relaxed mb-6 relative z-10 pt-4">
                Быстро получил точные чертежи и инструкции по вырезам. Очень удобно, что сразу выдают DWG файл для станка ЧПУ — на производстве даже вопросов не задали, просто загрузили файл в станок. Геометрия сошлась до миллиметра.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/50 font-medium">ВК</div>
                <div>
                  <div className="text-white font-medium">Виктор К.</div>
                  <div className="text-white/40 text-sm">Прораб</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-background relative z-10 border-t border-border/40">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <div className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Тарифы</div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Стоимость проектирования</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white/5 border border-white/10 hover:border-white/20 transition-colors rounded-3xl p-10 flex flex-col">
              <h3 className="text-2xl text-white font-medium mb-2">Базовый проект</h3>
              <div className="text-4xl text-white font-serif mb-6">1 500 ₽</div>
              <p className="text-white/50 font-light mb-8 h-12">
                Для стандартных кабин: прямые, в нишу, Г-образные угловые.
              </p>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start gap-3 text-white/80 font-light">
                  <span className="text-primary mt-1">✓</span> Проектирование по вашим размерам
                </li>
                <li className="flex items-start gap-3 text-white/80 font-light">
                  <span className="text-primary mt-1">✓</span> Зазоры под петли и ручку
                </li>
                <li className="flex items-start gap-3 text-white/80 font-light">
                  <span className="text-primary mt-1">✓</span> Экспорт в <strong className="font-medium text-white">PDF</strong> для завода
                </li>
              </ul>
              <a href="#configurator" className="w-full py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-colors text-center inline-block">
                Заказать
              </a>
            </div>

            {/* Premium Plan */}
            <div className="bg-primary/10 border border-primary/30 hover:border-primary/50 transition-colors rounded-3xl p-10 flex flex-col relative overflow-hidden">
              <div className="absolute top-6 right-6 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Популярный
              </div>
              <h3 className="text-2xl text-white font-medium mb-2">Сложная геометрия</h3>
              <div className="text-4xl text-white font-serif mb-6">3 500 ₽</div>
              <p className="text-white/50 font-light mb-8 h-12">
                Для сложных проектов: мансарды, вырезы под трубы, бортики и П-образные кабины.
              </p>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start gap-3 text-white/80 font-light">
                  <span className="text-primary mt-1">✓</span> Индивидуальные сложные вырезы
                </li>
                <li className="flex items-start gap-3 text-white/80 font-light">
                  <span className="text-primary mt-1">✓</span> Приоритетная поддержка инженера
                </li>
                <li className="flex items-start gap-3 text-white/80 font-light">
                  <span className="text-primary mt-1">✓</span> Экспорт в <strong className="font-medium text-white">PDF и DWG</strong> (для ЧПУ)
                </li>
              </ul>
              <a href="#configurator" className="w-full py-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)] text-center inline-block">
                Выбрать
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black/60 backdrop-blur-[2px] relative z-10 border-t border-border/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <div className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">FAQ</div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Остались сомнения?</h2>
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
