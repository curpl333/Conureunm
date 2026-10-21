// Run:  node generate-manifest.js
// Scans MMV/, MD/ and gd/ and writes manifest.js so the site knows which files exist.
const fs=require('fs'),path=require('path');
const media=/\.(mp4|webm|mov|m4v|ogv|jpe?g|png|gif|webp|avif|svg)$/i;
const out={};
for(const f of ['MMV','MD','gd']){
  const dir=path.join(__dirname,f);
  out[f]=fs.existsSync(dir)?fs.readdirSync(dir).filter(n=>media.test(n)).sort():[];
}
fs.writeFileSync(path.join(__dirname,'manifest.js'),'window.PORTFOLIO_MEDIA='+JSON.stringify(out,null,1)+';\n');
console.log('manifest.js updated:',Object.entries(out).map(([k,v])=>k+'='+v.length).join(', '));
