"use client";

import Image from "next/image";
import Configurator from "@/components/Configurator";
import { 
  CheckCircle2, 
  Ruler, 
  FileText, 
  Wrench, 
  ChevronRight, 
  AlertTriangle,
  FileCheck2,
  XCircle,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToConfigurator = () => {
    const el = document.getElementById('configurator');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      q: "А что если завод сделает стекло по вашему чертежу, а оно не влезет?",
      a: "Если ошибка в нашем чертеже (неверно рассчитан зазор под петлю) — мы бесплатно переделываем чертеж и компенсируем вам затраты. Если вы неверно сняли размеры помещения — ответственность на вас. Посмотрите нашу инструкцию по замерам в форме ниже!"
    },
    {
      q: "Я еще не купил фурнитуру, можно заказать чертеж?",
      a: "Да, но производство стекла начнется только после того, как вы определитесь с петлями. Разные петли требуют разных вырезов в стекле. Вы можете прислать ссылки на фурнитуру позже напрямую нашему инженеру."
    },
    {
      q: "Зачем мне ваш чертеж, если в магазине готовая кабина стоит 30 000 руб?",
      a: "В магазине за эти деньги вы получите тонкое стекло (4-6 мм), пластиковые ролики и стандартный размер. За те же деньги, заказав стекло 8 мм на заводе по нашему чертежу, вы соберете премиальную кабину, которая в салоне стоила бы от 80 000 руб."
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-gray-100 font-sans selection:bg-violet-500/30">
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#09090b]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white font-bold">A</div>
            <span className="text-xl font-bold tracking-tight">AquaDraft</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
            <a href="#how-it-works" className="hover:text-white transition">Как это работает</a>
            <a href="#proof" className="hover:text-white transition">До/После</a>
            <a href="#faq" className="hover:text-white transition">Вопросы</a>
          </div>
          <button onClick={scrollToConfigurator} className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-200">
            Рассчитать проект
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-violet-600/20 blur-[128px]" />
        <div className="absolute top-32 -left-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-[128px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 mb-8 text-sm font-medium text-violet-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            Готовый CAD-чертеж за 24 часа
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl mb-8 leading-tight">
            Сэкономьте до 50 000 ₽ <br className="hidden sm:block"/>на душевой кабине уже завтра
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 mb-10 leading-relaxed">
            Никаких переплат салонам сантехники. Вы снимаете размеры — мы делаем <span className="text-gray-200 font-semibold">точный инженерный чертеж</span>, с которым любое стекольное производство изготовит идеальную кабину.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={scrollToConfigurator} className="w-full sm:w-auto rounded-xl bg-violet-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] flex items-center justify-center gap-2">
              Создать чертеж моей кабины <ChevronRight size={20} />
            </button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1"><CheckCircle2 size={16} className="text-emerald-500"/> Подходит для любого завода РФ</div>
            <div className="flex items-center gap-1"><CheckCircle2 size={16} className="text-emerald-500"/> Стоимость всего 1500 ₽</div>
          </div>
        </div>
      </section>

      {/* Problem Section (PAS) */}
      <section className="py-24 bg-gray-900/50 border-y border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 mb-6">
                <AlertTriangle size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Решили заказать стекло напрямую и сэкономить?</h2>
              <div className="space-y-6 text-lg text-gray-400">
                <p>
                  Завод не примет заказ "на пальцах". На производстве никто не будет слушать <em>«мне стекло примерно метр на два»</em>.
                </p>
                <p>
                  Им нужны <strong className="text-gray-200">точные координаты сверления отверстий под петли</strong>, учет технологических зазоров (2-3 мм) и допусков. Ошибетесь на миллиметр — стекло не влезет в нишу, а каленое стекло <strong className="text-red-400">нельзя подрезать</strong>.
                </p>
                <div className="border-l-4 border-violet-500 pl-6 py-2 bg-gradient-to-r from-violet-500/10 to-transparent">
                  <p className="text-white font-medium">Решение: Доверьте расчет инженеру.</p>
                  <p className="text-sm mt-1">Вы даете нам габариты и ссылку на петли с Озона — мы выдаем профессиональную документацию, с которой вас с радостью примут на заводе.</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl border border-gray-800 bg-[#09090b] p-2 shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12 shadow-lg">
                Реальные требования заводов!
              </div>
              <div className="rounded-xl border border-gray-800 bg-gray-900 overflow-hidden">
                <div className="border-b border-gray-800 bg-gray-950 px-4 py-3 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="p-6">
                  <div className="h-4 w-1/3 bg-gray-800 rounded mb-4"></div>
                  <div className="space-y-2 mb-6">
                    <div className="h-3 w-full bg-gray-800 rounded"></div>
                    <div className="h-3 w-5/6 bg-gray-800 rounded"></div>
                  </div>
                  <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4">
                    <p className="text-sm text-red-200">
                      «Для заказа в производство необходимо предоставить <span className="font-bold bg-red-500/30 px-1 rounded">точный чертеж с допусками и вырезами</span> под фурнитуру. Эскизы от руки без указания зазоров не принимаются.»
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After (Proof) */}
      <section id="proof" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Как должен выглядеть заказ, чтобы вас поняли</h2>
            <p className="text-gray-400 text-lg">Разница между отказом завода и идеальным результатом.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="rounded-3xl border border-gray-800 bg-gray-900/50 p-8 relative overflow-hidden group">
              <div className="absolute top-6 right-6 flex items-center gap-2 text-red-400 bg-red-400/10 px-3 py-1 rounded-full text-sm font-bold z-10">
                <XCircle size={16} /> Отказ производства
              </div>
              <div className="relative h-[300px] w-full mb-6 opacity-60 grayscale filter contrast-125 mix-blend-screen bg-[url('/grid.svg')] bg-center border border-dashed border-gray-700 rounded-xl flex items-center justify-center">
                {/* Mockup of a bad drawing */}
                <div className="transform -rotate-6 text-center">
                  <div className="text-4xl font-writing text-gray-500 mb-2">Ширина 90 см</div>
                  <div className="w-32 h-48 border-4 border-gray-600 mx-auto rounded-sm relative">
                    <div className="absolute right-0 top-1/2 w-4 h-1 bg-gray-600"></div>
                  </div>
                  <div className="text-xl font-writing text-gray-500 mt-2">Высота примерно 2 метра</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Эскиз "на коленке"</h3>
              <p className="text-gray-400">С таким эскизом завод откажет в производстве или снимет с себя ответственность за любые ошибки и нестыковки.</p>
            </div>

            {/* After */}
            <div className="rounded-3xl border border-violet-500/30 bg-violet-950/10 p-8 relative overflow-hidden group">
              <div className="absolute top-6 right-6 flex items-center gap-2 text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full text-sm font-bold z-10">
                <FileCheck2 size={16} /> Примут на любом заводе
              </div>
              <div className="relative h-[300px] w-full mb-6 bg-gray-950 rounded-xl border border-gray-800 flex items-center justify-center shadow-2xl p-4">
                {/* Mockup of a professional CAD */}
                <div className="w-full h-full border border-violet-500/30 rounded p-4 relative flex flex-col">
                  <div className="flex justify-between border-b border-gray-800 pb-2 mb-4">
                    <div className="text-[10px] text-gray-500 font-mono">CAD-СИСТЕМА</div>
                    <div className="text-[10px] text-violet-400 font-mono">ТОЧНОСТЬ 0.1 ММ</div>
                  </div>
                  <div className="flex-1 flex items-center justify-center relative">
                    <div className="w-40 h-56 border-2 border-violet-500/50 bg-violet-500/5 rounded-sm relative">
                      {/* Technical lines */}
                      <div className="absolute -left-6 top-0 bottom-0 border-l border-gray-600 flex items-center"><span className="text-[10px] -rotate-90 -ml-2 text-gray-400">2000 мм</span></div>
                      <div className="absolute left-0 right-0 -top-6 border-t border-gray-600 flex justify-center"><span className="text-[10px] -mt-4 text-gray-400">900 мм</span></div>
                      {/* Hinge notches */}
                      <div className="absolute -right-1 top-10 w-2 h-4 border border-violet-400 bg-violet-400/20"></div>
                      <div className="absolute -right-1 bottom-10 w-2 h-4 border border-violet-400 bg-violet-400/20"></div>
                      {/* Detail callout */}
                      <div className="absolute top-8 -right-24 text-[8px] text-violet-300 font-mono border border-violet-500/30 bg-gray-900 p-1 rounded">Вырез под петлю<br/>R=3mm, D=14mm</div>
                      <svg className="absolute top-10 -right-2 w-20 h-px bg-violet-500/50"></svg>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Инженерный CAD-чертеж</h3>
              <p className="text-gray-400">Наш чертеж гарантирует, что стекло идеально встанет в вашу ванную, а фурнитура закрепится без люфтов.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-gray-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Путь к идеальной душевой за 4 простых шага</h2>
            <p className="text-gray-400 text-lg">Вам не нужно быть инженером — достаточно иметь рулетку.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <CheckCircle2 size={24}/>, title: "1. Выберите форму", desc: "Угловая, в нишу, П-образная или полностью нестандартная (свой вариант)." },
              { icon: <Ruler size={24}/>, title: "2. Введите габариты", desc: "Просто измерьте ширину и высоту вашей ниши обычной рулеткой." },
              { icon: <Wrench size={24}/>, title: "3. Укажите фурнитуру", desc: "Прикрепите ссылки на петли с маркетплейсов. Мы сами рассчитаем под них вырезы." },
              { icon: <FileText size={24}/>, title: "4. Получите чертеж", desc: "Через 24 часа готовый PDF-файл придет вам в Telegram. Отправляйте на завод!" }
            ].map((step, i) => (
              <div key={i} className="relative p-6 rounded-3xl border border-gray-800 bg-[#09090b] hover:border-violet-500/50 transition-colors group">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-800 text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurator Section */}
      <section id="configurator" className="py-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4">Сформируйте Техническое Задание</h2>
            <p className="text-gray-400 text-lg">Заполните форму ниже, и мы приступим к разработке вашего чертежа.</p>
          </div>
          
          <Configurator />
          
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 border-t border-gray-800 bg-[#09090b]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4 text-violet-500"><HelpCircle size={40}/></div>
            <h2 className="text-3xl font-bold">Остались вопросы?</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-800 rounded-2xl bg-gray-900/50 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-800/50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.q}</span>
                  <ChevronDown className={`transform transition-transform ${openFaq === i ? 'rotate-180 text-violet-400' : 'text-gray-500'}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-0 text-gray-400 leading-relaxed border-t border-gray-800/50 mt-2">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-[#09090b] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-violet-600 text-white text-xs font-bold">A</div>
            <span className="text-lg font-bold">AquaDraft</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2026. Сделано инженерами для людей.
          </div>
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition">Поддержка в Telegram</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
