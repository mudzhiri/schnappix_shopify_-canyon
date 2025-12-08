/**
 * Impact Theme - Quick Buy on Collection Pages
 * Adds quick buy functionality to product cards
 */

class ImpactQuickBuy extends HTMLElement {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.setupQuickBuyButtons();
  }

  setupQuickBuyButtons() {
    const productCards = document.querySelectorAll('.product-card, .card-product');
    
    productCards.forEach(card => {
      const productId = card.dataset.productId || this.getProductIdFromCard(card);
      if (!productId) return;

      const quickBuyBtn = this.createQuickBuyButton(productId, card);
      card.style.position = 'relative';
      card.appendChild(quickBuyBtn);
    });
  }

  getProductIdFromCard(card) {
    const link = card.querySelector('a[href*="/products/"]');
    if (link) {
      const match = link.href.match(/\/products\/([^\/\?]+)/);
      return match ? match[1] : null;
    }
    return null;
  }

  createQuickBuyButton(productId, card) {
    const button = document.createElement('button');
    button.className = 'impact-quick-buy';
    button.textContent = 'Quick Buy';
    button.dataset.productId = productId;

    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.handleQuickBuy(productId, card);
    });

    return button;
  }

  async handleQuickBuy(productId, card) {
    const button = card.querySelector('.impact-quick-buy');
    if (!button) return;

    try {
      button.disabled = true;
      button.textContent = 'Loading...';

      // Fetch product data
      const response = await fetch(`/products/${productId}.js`);
      const product = await response.json();

      // Get default variant
      const defaultVariant = product.variants[0];
      if (!defaultVariant) {
        throw new Error('No variants available');
      }

      // Add to cart
      const formData = {
        items: [{
          id: defaultVariant.id,
          quantity: 1
        }]
      };

      const cartResponse = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (cartResponse.ok) {
        button.textContent = 'Added!';
        button.style.background = '#4CAF50';
        
        // Update cart count
        this.updateCartCount();
        
        // Show success animation
        this.showSuccessAnimation(button);
        
        // Open cart drawer if available
        setTimeout(() => {
          const cartDrawer = document.querySelector('cart-drawer');
          if (cartDrawer && typeof cartDrawer.open === 'function') {
            cartDrawer.open();
          }
        }, 500);
      } else {
        throw new Error('Failed to add to cart');
      }
    } catch (error) {
      console.error('Quick buy error:', error);
      button.textContent = 'Error';
      button.style.background = '#f44336';
      setTimeout(() => {
        button.textContent = 'Quick Buy';
        button.style.background = '';
        button.disabled = false;
      }, 2000);
    }
  }

  updateCartCount() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        const cartCount = document.querySelector('.cart-count, [data-cart-count]');
        if (cartCount) {
          cartCount.textContent = cart.item_count;
        }
        
        // Dispatch custom event
        document.dispatchEvent(new CustomEvent('cart:updated', { detail: cart }));
      });
  }

  showSuccessAnimation(button) {
    button.style.transform = 'scale(1.1)';
    setTimeout(() => {
      button.style.transform = '';
    }, 200);
  }
}

customElements.define('impact-quick-buy', ImpactQuickBuy);
