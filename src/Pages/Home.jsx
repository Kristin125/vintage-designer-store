import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

const Home = () => {
  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-text">
          <h1 className="hero-title">Reverie</h1>
          <p className="hero-sub">
            Discover timeless vintage pieces — curated designer finds for the modern wardrobe.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="text-btn">Shop Products</Link>
            <Link to="/contact" className="text-btn">Contact Us</Link>
          </div>
        </div>

        <div className="hero-visual" aria-hidden>
          <img src="/assets/images/hero.jpeg" alt="Hero" className="visual-box" />
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands container">
        <h2 className="section-title">Our Top Brands</h2>
        <div className="brands-grid">
          <div className="brand-tile"><img src="/assets/images/brand1.jpeg" alt="Brand 1" /></div>
          <div className="brand-tile"><img src="/assets/images/brand2.jpeg" alt="Brand 2" /></div>
          <div className="brand-tile"><img src="/assets/images/brand3.jpeg" alt="Brand 3" /></div>
          <div className="brand-tile"><img src="/assets/images/brand4.jpeg" alt="Brand 4" /></div>
          <div className="brand-tile"><img src="/assets/images/brand5.jpeg" alt="Brand 5" /></div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="featured container">
  <h2 className="section-title">Featured Collection</h2>
  <div className="products-grid">
    {products.slice(0, 4).map((p) => (
      <Link 
        to={`/products/${p.id}`}  // <-- keep the same target as originally intended
        key={p.id} 
        className="product-card"
      >
        <div className="product-image-wrap">
          <img src={`/assets/images/featured${p.id}.jpeg`} alt={p.name} />
        </div>
        <div className="product-info">
          <h4>{p.name}</h4>
          <p className="price">£{p.price}</p>
        </div>
      </Link>
    ))}
  </div>
</section>
    </div>
  );
};

export default Home;
