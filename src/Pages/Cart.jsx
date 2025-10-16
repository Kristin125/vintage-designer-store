import React from "react";
import "./Cart.css";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Vintage Jacket", price: "$120", quantity: 1 },
  ];

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>Qty: {item.quantity}</span>
          </div>
        ))}
      </div>
      <button className="btn checkout-btn">Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
