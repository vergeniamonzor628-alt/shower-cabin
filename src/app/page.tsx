import Image from "next/image";
import Configurator from "@/components/Configurator";
import { Check } from "lucide-react";

export const metadata = {
  title: "Индивидуальные душевые кабины на заказ | Проект за 2 минуты",
  description: "Избавьтесь от протечек и компромиссов. Спроектируйте стеклянную душевую кабину по вашим размерам с премиальной фурнитурой. Начните прямо сейчас.",
};

export default function LandingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Сколько времени занимает подготовка чертежа?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Чертеж и техническое задание формируются моментально после заполнения размеров и оплаты в конфигураторе."
        }
      },
      {
        "@type": "Question",
        "name": "Какие размеры мне нужно знать?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для большинства кабин достаточно знать ширину и высоту проема или поддона. В конфигураторе есть подсказки для каждого типа кабины."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-violet-500/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold tracking-tighter text-white">AquaGlass</div>
          <div className="hidden space-x-6 text-sm font-medium text-gray-300 md:flex">
            <a href="#problem" className="hover:text-white transition-colors">Почему мы</a>
            <a href="#features" className="hover:text-white transition-colors">Преимущества</a>
            <a href="#configurator" className="hover:text-white transition-colors">Конструктор</a>
          </div>
          <a href="#configurator" className="rounded-full bg-violet-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-violet-500">
            Рассчитать проект
          </a>
        </div>
      </nav>

      {/* Hero Section (PAS Framework - Dark SaaS) */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-transparent" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        
        <div className="relative z-10 max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300 animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            Быстро. Точно. Без переплат за замерщиков.
          </div>
          
          {/* Problem */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl animate-fade-in delay-100">
            Устали от стандартных кабин,<br />
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              которые текут и ломаются?
            </span>
          </h1>
          
          {/* Agitate */}
          <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-400 animate-fade-in delay-200">
            Каждый миллиметр в ванной на счету. Покупка готовой кабины в магазине — это всегда компромисс. 
            Пластиковые ролики заедают, акрил желтеет, а вода постоянно протекает на пол. 
            Ваша ванная заслуживает надежного стекла премиум-класса, созданного точно по вашим размерам.
          </p>
          
          {/* Solution & CTA */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in delay-300">
            <a href="#configurator" className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-8 py-4 text-lg font-medium text-white transition hover:bg-violet-500 hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)]">
              Спроектировать идеальную кабину →
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500 animate-fade-in delay-500">Готовый чертеж для производства за 2 минуты · Без визита замерщика</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-5xl">Почему индивидуальный проект лучше?</h2>
            <p className="mt-4 text-gray-400 text-lg">Вы получаете документацию, с которой любое стекольное производство сделает идеальную кабину.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Экономия до 40%", desc: "Заказывая стекло напрямую на производстве с нашим чертежом, вы минуете наценки салонов сантехники." },
              { title: "Миллиметровая точность", desc: "Учитываем уклон стен и подиума. Кабина встанет идеально ровно, никаких толстых слоев герметика." },
              { title: "Свобода фурнитуры", desc: "Выбирайте премиальные петли и ручки любого цвета: от черного матового до брашированного золота." }
            ].map((feature, i) => (
              <div key={i} className="rounded-2xl border border-gray-800 bg-gray-900 p-8 hover:border-gray-700 transition-colors">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Check size={24} />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurator Section */}
      <section id="configurator" className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950" />
        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-5xl mb-4">Создайте свой проект</h2>
            <p className="text-xl text-gray-400">Пройдите 3 простых шага, чтобы получить профессиональное ТЗ.</p>
          </div>
          <Configurator />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950 py-12">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-white mb-4 md:mb-0">AquaGlass</div>
          <p className="text-gray-500">© 2026 AquaGlass. Проектирование индивидуальных душевых конструкций.</p>
        </div>
      </footer>
    </div>
  );
}
