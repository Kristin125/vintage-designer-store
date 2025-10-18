import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">Reverie</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart" aria-label="Cart"><FaShoppingCart /></Link></li>
        <li><Link to="/login" aria-label="Account"><FaUser /></Link></li>
      </ul>
      <div className="cart-count" aria-hidden>{cartItems.length > 0 ? cartItems.length : ""}</div>
    </nav>
  );
};

export default Navbar;
