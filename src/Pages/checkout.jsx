import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const Checkout = () => {
  const { totalPrice, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({ name: '', email: '', address: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Order placed! Total: $${totalPrice}`);
    clearCart();
  };

  return (
    <div className="container checkout">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="address" placeholder="Shipping Address" value={form.address} onChange={handleChange} required />
        <p>Total: ${totalPrice}</p>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
