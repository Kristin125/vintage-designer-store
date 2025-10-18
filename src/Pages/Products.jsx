import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Products = () => {
  return (
    <div className="page container">
      <h2 className="section-title">Products</h2>
      <div className="products-grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
};

export default Products;
