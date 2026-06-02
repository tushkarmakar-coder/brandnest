const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = dir + '/' + file;
    if (fs.statSync(name).isDirectory()) {
      if (!name.includes('node_modules') && !name.includes('.next')) {
        getFiles(name, files);
      }
    } else {
      if (name.endsWith('.ts') || name.endsWith('.tsx')) {
        files.push(name);
      }
    }
  }
  return files;
}

const allFiles = getFiles('.');
allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  content = content.replace(/https:\/\/wa\.me\/917894935653(\?text=[^"']*)?/g, 'mailto:brandnest.team@gmail.com');
  content = content.replace(/WhatsApp: 7894935653/g, 'Email: brandnest.team@gmail.com');
  content = content.replace(/\+91-?7894935653/g, 'brandnest.team@gmail.com');
  content = content.replace(/wa\.me\/917894935653/g, 'mailto:brandnest.team@gmail.com');
  content = content.replace(/917894935653/g, 'brandnest.team@gmail.com');
  content = content.replace(/💬 WhatsApp/g, '📧 Email Us');
  content = content.replace(/Message on WhatsApp/g, 'Email Us');
  content = content.replace(/7894935653/g, 'brandnest.team@gmail.com');
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
});
console.log('Done!');
