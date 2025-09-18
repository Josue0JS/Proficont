document.addEventListener('DOMContentLoaded', () => {
  const hiddenElements = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target); // aparece solo una vez
      }
    });
  }, { threshold: 0.2 });

  hiddenElements.forEach(el => observer.observe(el));
});

