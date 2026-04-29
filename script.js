// ── PAGE LOAD ──────────────────────────────────
window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});

// ── HAMBURGER MENU ─────────────────────────────
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
}

// ── SCROLL FADE-IN ─────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── AUTO YEAR ──────────────────────────────────
document.querySelectorAll('[id^="year"]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
