// Small interactivity: highlight current nav link
document.addEventListener('DOMContentLoaded', function(){
  const navLinks = document.querySelectorAll('.site-nav a');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(a => {
    if(a.getAttribute('href') === path) a.classList.add('active');
  });
});
