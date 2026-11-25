const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.nav-links a');

menuButton?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const revealTargets = document.querySelectorAll('.section-label, .about-grid, .capability-heading, .capability-card, .work-heading, .project, .experience-grid, .contact-content');
revealTargets.forEach((element) => element.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach((element) => revealObserver.observe(element));
document.getElementById('year').textContent = new Date().getFullYear();
