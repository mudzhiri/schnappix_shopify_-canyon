/**
 * SCHNAPPIX Homepage Interactive Features - Figma Design Integration
 * Parallax, Smooth Scroll, Animations, Carousel
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

    // Parallax Effect for Hero
    setupParallax() {
      const parallaxContainer = document.querySelector('[data-parallax-container]');
      if (!parallaxContainer) return;

      const parallaxBg = parallaxContainer.querySelector('[data-parallax-speed]');
      if (!parallaxBg) return;

      // Disable parallax on mobile
      if (window.innerWidth <= 768) {
        return;
      }

      let ticking = false;

      const updateParallax = () => {
        const scrollY = window.pageYOffset;
        const containerTop = parallaxContainer.offsetTop;
        const containerHeight = parallaxContainer.offsetHeight;
        const windowHeight = window.innerHeight;

        // Only animate when container is in viewport
        if (scrollY + windowHeight > containerTop && scrollY < containerTop + containerHeight) {
          const progress = Math.max(0, Math.min(1, (scrollY - containerTop + windowHeight) / (containerHeight + windowHeight)));
          const speed = 0.3;
          const translateY = (scrollY - containerTop) * speed;
          
          parallaxBg.style.transform = `translate3d(0, ${translateY}px, 0)`;
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

    // Smooth Scroll Behavior
    setupSmoothScroll() {
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    // Product Card Interactions
    setupProductCards() {
      const productCards = document.querySelectorAll('[data-product-card]');
      
      productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'translateY(0)';
        });
      });
    }

    // Weekly Drops Carousel
    setupCarousel() {
      const carousel = document.querySelector('[data-carousel]');
      if (!carousel) return;

      const track = carousel.querySelector('.schnappix-drops__track');
      if (!track) return;

      // Auto-scroll carousel
      let scrollPosition = 0;
      const scrollSpeed = 0.5;
      let animationFrameId = null;

      const scroll = () => {
        scrollPosition += scrollSpeed;
        const maxScroll = track.scrollWidth - track.offsetWidth;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }

        track.style.transform = `translateX(-${scrollPosition}px)`;
        animationFrameId = requestAnimationFrame(scroll);
      };

      // Start auto-scroll
      scroll();

      // Pause on hover
      carousel.addEventListener('mouseenter', () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      });

      carousel.addEventListener('mouseleave', () => {
        scroll();
      });

      // Touch/Drag support for mobile
      let isDragging = false;
      let startX = 0;
      let scrollLeft = 0;

      track.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - track.offsetLeft;
        scrollLeft = scrollPosition;
        track.style.cursor = 'grabbing';
      });

      track.addEventListener('mouseleave', () => {
        isDragging = false;
        track.style.cursor = 'grab';
      });

      track.addEventListener('mouseup', () => {
        isDragging = false;
        track.style.cursor = 'grab';
      });

      track.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 2;
        scrollPosition = Math.max(0, Math.min(scrollLeft - walk, track.scrollWidth - track.offsetWidth));
        track.style.transform = `translateX(-${scrollPosition}px)`;
      });

      // Touch events
      let touchStartX = 0;
      let touchScrollLeft = 0;

      track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].pageX;
        touchScrollLeft = scrollPosition;
      });

      track.addEventListener('touchmove', (e) => {
        if (!touchStartX) return;
        const x = e.touches[0].pageX;
        const walk = (x - touchStartX) * 2;
        scrollPosition = Math.max(0, Math.min(touchScrollLeft - walk, track.scrollWidth - track.offsetWidth));
        track.style.transform = `translateX(-${scrollPosition}px)`;
      });

      track.addEventListener('touchend', () => {
        touchStartX = 0;
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
          }
        });
      }, observerOptions);

      // Observe elements that should fade in on scroll
      const fadeElements = document.querySelectorAll('.schnappix-story__image-wrapper, .schnappix-story__content, .schnappix-vending__feature, .schnappix-vending__image-wrapper');
      fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
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
