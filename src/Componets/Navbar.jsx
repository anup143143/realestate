import { useState } from "react";
import logo from "../assets/DesiHome.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Header">
      <div className="Navbar">

        {/* Logo */}
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="DesiHomes Logo" />
          </div>
        </Link>

        {/* ✅ Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* ✅ Menu */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/properties" onClick={() => setMenuOpen(false)}>Properties</Link></li>

          {/* ✅ Button inside menu */}
          <li className="mobile-btn">
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <button className="btn">Get in touch</button>
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="nav-btn">
          <Link to="/contact">
            <button className="btn">Get in touch</button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;