const sections=[...document.querySelectorAll('main section[id]')];
const nav=[...document.querySelectorAll('.topbar nav a')];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    nav.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));
  });
},{rootMargin:'-30% 0px -60%'});
sections.forEach(s=>observer.observe(s));
