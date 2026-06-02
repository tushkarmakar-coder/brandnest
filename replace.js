const fs = require('fs');
const files = [
  'lib/blog.ts', 
  'components/ConsultationSection.tsx', 
  'components/FloatingWhatsApp.tsx', 
  'components/Footer.tsx', 
  'components/HeroThree.tsx', 
  'components/Navbar.tsx', 
  'components/WhatsAppFloat.tsx', 
  'app/[locale]/layout.tsx', 
  'app/[locale]/page.tsx',
  'app/api/contact/route.ts'
];
files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/https:\/\/wa\.me\/917894935653(\?text=[^"']*)?/g, 'mailto:brandnest.team@gmail.com');
  content = content.replace(/WhatsApp: 7894935653/g, 'Email: brandnest.team@gmail.com');
  content = content.replace(/\+91-?7894935653/g, 'brandnest.team@gmail.com');
  content = content.replace(/wa\.me\/917894935653/g, 'mailto:brandnest.team@gmail.com');
  content = content.replace(/917894935653/g, 'brandnest.team@gmail.com');
  content = content.replace(/💬 WhatsApp/g, '📧 Email Us');
  content = content.replace(/Message on WhatsApp/g, 'Email Us');
  content = content.replace(/7894935653/g, 'brandnest.team@gmail.com');
  fs.writeFileSync(file, content, 'utf8');
});
console.log('Done!');
