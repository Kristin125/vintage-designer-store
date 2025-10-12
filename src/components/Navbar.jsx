import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'white', borderBottom: '1px solid #ddd' }}>
      <Link to="/" style={{ fontWeight: 'bold' }}>Vintage Designer Store</Link>
      <Link to="/cart">Cart ({cartItems.length})</Link>
    </nav>
  );
};

export default Navbar;
