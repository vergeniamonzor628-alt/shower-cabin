const fs = require('fs');

const pagePath = 'src/app/page.tsx';
let page = fs.readFileSync(pagePath, 'utf8');

// Clean up duplicate font weights
page = page.replace(/font-sans font-medium tracking-tight font-bold/g, 'font-sans font-bold tracking-tight');
page = page.replace(/font-sans font-medium tracking-tight font-semibold/g, 'font-sans font-semibold tracking-tight');

// The hero text currently looks something like: text-5xl lg:text-7xl font-sans font-medium tracking-tight
// Let's just find "Стекло для душевых" and replace its className
page = page.replace(/className="text-5xl lg:text-7xl.*?text-\[#2d2c2b\]/g, 'className="text-5xl lg:text-7xl font-sans font-medium tracking-tighter text-white');
page = page.replace(/text-\[#2d2c2b\]\/90/g, 'text-white/90'); // Subtitle in hero

// Remove tilt from TiltCard, or make cards flat
page = page.replace(/bg-white\/80/g, 'bg-white'); // Solid white cards
page = page.replace(/bg-white\/90/g, 'bg-white'); // Solid white header

fs.writeFileSync(pagePath, page);

console.log('Hero and classes cleaned up.');
