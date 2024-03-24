import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const Footer = () => {
  return (
<footer className="footer text-white py-5" style={{ backgroundColor: 'rgb(40, 40, 179)' }}>      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li><Link to="/jerseys" className="text-light">Jerseys</Link></li>
              <li><Link to="/boots" className="text-light">Boots</Link></li>
              <li><Link to="/accessories" className="text-light">Accessories</Link></li>
              <li><Link to="/sale" className="text-light">Sale</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><Link to="/contact" className="text-light">Contact Us</Link></li>
              <li><Link to="/faq" className="text-light">FAQ</Link></li>
              <li><Link to="/shipping" className="text-light">Shipping Information</Link></li>
              <li><Link to="/returns" className="text-light">Returns & Exchanges</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" className="text-light me-3"><FaFacebookF /></a>
              <a href="https://twitter.com" className="text-light me-3"><FaTwitter /></a>
              <a href="https://instagram.com" className="text-light me-3"><FaInstagram /></a>
              <a href="https://youtube.com" className="text-light me-3"><FaYoutube /></a>
              <a href="https://github.com/Fahad12405/" className="text-light" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>
          <div className="col-md-3">
            <h5>Newsletter</h5>
            <p className="text-light">Sign up to get the latest news</p>
            <form>
              <input type="email" className="form-control mb-2" placeholder="Your Email" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-light">Made  by Fahad Alam</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
