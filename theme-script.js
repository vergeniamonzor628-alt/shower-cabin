const fs = require('fs');
const files = ['src/app/page.tsx', 'src/components/Configurator.tsx', 'src/components/ApplicationBlankModal.tsx'];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/text-white\/60/g, 'text-slate-600');
  c = c.replace(/text-white\/80/g, 'text-slate-700');
  c = c.replace(/text-white\/90/g, 'text-slate-800');
  c = c.replace(/text-white\/50/g, 'text-slate-500');
  c = c.replace(/text-white\/40/g, 'text-slate-500');
  c = c.replace(/text-white\/30/g, 'text-slate-400');
  c = c.replace(/text-white/g, 'text-slate-900');
  c = c.replace(/bg-white\/5/g, 'bg-white/60');
  c = c.replace(/bg-white\/10/g, 'bg-white/80');
  c = c.replace(/border-white\/10/g, 'border-white/50');
  c = c.replace(/border-white\/5/g, 'border-slate-200/50');
  c = c.replace(/border-white\/20/g, 'border-slate-300');
  c = c.replace(/bg-black\/60/g, 'bg-white/40');
  c = c.replace(/bg-black\/80/g, 'bg-white/60');
  c = c.replace(/bg-black\/20/g, 'bg-slate-900/10');
  c = c.replace(/bg-black\/50/g, 'bg-white/60');
  c = c.replace(/from-black\/60/g, 'from-white/80');
  c = c.replace(/via-black\/20/g, 'via-white/40');
  c = c.replace(/to-black\/80/g, 'to-white/90');
  c = c.replace(/bg-background\/30/g, 'bg-white/30');
  fs.writeFileSync(f, c);
});
