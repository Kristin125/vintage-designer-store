import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="page container">
        <h2 className="section-title">Your cart</h2>
        <p>Your cart is empty.</p>
        <Link to="/products" className="text-btn">Browse products</Link>
      </div>
    );
  }

  return (
    <div className="page container">
      <h2 className="section-title">Your cart</h2>
      <div className="cart-list">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-info">
              <h4>{item.name}</h4>
              <p className="price">£{item.price}</p>
              <div className="qty">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="small-btn">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="small-btn">+</button>
              </div>
            </div>
            <div>
              <button className="text-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p className="subtotal">Subtotal: <strong>£{totalPrice}</strong></p>
        <Link to="/checkout" className="text-btn">Proceed to checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
