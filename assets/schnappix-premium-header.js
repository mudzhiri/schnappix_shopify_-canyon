/**
 * Schnappix Premium Header Effects
 * - Parallax + Glow Scroll Effect
 * - Magnetic Hover Effects
 * - Subtle Parallax Menu Icons
 * - Auto-Hide/Show on Scroll
 */

class SchnappixPremiumHeader {
  constructor() {
    this.headerComponent = null;
    this.headerMenu = null;
    this.lastScrollY = 0;
    this.scrollThreshold = 40;
    this.parallaxIntensity = 0;
    this.isScrollingDown = false;
    this.hideTimeout = null;
    
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    this.headerComponent = document.querySelector('header-component');
    this.headerMenu = document.querySelector('header-menu');
    
    if (!this.headerComponent) return;

    this.setupScrollEffects();
    this.setupParallaxIcons();
    this.setupMagneticHover();
  }

  /**
   * 1. Parallax + Glow Scroll Effect
   */
  setupScrollEffects() {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDelta = currentScrollY - this.lastScrollY;
          this.isScrollingDown = scrollDelta > 0;

          // Add scrolled class when past threshold
          if (currentScrollY > this.scrollThreshold) {
            this.headerComponent.classList.add('scrolled');
            
            // Optional: Add shrink effect
            if (currentScrollY > 100) {
              this.headerComponent.classList.add('shrink');
            } else {
              this.headerComponent.classList.remove('shrink');
            }
          } else {
            this.headerComponent.classList.remove('scrolled', 'shrink');
          }

          // Update parallax intensity
          this.parallaxIntensity = Math.min(currentScrollY / 50, 4);
          this.updateParallaxIcons();

          this.lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
  }

  /**
   * 2. Subtle Parallax Menu Icons
   */
  setupParallaxIcons() {
    const icons = document.querySelectorAll('.menu-icon-parallax');
    icons.forEach(icon => {
      icon.classList.add('parallax-active');
    });
  }

  updateParallaxIcons() {
    const icons = document.querySelectorAll('.menu-icon-parallax');
    icons.forEach(icon => {
      icon.style.setProperty('--parallax-offset', `${this.parallaxIntensity}px`);
    });
  }

  /**
   * 3. Magnetic Hover Effect (Enhanced)
   */
  setupMagneticHover() {
    const menuLinks = document.querySelectorAll('.menu-list__link');
    
    menuLinks.forEach(link => {
      link.addEventListener('mouseenter', (e) => {
        this.handleMagneticHover(e, link, true);
      });
      
      link.addEventListener('mouseleave', (e) => {
        this.handleMagneticHover(e, link, false);
      });

      link.addEventListener('mousemove', (e) => {
        this.handleMagneticMove(e, link);
      });
    });
  }

  handleMagneticHover(e, link, isEntering) {
    const icon = link.querySelector('.menu-icon-parallax');
    if (icon) {
      if (isEntering) {
        icon.style.opacity = '1';
        icon.style.transform = 'scale(1.2)';
      } else {
        icon.style.opacity = '0';
        icon.style.transform = 'scale(1)';
      }
    }
  }

  handleMagneticMove(e, link) {
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    
    // Subtle magnetic effect
    const moveX = deltaX * 2;
    const moveY = deltaY * 1;
    
    link.style.transform = `translate(${moveX}px, ${moveY - 2}px) scale(1.05)`;
  }

  /**
   * 4. Auto-Hide/Show Header (Optional - YouTube/TikTok style)
   */
  setupAutoHide() {
    let lastScrollTop = 0;
    const hideThreshold = 100;
    const showThreshold = 50;

    window.addEventListener('scroll', () => {
      const currentScrollTop = window.scrollY;
      const scrollDelta = currentScrollTop - lastScrollTop;

      if (currentScrollTop > hideThreshold) {
        if (scrollDelta > 5) {
          // Scrolling down - hide header
          this.headerComponent.style.transform = 'translateY(-100%)';
        } else if (scrollDelta < -5) {
          // Scrolling up - show header
          this.headerComponent.style.transform = 'translateY(0)';
        }
      } else {
        this.headerComponent.style.transform = 'translateY(0)';
      }

      lastScrollTop = currentScrollTop;
    }, { passive: true });
  }
}

// Initialize on page load
const schnappixPremiumHeader = new SchnappixPremiumHeader();

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SchnappixPremiumHeader;
}
