import React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="product-detail">
      <img src={`/images/product-${id}.jpg`} alt="Product" className="product-img" />
      <div className="details">
        <h2>Product Name {id}</h2>
        <p className="price">$120</p>
        <p className="desc">A timeless vintage piece to elevate your wardrobe.</p>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
