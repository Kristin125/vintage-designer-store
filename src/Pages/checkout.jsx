import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form className="checkout-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Address" required />
        <button type="submit" className="btn">Confirm Purchase</button>
      </form>
    </div>
  );
};

export default Checkout;

