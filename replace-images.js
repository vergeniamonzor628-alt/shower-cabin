const fs = require('fs');

function replaceImages(file) {
  let c = fs.readFileSync(file, 'utf8');
  // Replacements for Configurator and ApplicationBlankModal (premium)
  c = c.replace(/\/images\/premium_corner_shower_\d+\.png/g, '/images/corner_shower_render.png');
  c = c.replace(/\/images\/premium_niche_shower_\d+\.png/g, '/images/niche_shower_render.png');
  c = c.replace(/\/images\/premium_walkin_shower_\d+\.png/g, '/images/walkin_shower_render.png');
  c = c.replace(/\/images\/premium_bath_screen_\d+\.png/g, '/images/bath_screen_render.png');

  // Replacements for Configurator (dark)
  c = c.replace(/\/images\/dark_corner_shower_\d+\.png/g, '/images/corner_shower_render.png');
  c = c.replace(/\/images\/dark_niche_shower_\d+\.png/g, '/images/niche_shower_render.png');
  c = c.replace(/\/images\/dark_walkin_shower_\d+\.png/g, '/images/walkin_shower_render.png');
  c = c.replace(/\/images\/dark_bath_screen_\d+\.png/g, '/images/bath_screen_render.png');
  c = c.replace(/\/images\/dark_ushape_shower_\d+\.png/g, '/images/niche_shower_render.png'); // fallback
  
  fs.writeFileSync(file, c);
}

replaceImages('src/components/Configurator.tsx');
replaceImages('src/components/ApplicationBlankModal.tsx');
