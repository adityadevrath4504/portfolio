import { useEffect, useState } from 'react';

export function useScrollReveal() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' },
    );

    document.querySelectorAll('.rv').forEach((element) => revealObs.observe(element));

    const sections = Array.from(document.querySelectorAll('section[id]'));
    let ticking = false;
    let currentActive = '';

    const updateActive = () => {
      ticking = false;
      let active = '';
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) active = section.id;
      });

      if (active !== currentActive) {
        currentActive = active;
        setActiveSection(active);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActive);
      }
    };

    updateActive();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      revealObs.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return activeSection;
}
