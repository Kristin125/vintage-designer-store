import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, totalPrice } = useContext(CartContext);

  if (cartItems.length === 0) return <p>Your cart is empty</p>;

  return (
    <div className="container">
      <h1>Cart</h1>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>${item.price} x {item.quantity}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h2>Total: ${totalPrice}</h2>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
