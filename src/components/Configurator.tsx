"use client";

import { useState } from 'react';
import { Check, ChevronRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const CABIN_TYPES = [
  { id: 'corner', name: 'Угловая кабина', img: '/corner_shower_1780265656983.png' },
  { id: 'niche', name: 'В нишу', img: '/niche_shower_1780265669912.png' },
  { id: 'walk_in', name: 'Свободный вход', img: '/walk_in_shower_1780265683414.png' },
  { id: 'u_shape', name: 'П-образная', img: '/u_shaped_shower_1780265694488.png' },
  { id: 'bath', name: 'Шторка на ванну', img: '/bath_screen_1780265707096.png' }
];

export default function Configurator() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const [cabinType, setCabinType] = useState('');
  const [dimensions, setDimensions] = useState({ width: '', height: '', depth: '', notes: '' });
  const [contacts, setContacts] = useState({ name: '', phone: '', email: '' });

  const handleNext = () => setStep(prev => Math.min(prev + 1, 4));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const submitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('/api/submit-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cabinType, dimensions, contacts })
      });
      if (res.ok) setStep(4);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-gray-800 bg-gray-950/50 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col min-h-[600px]">
      
      {/* Progress */}
      {step < 4 && (
        <div className="border-b border-gray-800 p-6 flex items-center justify-between bg-gray-900/50">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                  step >= i ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]' : 'bg-gray-800 text-gray-500'
                }`}>
                  {step > i ? <Check size={18} /> : i}
                </div>
                {i < 3 && <div className={`h-1 w-8 sm:w-16 mx-2 rounded-full transition-colors ${step > i ? 'bg-violet-600' : 'bg-gray-800'}`} />}
              </div>
            ))}
          </div>
          <span className="text-gray-400 font-medium hidden sm:block">Шаг {step} из 3</span>
        </div>
      )}

      {/* Content */}
      <div className="flex-grow p-8">
        
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="mb-8 text-2xl font-bold text-center">Выберите конструкцию</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CABIN_TYPES.map(type => (
                <div 
                  key={type.id}
                  onClick={() => setCabinType(type.name)}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-4 transition-all hover:scale-[1.02] ${
                    cabinType === type.name 
                      ? 'border-violet-500 bg-violet-950/30 ring-2 ring-violet-500/50' 
                      : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'
                  }`}
                >
                  <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4 bg-gray-800">
                    <Image src={type.img} alt={type.name} fill className="object-cover transition-transform group-hover:scale-110" priority />
                  </div>
                  <div className="text-lg font-semibold text-center">{type.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
             <h3 className="mb-8 text-2xl font-bold">Укажите размеры проема</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Ширина (мм)</label>
                  <input type="number" className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors" value={dimensions.width} onChange={e => setDimensions({...dimensions, width: e.target.value})} placeholder="900" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Глубина (мм)</label>
                  <input type="number" className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors" value={dimensions.depth} onChange={e => setDimensions({...dimensions, depth: e.target.value})} placeholder="900 (если есть)" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-300">Высота (мм)</label>
                  <input type="number" className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors" value={dimensions.height} onChange={e => setDimensions({...dimensions, height: e.target.value})} placeholder="Стандарт: 2000" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-300">Ссылки на фурнитуру или комментарии</label>
                  <textarea className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors min-h-[120px]" value={dimensions.notes} onChange={e => setDimensions({...dimensions, notes: e.target.value})} placeholder="Например: хочу черные матовые петли..."></textarea>
                </div>
             </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-xl mx-auto">
            <h3 className="mb-8 text-2xl font-bold text-center">Контакты для отправки ТЗ</h3>
            <form id="orderForm" onSubmit={submitOrder} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Ваше имя</label>
                <input type="text" required className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" value={contacts.name} onChange={e => setContacts({...contacts, name: e.target.value})} placeholder="Иван" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Телефон</label>
                <input type="tel" required className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" value={contacts.phone} onChange={e => setContacts({...contacts, phone: e.target.value})} placeholder="+7 (999) 000-00-00" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Telegram (чтобы мы прислали файл)</label>
                <input type="text" className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" value={contacts.email} onChange={e => setContacts({...contacts, email: e.target.value})} placeholder="@username" />
              </div>
            </form>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in zoom-in-95 duration-700 text-center py-12">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-violet-500/20 text-violet-500">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="mb-4 text-3xl font-bold">Проект сформирован!</h2>
            <p className="mx-auto mb-8 max-w-md text-lg text-gray-400">
              Мы подготовили точный чертеж и детализацию для производства. Остался один шаг.
            </p>
            
            <div className="mx-auto mb-8 max-w-sm rounded-2xl border border-gray-800 bg-gray-900 p-6 text-left shadow-xl">
               <div className="mb-4 flex justify-between items-center border-b border-gray-800 pb-4">
                 <span className="text-lg font-medium text-gray-300">Оплата чертежа:</span>
                 <span className="text-2xl font-bold text-violet-400">1 500 ₽</span>
               </div>
               <p className="mb-2 text-sm text-gray-400">Перевод по СБП (Сбербанк, Альфа):</p>
               <p className="mb-1 text-xl font-mono tracking-wider text-white">+7 900 123-45-67</p>
               <p className="text-sm text-gray-500">Получатель: Иван И.</p>
            </div>

            <a href="https://wa.me/79001234567?text=Привет,%20оплатил(а)%20чертеж." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-medium text-white transition hover:bg-green-500 shadow-lg shadow-green-600/20">
              Отправить чек в WhatsApp →
            </a>
          </div>
        )}

      </div>

      {/* Footer Navigation */}
      {step < 4 && (
        <div className="border-t border-gray-800 bg-gray-900/50 p-6 flex justify-between">
          <button 
            onClick={handleBack}
            className={`rounded-xl px-6 py-3 font-medium transition-colors ${step > 1 ? 'bg-gray-800 text-white hover:bg-gray-700' : 'invisible'}`}
          >
            Назад
          </button>
          
          {step < 3 ? (
            <button 
              onClick={handleNext} 
              disabled={step === 1 && !cabinType}
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-3 font-medium text-white transition-all hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Далее <ChevronRight size={18} />
            </button>
          ) : (
            <button 
              type="submit" 
              form="orderForm" 
              disabled={loading}
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-3 font-medium text-white transition-all hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Формируем...' : 'Получить чертеж'}
            </button>
          )}
        </div>
      )}

    </div>
  );
}
