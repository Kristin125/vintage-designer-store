import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', address: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', form, cartItems);
    clearCart();
    navigate('/');
  };

  if (cartItems.length === 0) return <p style={{ padding: '2rem', textAlign: 'center' }}>Your cart is empty</p>;

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Checkout</h2>
      <p>Total: ${totalPrice}</p>
      <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required style={{ display: 'block', margin: '0.5rem 0', padding: '0.5rem', width: '100%' }} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{ display: 'block', margin: '0.5rem 0', padding: '0.5rem', width: '100%' }} />
      <input name="address" placeholder="Shipping Address" value={form.address} onChange={handleChange} required style={{ display: 'block', margin: '0.5rem 0', padding: '0.5rem', width: '100%' }} />
      <button type="submit" style={{ padding: '0.5rem 1rem', background: 'black', color: 'white', border: 'none', cursor: 'pointer', marginTop: '1rem' }}>Place Order</button>
    </form>
  );
};

export default Checkout;
