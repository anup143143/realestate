import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/DesiHome.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {

  const [email, setEmail] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setAlertMsg("Please enter your email!");
      setAlertType("error");
      return;
    }

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setAlertMsg("Please enter a valid email!");
      setAlertType("error");
      return;
    }

    setAlertMsg("Subscribed Successfully ✅");
    setAlertType("success");

    setEmail("");

    setTimeout(() => {
      setAlertMsg("");
    }, 3000);
  };

  return (
    <>
      {/* Top Section */}
      <div className="footer-section">
        <div className="text-section">
          <h1>Ready to get your dream home?</h1>
          <p>Let us help you find the perfect property for you.</p>
        </div>
        <Link to="/properties">
          <button className="btn-foot">Explore ALL Properties</button>
        </Link>
      </div>

      {/* Main Footer */}
      <div className="cta-footer">

        {/* Logo + Contact */}
        <div className="cta-1">
          <img src={logo} alt="DesiHomes Logo" />
          <p>6264350162</p>
          <p>example@gmail.com</p>
          <p>123 Main Street, City, Country</p>
          <div className="icons">
            <FontAwesomeIcon icon={faFacebook} className="fa-facebook" />
            <FontAwesomeIcon icon={faTwitter} className="fa-twitter" />
            <FontAwesomeIcon icon={faInstagram} className="fa-instagram" />
            <FontAwesomeIcon icon={faWhatsapp} className="fa-whatsapp" />
          </div>
          

        
        </div>

        {/* Navigation */}
        <div className="cta-2">
          <h3>Navigation</h3>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contacts</li></Link>
          <Link to="/properties"><li>Properties</li></Link>
        </div>

        {/* Resources */}
        <div className="cta-3">
          <h3>Resources</h3>

         <Link to="/privacy-policy"><p>Privacy Policy</p></Link>
          <Link to="/terms-of-service"><p>Terms of Service</p></Link>
          <Link to="/faqs"><p>FAQs</p></Link>
        </div>

        {/* Newsletter */}
        <div className="cta-4">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to get the latest updates.</p>

          {/* ALERT */}
          {alertMsg && (
            <div className={`alert ${alertType}`}>
              {alertMsg}
            </div>
          )}

          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="btn2" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 DesiHomes. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;