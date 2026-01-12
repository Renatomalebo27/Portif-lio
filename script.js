// Ajusta o ano no rodapé e adiciona handlers simples
document.addEventListener('DOMContentLoaded',()=>{
  const y=document.getElementById('year');
  if(y) y.textContent=new Date().getFullYear();

  // smooth scroll para anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el=document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // validação simples do formulário
  const form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const name=form.elements['name'].value.trim();
      const email=form.elements['email'].value.trim();
      const message=form.elements['message'].value.trim();
      if(!name||!email||!message){
        alert('Por favor, preencha todos os campos.');
        return;
      }
      // ação simples: abrir email
      const subject=encodeURIComponent('Contato via portfólio — '+name);
      const body=encodeURIComponent(message+'\n\n'+'Email: '+email);
      window.location.href=`mailto:seu@email.com?subject=${subject}&body=${body}`;
    });
  }
});
