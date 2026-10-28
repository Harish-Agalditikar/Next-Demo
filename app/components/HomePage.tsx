
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    oldPrice: 3999,
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    badge: "BESTSELLER",
  },
  {
    id: 2,
    name: "Classic Sneakers",
    category: "Fashion",
    price: 1899,
    oldPrice: 2799,
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    badge: "TRENDING",
  },
  {
    id: 3,
    name: "Modern Table Lamp",
    category: "Home & Living",
    price: 1299,
    oldPrice: 1899,
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
    badge: "POPULAR",
  },
  {
    id: 4,
    name: "Everyday Backpack",
    category: "Accessories",
    price: 1599,
    oldPrice: 2299,
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    badge: "GREAT DEAL",
  },
];

const categories = [
  { icon: "🎧", name: "Electronics", description: "Tech for everyday life", color: "home-purple" },
  { icon: "👟", name: "Fashion", description: "Find your own style", color: "home-pink" },
  { icon: "🏡", name: "Home & Living", description: "Make it feel like home", color: "home-blue" },
  { icon: "✨", name: "Beauty", description: "Your daily essentials", color: "home-peach" },
];

export default function HomePage() {
  return (
    <main className="shop-home">
      {/* Hero section */}
      <section className="shop-hero">
        <div className="shop-hero-content">
          <span className="shop-eyebrow">
            ✦ WELCOME TO SHOPNEST
          </span>

          <h1>
            Your next
            <br />
            favorite <span>find.</span>
          </h1>

          <p>
            Discover everyday essentials, explore fresh styles,
            and find little things that make life better.
          </p>

          <div className="shop-hero-actions">
            <Link href="/products" className="shop-primary-btn">
              Explore products <span>↗</span>
            </Link>
            <a href="#featured" className="shop-secondary-btn">
              See featured items
            </a>
          </div>

          <div className="shop-hero-trust">
            <span>✓</span> Thoughtful picks for everyday living
          </div>
        </div>

        <div className="shop-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85"
            alt="Stylish shopping boutique"
          />

          <div className="shop-floating-card shop-floating-one">
            <span className="shop-floating-icon">✦</span>
            <div>
              <strong>Fresh finds</strong>
              <small>Picked for you</small>
            </div>
          </div>

          <div className="shop-floating-card shop-floating-two">
            <span className="shop-floating-icon">♡</span>
            <div>
              <strong>Love your picks</strong>
              <small>Discover your style</small>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping benefits */}
      <section className="shop-benefits">
        <div><span>✦</span><p><strong>Curated finds</strong><small>Everyday favorites</small></p></div>
        <div><span>♡</span><p><strong>Fresh styles</strong><small>Something for everyone</small></p></div>
        <div><span>✓</span><p><strong>Easy discovery</strong><small>Browse with ease</small></p></div>
        <div><span>↗</span><p><strong>Great inspiration</strong><small>Find your next favorite</small></p></div>
      </section>

      {/* Categories */}
      <section className="shop-section" id="categories">
        <div className="shop-section-heading">
          <div>
            <span className="shop-section-label">EXPLORE THE COLLECTION</span>
            <h2>Shop by category<span>.</span></h2>
            <p>Discover something for every part of your life.</p>
          </div>
          <Link href="/products" className="shop-view-link">
            View all ↗
          </Link>
        </div>

        <div className="shop-category-grid">
          {categories.map((category) => (
            <Link
              href="/products"
              className={`shop-category-card ${category.color}`}
              key={category.name}
            >
              <span className="shop-category-icon">{category.icon}</span>
              <div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
              <span className="shop-category-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="shop-section" id="featured">
        <div className="shop-section-heading">
          <div>
            <span className="shop-section-label">HANDPICKED FOR YOU</span>
            <h2>Featured finds<span>.</span></h2>
            <p>Popular picks to brighten up your everyday.</p>
          </div>
          <Link href="/products" className="shop-view-link">
            All products ↗
          </Link>
        </div>

        <div className="shop-product-grid">
          {products.map((product) => (
            <article className="shop-product-card" key={product.id}>
              <div className="shop-product-image">
                <span className="shop-product-badge">{product.badge}</span>
                <img src={product.image} alt={product.name} loading="lazy" />
                <button
                  type="button"
                  className="shop-heart"
                  aria-label={`Add ${product.name} to wishlist`}
                >
                  ♡
                </button>
              </div>

              <div className="shop-product-info">
                <span className="shop-product-category">{product.category}</span>
                <h3>{product.name}</h3>

                <div className="shop-rating">
                  <span>★</span> {product.rating}
                  <small> · Customer rating</small>
                </div>

                <div className="shop-price">
                  <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                  <del>₹{product.oldPrice.toLocaleString("en-IN")}</del>
                </div>

                <button type="button" className="shop-add-btn">
                  + Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Promotional banner */}
      <section className="shop-promo">
        <div>
          <span>YOUR NEXT GREAT FIND AWAITS</span>
          <h2>Little things.<br />Big happy moments.</h2>
          <p>Explore everyday essentials and discover something you love.</p>
          <Link href="/products" className="shop-promo-btn">
            Explore ShopNest ↗
          </Link>
        </div>
        <div className="shop-promo-art" aria-hidden="true">
          <span>✦</span><span>✧</span><span>✳</span>
          <div className="shop-promo-orbit" />
        </div>
      </section>

      {/* Trending */}
      <section className="shop-section shop-last-section">
        <div className="shop-section-heading">
          <div>
            <span className="shop-section-label">MORE TO DISCOVER</span>
            <h2>Trending now<span>.</span></h2>
            <p>More inspiration for your next shopping trip.</p>
          </div>
          <Link href="/products" className="shop-view-link">
            Discover more ↗
          </Link>
        </div>

        <div className="shop-mini-grid">
          <div><span>⌚</span><p><strong>Everyday accessories</strong><small>Finishing touches that matter</small></p></div>
          <div><span>🎒</span><p><strong>Daily essentials</strong><small>Practical picks for your routine</small></p></div>
          <div><span>🪴</span><p><strong>Home favorites</strong><small>Make your space your own</small></p></div>
        </div>
      </section>
    </main>
  );
}
