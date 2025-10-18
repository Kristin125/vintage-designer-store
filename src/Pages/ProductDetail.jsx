import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => String(p.id) === String(id));
  const { addToCart } = useContext(CartContext);

  if (!product) return <div className="container">Product not found</div>;

  return (
    <div className="page container product-detail">
      <div className="product-detail-left">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-detail-right">
        <h2>{product.name}</h2>
        <p className="price">£{product.price}</p>
        <p>{product.description}</p>
        <div className="detail-actions">
          <button className="text-btn" onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
