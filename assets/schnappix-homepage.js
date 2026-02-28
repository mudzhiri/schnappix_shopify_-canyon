/**
 * SCHNAPPIX Homepage - JavaScript Effects
 * Scroll reveals, parallax, letter animations, tilt, slider, accordion
 */
(function () {
  'use strict';

  /* ============ SCROLL REVEAL ============ */
  function initReveal() {
    const els = document.querySelectorAll('[data-snx-reveal]');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.snxDelay || '0', 10);
            setTimeout(() => entry.target.classList.add('snx-visible'), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));
  }

  /* ============ LETTER ANIMATION ============ */
  function initLetterAnimation() {
    const els = document.querySelectorAll('[data-snx-letter-animate]');
    els.forEach((el) => {
      const text = el.textContent.trim();
      el.textContent = '';
      text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.classList.add('snx-letter');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.transitionDelay = `${i * 60 + 200}ms`;
        el.appendChild(span);
      });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.querySelectorAll('.snx-letter').forEach((l) =>
            l.classList.add('snx-visible')
          );
        });
      });
    });
  }

  /* ============ PARALLAX ============ */
  function initParallax() {
    const els = document.querySelectorAll('[data-snx-parallax]');
    if (!els.length) return;

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        els.forEach((el) => {
          const speed = parseFloat(el.dataset.snxParallax || 0.3);
          el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
        });
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ============ 3D TILT ON HOVER ============ */
  function initTilt() {
    const cards = document.querySelectorAll('[data-snx-tilt]');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.4s ease';
        setTimeout(() => (card.style.transition = ''), 400);
      });
    });
  }

  /* ============ TESTIMONIAL SLIDER ============ */
  function initSlider() {
    const slider = document.querySelector('[data-snx-slider]');
    if (!slider) return;

    const track = slider.querySelector('[data-snx-slider-track]');
    const prevBtn = slider.querySelector('[data-snx-slider-prev]');
    const nextBtn = slider.querySelector('[data-snx-slider-next]');
    const cards = track.children;
    let index = 0;

    function getVisibleCount() {
      return window.innerWidth > 991 ? 2 : 1;
    }

    function slide() {
      const visible = getVisibleCount();
      const maxIndex = cards.length - visible;
      index = Math.max(0, Math.min(index, maxIndex));

      const cardWidth = cards[0].getBoundingClientRect().width;
      const gap = 20;
      track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
    }

    if (prevBtn)
      prevBtn.addEventListener('click', () => {
        index--;
        slide();
      });
    if (nextBtn)
      nextBtn.addEventListener('click', () => {
        index++;
        slide();
      });

    window.addEventListener('resize', slide);

    let startX = 0;
    let isDragging = false;
    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    }, { passive: true });
    track.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? index++ : index--;
        slide();
      }
      isDragging = false;
    });

    setInterval(() => {
      index++;
      if (index >= cards.length - getVisibleCount() + 1) index = 0;
      slide();
    }, 5000);
  }

  /* ============ FAQ ACCORDION ============ */
  function initAccordion() {
    const items = document.querySelectorAll('[data-snx-accordion]');
    items.forEach((item) => {
      const trigger = item.querySelector('[data-snx-accordion-trigger]');
      if (!trigger) return;

      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('snx-active');

        items.forEach((other) => other.classList.remove('snx-active'));

        if (!isActive) {
          item.classList.add('snx-active');
        }
      });
    });
  }

  /* ============ SMOOTH SECTION TRANSITIONS ============ */
  function initSectionColors() {
    const sections = document.querySelectorAll('[data-snx-section]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.dataset.snxSection;
            document.body.dataset.snxCurrentSection = section;
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => observer.observe(s));
  }

  /* ============ MAGNETIC BUTTONS ============ */
  function initMagneticButtons() {
    const btns = document.querySelectorAll('.snx-btn');
    btns.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.setProperty('--mx', `${x * 0.15}px`);
        btn.style.setProperty('--my', `${y * 0.15}px`);
        const text = btn.querySelector('.snx-btn__text');
        if (text) {
          text.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
        }
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.removeProperty('--mx');
        btn.style.removeProperty('--my');
        const text = btn.querySelector('.snx-btn__text');
        if (text) text.style.transform = '';
      });
    });
  }

  /* ============ INIT ALL ============ */
  function init() {
    initLetterAnimation();
    initReveal();
    initParallax();
    initTilt();
    initSlider();
    initAccordion();
    initSectionColors();
    initMagneticButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
