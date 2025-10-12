import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, totalPrice } = useContext(CartContext);

  if (cartItems.length === 0) return <p style={{ padding: '2rem', textAlign: 'center' }}>Your cart is empty</p>;

  return (
    <div style={{ padding: '2rem' }}>
      {cartItems.map(item => (
        <div key={item.id} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
          <img src={item.image} alt={item.name} width={80} />
          <h3>{item.name}</h3>
          <p>${item.price} x {item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)} style={{ padding: '0.3rem 0.5rem', background: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>Remove</button>
        </div>
      ))}
      <h2>Total: ${totalPrice}</h2>
      <Link to="/checkout">
        <button style={{ padding: '0.5rem 1rem', background: 'black', color: 'white', border: 'none', cursor: 'pointer' }}>
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

export default Cart;
