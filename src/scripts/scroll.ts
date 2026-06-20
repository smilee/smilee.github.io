/**
 * Scroll-based animations using Intersection Observer
 */

export function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    // Make all elements visible immediately
    document.querySelectorAll('.reveal, .stagger').forEach((el) => {
      el.classList.add('visible');
    });
    return;
  }

  // Observer for reveal animations
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally unobserve after revealing
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  // Observe all reveal elements
  document.querySelectorAll('.reveal, .stagger').forEach((el) => {
    revealObserver.observe(el);
  });

  // Nav background on scroll
  const nav = document.getElementById('nav');
  if (nav) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            nav.classList.remove('nav--scrolled');
          } else {
            nav.classList.add('nav--scrolled');
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '-100px 0px 0px 0px',
      }
    );

    const hero = document.getElementById('hero');
    if (hero) {
      navObserver.observe(hero);
    }
  }
}

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }
}
