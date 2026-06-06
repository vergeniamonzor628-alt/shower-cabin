const fs = require('fs');

const pagePath = 'src/app/page.tsx';
const confPath = 'src/components/Configurator.tsx';
const globalsPath = 'src/app/globals.css';

// 1. Update globals.css colors
let globals = fs.readFileSync(globalsPath, 'utf8');
globals = globals.replace(/--background:.*?;/g, '--background: #f3f2f0;');
globals = globals.replace(/--foreground:.*?;/g, '--foreground: #2d2c2b;');
globals = globals.replace(/--primary:.*?;/g, '--primary: #2d2c2b;');
globals = globals.replace(/--card:.*?;/g, '--card: #ffffff;');
globals = globals.replace(/--border:.*?;/g, '--border: #e2e0db;');
fs.writeFileSync(globalsPath, globals);

// 2. Update page.tsx
let page = fs.readFileSync(pagePath, 'utf8');
// Remove italics
page = page.replace(/italic/g, '');
// Change serif to sans
page = page.replace(/font-serif/g, 'font-sans font-medium tracking-tight');
// Make hero text white
page = page.replace(/className="text-4xl md:text-6xl font-sans font-medium tracking-tight font-bold text-slate-900/g, 'className="text-4xl md:text-6xl font-sans font-medium tracking-tighter text-white');
page = page.replace(/text-slate-800/g, 'text-slate-600');
page = page.replace(/text-slate-900/g, 'text-[#2d2c2b]');
// Flatten the UI: remove rounded corners, drop shadows, borders
page = page.replace(/rounded-3xl|rounded-2xl|rounded-xl/g, 'rounded-none');
page = page.replace(/shadow-2xl|shadow-xl|shadow-lg|shadow-md/g, 'shadow-none');
page = page.replace(/border-slate-200\/500|border-primary\/20|border-white\/20/g, 'border-[#e2e0db]');
page = page.replace(/backdrop-blur-md/g, 'bg-white/90');
// For the hero specifically, let's just make sure text-white is used where needed.
// It might be easier to just manually patch the hero if regex fails.
fs.writeFileSync(pagePath, page);

// 3. Update Configurator.tsx
let conf = fs.readFileSync(confPath, 'utf8');
conf = conf.replace(/italic/g, '');
conf = conf.replace(/font-serif/g, 'font-sans font-medium tracking-tight');
conf = conf.replace(/rounded-3xl|rounded-2xl|rounded-xl/g, 'rounded-none');
conf = conf.replace(/shadow-2xl|shadow-xl|shadow-lg|shadow-md/g, 'shadow-none');
conf = conf.replace(/border-slate-200\/500|border-primary\/20/g, 'border-[#e2e0db]');
conf = conf.replace(/text-slate-900/g, 'text-[#2d2c2b]');
conf = conf.replace(/text-slate-800/g, 'text-slate-600');
fs.writeFileSync(confPath, conf);

console.log('Styles updated!');
