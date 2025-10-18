import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="product-image-wrap">
          <img src={product.image} alt={product.name} />
        </div>
      </Link>
      <div className="product-info">
        <h4>{product.name}</h4>
        <p className="price">£{product.price}</p>
        <div className="card-actions">
          <button className="text-btn" onClick={() => addToCart(product)}>Add to cart</button>
          <Link className="text-btn" to={`/product/${product.id}`}>View</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;



