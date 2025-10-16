import React from "react";
import "./Home.css";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const products = [
    { id: 1, name: "Vintage Jacket", price: "$120", image: "/images/jacket.jpg" },
    { id: 2, name: "Retro Sunglasses", price: "$60", image: "/images/sunglasses.jpg" },
    { id: 3, name: "Classic Handbag", price: "$90", image: "/images/handbag.jpg" },
  ];

  return (
    <div className="home">
      <h1>Vintage Designer Collection</h1>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;

