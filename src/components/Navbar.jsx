import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa"; 
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Reverie</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="icon-btn">
          <Link to="/login"><FaUser size={20} /></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


