// Small interactivity: highlight current nav link
document.addEventListener('DOMContentLoaded', function(){
  const navLinks = document.querySelectorAll('.site-nav a');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(a => {
    if(a.getAttribute('href') === path) a.classList.add('active');
  });
  
  // Reveal animations for timeline items and cards (respect prefers-reduced-motion)
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll('.timeline-item, .card');

  if (prefersReduced) {
    revealTargets.forEach(el => el.classList.add('in-view'));
    return;
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, {threshold: 0.12});

    revealTargets.forEach(el => io.observe(el));
  } else {
    // fallback
    revealTargets.forEach(el => el.classList.add('in-view'));
  }
});
