/**
 * SCHNAPPIX Homepage Interactive Features
 * Parallax, Smooth Scroll, Animations
 */

(function() {
  'use strict';

  class SchnappixHomepage {
    constructor() {
      this.init();
    }

    init() {
      this.setupParallax();
      this.setupSmoothScroll();
      this.setupProductCards();
      this.setupCarousel();
      this.setupIntersectionObserver();
    }

    // Parallax Effect
    setupParallax() {
      const parallaxContainer = document.querySelector('[data-parallax-container]');
      if (!parallaxContainer) return;

      const layers = parallaxContainer.querySelectorAll('[data-parallax-speed]');
      if (layers.length === 0) return;

      // Disable parallax on mobile
      if (window.innerWidth <= 768) return;

      let ticking = false;

      const updateParallax = () => {
        const scrollY = window.pageYOffset;
        const containerTop = parallaxContainer.offsetTop;
        const containerHeight = parallaxContainer.offsetHeight;
        const windowHeight = window.innerHeight;

        // Only animate when container is in viewport
        if (scrollY + windowHeight > containerTop && scrollY < containerTop + containerHeight) {
          const progress = (scrollY - containerTop + windowHeight) / (containerHeight + windowHeight);
          
          layers.forEach(layer => {
            const speed = parseFloat(layer.dataset.parallaxSpeed) || 0.5;
            const translateY = (scrollY - containerTop) * speed * 0.5;
            layer.style.transform = `translate3d(0, ${translateY}px, 0)`;
          });
        }

        ticking = false;
      };

      const requestTick = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateParallax);
          ticking = true;
        }
      };

      window.addEventListener('scroll', requestTick, { passive: true });
      updateParallax();
    }

    // Smooth Scroll
    setupSmoothScroll() {
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    // Product Card Interactions
    setupProductCards() {
      const productCards = document.querySelectorAll('[data-product-card]');
      
      productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        // Add glow effect on hover
        card.addEventListener('mouseenter', () => {
          const image = card.querySelector('.schnappix-product-card__image');
          if (image) {
            image.style.boxShadow = '0 0 30px rgba(255, 106, 62, 0.3)';
          }
        });

        card.addEventListener('mouseleave', () => {
          const image = card.querySelector('.schnappix-product-card__image');
          if (image) {
            image.style.boxShadow = 'none';
          }
        });
      });
    }

    // Carousel Auto-scroll
    setupCarousel() {
      const carousel = document.querySelector('[data-carousel]');
      if (!carousel) return;

      const track = carousel.querySelector('.schnappix-drops__track');
      if (!track) return;

      // Clone items for infinite scroll
      const items = track.querySelectorAll('.schnappix-drops__item');
      items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
      });

      // Pause on hover
      carousel.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
      });

      carousel.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
      });
    }

    // Intersection Observer for fade-in animations
    setupIntersectionObserver() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Observe sections
      const sections = document.querySelectorAll('.schnappix-products, .schnappix-story, .schnappix-vending, .schnappix-drops');
      sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new SchnappixHomepage();
    });
  } else {
    new SchnappixHomepage();
  }
})();

