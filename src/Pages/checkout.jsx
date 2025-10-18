import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, clearCart, totalPrice } = useContext(CartContext);
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order", { form, cartItems, totalPrice });
    clearCart();
    alert("Order placed (mock). Thank you!");
    navigate("/");
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="page container">
        <h2 className="section-title">Checkout</h2>
        <p>Your cart is empty.</p>
        <a href="/products" className="text-btn">Shop products</a>
      </div>
    );
  }

  return (
    <div className="page container checkout-page">
      <h2 className="section-title">Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>Full name</label>
        <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required />
        <label>Email</label>
        <input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required />
        <label>Shipping address</label>
        <input value={form.address} onChange={(e)=>setForm({...form, address:e.target.value})} required />
        <p className="subtotal">Order total: <strong>£{totalPrice}</strong></p>
        <button className="text-btn" type="submit">Place order</button>
      </form>
    </div>
  );
};

export default Checkout;
