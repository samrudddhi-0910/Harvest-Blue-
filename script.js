

document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll('nav ul.menu a');
  let path = window.location.pathname.split("/").pop();
  if(path === "") path = "index.html";
  links.forEach(a=>{
    if(a.getAttribute("href") === path) a.classList.add('active');
    else a.classList.remove('active');
  });

  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav ul.menu');
  if(toggle && menu){
    toggle.addEventListener('click', ()=> menu.classList.toggle('open'));
  }

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});

  document.querySelectorAll('.card, .project-item, .sdg-content, .how-right img').forEach(el=>{
    el.style.transform = 'translateY(20px)';
    el.style.opacity = '0';
    el.style.transition = 'all 600ms ease';
    observer.observe(el);
  });

  const form = document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Thanks — we received your message. We will reply soon.');
      form.reset();
    });
  }
});
