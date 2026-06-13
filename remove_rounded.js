const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}

const files = walk('src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // replace all rounded-* EXCEPT rounded-full
  let newContent = content.replace(/rounded-(?:3xl|2xl|xl|lg|md|sm)/g, 'rounded-none')
                          .replace(/rounded-\[[^\]]+\]/g, 'rounded-none');
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated ' + file);
  }
});
