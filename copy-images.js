const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Katya\\.gemini\\antigravity-ide\\brain\\5671bf32-c715-49a0-8099-205570a9599f';
const publicDir = 'public/images';

const files = fs.readdirSync(brainDir);

const mappings = {
  'corner_shower_render': 'corner_shower_render.png',
  'niche_shower_render': 'niche_shower_render.png',
  'walkin_shower_render': 'walkin_shower_render.png',
  'bath_screen_render': 'bath_screen_render.png',
  'sketch_shower_exact': 'sketch_shower_bad.png',
  'cad_shower_notext': 'cad_shower_good.png'
};

for (const [prefix, destName] of Object.entries(mappings)) {
  const file = files.reverse().find(f => f.startsWith(prefix) && f.endsWith('.png'));
  if (file) {
    fs.copyFileSync(path.join(brainDir, file), path.join(publicDir, destName));
    console.log(`Copied ${file} to ${destName}`);
  } else {
    console.log(`Could not find file for ${prefix}`);
  }
}
