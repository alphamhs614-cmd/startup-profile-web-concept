const $=s=>document.querySelector(s);let lang='en';
function setLang(l){lang=l;document.documentElement.lang=l;document.documentElement.dir=l=='ar'?'rtl':'ltr';
document.querySelectorAll('[data-en]').forEach(e=>e.textContent=e.dataset[l]);
document.querySelectorAll('[data-ph-en]').forEach(e=>e.placeholder=l=='ar'?e.dataset.phAr:e.dataset.phEn);
$('#lang').textContent=l=='ar'?'English':'العربية'}
$('#lang').onclick=()=>setLang(lang=='en'?'ar':'en');
$('#burger').onclick=()=>$('#nav').classList.toggle('open');document.querySelectorAll('.nav a').forEach(a=>a.onclick=()=>$('#nav').classList.remove('open'));
$('#printBtn').onclick=()=>window.print();
$('#form').onsubmit=e=>{e.preventDefault();$('#ok').hidden=false};
const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;const el=en.target,to=+el.dataset.to;let n=0;const t=setInterval(()=>{n+=Math.max(1,Math.ceil(to/30));if(n>=to){n=to;clearInterval(t)}el.textContent=n},30);io.unobserve(el)}));
document.querySelectorAll('.num').forEach(n=>io.observe(n));
