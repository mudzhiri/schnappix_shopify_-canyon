/**
 * Impact Theme - Sticky Add to Cart
 * Shows a sticky add to cart bar when user scrolls past product form
 */

class ImpactStickyCart extends HTMLElement {
  constructor() {
    super();
    this.productForm = null;
    this.stickyBar = null;
    this.scrollThreshold = 400;
    this.init();
  }

  init() {
    this.productForm = document.querySelector('product-form, form[action*="/cart/add"]');
    if (!this.productForm) return;

    this.createStickyBar();
    this.setupScrollListener();
    this.setupFormSync();
  }

  createStickyBar() {
    const stickyBar = document.createElement('div');
    stickyBar.className = 'impact-sticky-add-to-cart';
    stickyBar.innerHTML = `
      <div class="impact-sticky-cart__content page-width">
        <div class="impact-sticky-cart__product">
          <div class="impact-sticky-cart__image"></div>
          <div class="impact-sticky-cart__info">
            <div class="impact-sticky-cart__title"></div>
            <div class="impact-sticky-cart__price"></div>
          </div>
        </div>
        <div class="impact-sticky-cart__form"></div>
      </div>
    `;
    document.body.appendChild(stickyBar);
    this.stickyBar = stickyBar;
    this.updateProductInfo();
  }

  updateProductInfo() {
    const productTitle = document.querySelector('h1.product__title, h1.product-form__title');
    const productPrice = document.querySelector('.price, .product__price');
    const productImage = document.querySelector('.product__media img, .product-gallery__image img');

    if (productTitle) {
      this.stickyBar.querySelector('.impact-sticky-cart__title').textContent = productTitle.textContent.trim();
    }

    if (productPrice) {
      this.stickyBar.querySelector('.impact-sticky-cart__price').innerHTML = productPrice.innerHTML;
    }

    if (productImage) {
      const img = productImage.cloneNode(true);
      img.style.width = '60px';
      img.style.height = '60px';
      img.style.objectFit = 'cover';
      img.style.borderRadius = '8px';
      this.stickyBar.querySelector('.impact-sticky-cart__image').innerHTML = '';
      this.stickyBar.querySelector('.impact-sticky-cart__image').appendChild(img);
    }
  }

  setupFormSync() {
    const originalForm = this.productForm.cloneNode(true);
    const stickyForm = this.stickyBar.querySelector('.impact-sticky-cart__form');
    stickyForm.appendChild(originalForm);

    // Sync variant selection
    const variantInputs = document.querySelectorAll('input[name="id"], input[type="radio"][name*="option"]');
    variantInputs.forEach(input => {
      input.addEventListener('change', () => {
        const stickyInput = stickyForm.querySelector(`[name="${input.name}"][value="${input.value}"]`);
        if (stickyInput) stickyInput.checked = true;
      });
    });
  }

  setupScrollListener() {
    let ticking = false;
    const checkScroll = () => {
      if (this.productForm) {
        const formRect = this.productForm.getBoundingClientRect();
        const shouldShow = window.scrollY > this.scrollThreshold && formRect.bottom < 0;

        if (shouldShow) {
          this.stickyBar.classList.add('visible');
        } else {
          this.stickyBar.classList.remove('visible');
        }
      }
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(checkScroll);
        ticking = true;
      }
    }, { passive: true });
  }
}

customElements.define('impact-sticky-cart', ImpactStickyCart);
