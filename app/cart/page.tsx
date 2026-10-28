
export default function CartPage() {
  return (
    <section className="cart-page">
      <div className="cart-heading">
        <div>
          <span className="cart-eyebrow">YOUR SHOPPING BAG</span>
          <h1>Shopping Cart</h1>
          <p>You have 3 items in your cart</p>
        </div>

        <div className="cart-heading-icon">🛍️</div>
      </div>

      <div className="cart-layout">
        {/* Cart Items */}
        <div className="cart-items-panel">
          <div className="cart-panel-heading">
            <h2>Your Items</h2>
            <span>3 products</span>
          </div>

          <div className="cart-item">
            <div className="cart-product-image">🎒</div>

            <div className="cart-product-details">
              <span className="cart-product-category">Accessories</span>
              <h3>Classic Everyday Backpack</h3>
              <p>₹1,499 each</p>

              <div className="cart-mobile-controls">
                <div className="quantity-control">
                  <button type="button">−</button>
                  <span>1</span>
                  <button type="button">+</button>
                </div>
                <button type="button" className="cart-remove-button">
                  Remove
                </button>
              </div>
            </div>

            <div className="cart-item-actions">
              <strong>₹1,499</strong>
              <div className="quantity-control">
                <button type="button">−</button>
                <span>1</span>
                <button type="button">+</button>
              </div>
              <button type="button" className="cart-remove-button">
                Remove
              </button>
            </div>
          </div>

          <div className="cart-item">
            <div className="cart-product-image">🎧</div>

            <div className="cart-product-details">
              <span className="cart-product-category">Electronics</span>
              <h3>Wireless Headphones</h3>
              <p>₹2,499 each</p>

              <div className="cart-mobile-controls">
                <div className="quantity-control">
                  <button type="button">−</button>
                  <span>1</span>
                  <button type="button">+</button>
                </div>
                <button type="button" className="cart-remove-button">
                  Remove
                </button>
              </div>
            </div>

            <div className="cart-item-actions">
              <strong>₹2,499</strong>
              <div className="quantity-control">
                <button type="button">−</button>
                <span>1</span>
                <button type="button">+</button>
              </div>
              <button type="button" className="cart-remove-button">
                Remove
              </button>
            </div>
          </div>

          <div className="cart-item">
            <div className="cart-product-image">☕</div>

            <div className="cart-product-details">
              <span className="cart-product-category">Home & Living</span>
              <h3>Minimal Ceramic Mug</h3>
              <p>₹499 each</p>

              <div className="cart-mobile-controls">
                <div className="quantity-control">
                  <button type="button">−</button>
                  <span>2</span>
                  <button type="button">+</button>
                </div>
                <button type="button" className="cart-remove-button">
                  Remove
                </button>
              </div>
            </div>

            <div className="cart-item-actions">
              <strong>₹998</strong>
              <div className="quantity-control">
                <button type="button">−</button>
                <span>2</span>
                <button type="button">+</button>
              </div>
              <button type="button" className="cart-remove-button">
                Remove
              </button>
            </div>
          </div>

          <a href="/products" className="cart-continue-link">
            ← Continue shopping
          </a>
        </div>

        {/* Order Summary */}
        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹4,996</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>FREE</span>
          </div>

          <p className="shipping-note">
            You've unlocked free shipping!
          </p>

          <div className="summary-divider" />

          <div className="summary-row summary-total">
            <strong>Total</strong>
            <strong>₹4,996</strong>
          </div>

          <button type="button" className="cart-checkout-button">
            Proceed to Checkout →
          </button>

          <div className="cart-trust-note">
            🔒 Secure checkout experience
          </div>
        </aside>
      </div>
    </section>
  );
}
