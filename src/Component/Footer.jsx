import "./Footer.css";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-text">
              RETROFIT<br />PORTAL
            </span>
          </div>
          <p className="footer-description">
            A centralized digital platform designed to modernize and scale retrofit service delivery.
          </p>
          <div className="footer-socials">
           <a href="#" className="footer-social-icon"><FaInstagram size={16} /></a>
          <a href="#" className="footer-social-icon"><FaTwitter size={16} /></a>
          <a href="#" className="footer-social-icon"><FaLinkedin size={16} /></a>
          <a href="#" className="footer-social-icon"><FaFacebook size={16} /></a>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-column-title">Pages</h4>
          <a href="#" className="footer-link">Home</a>
          <a href="#" className="footer-link">How It Works</a>
          <a href="#" className="footer-link">Services</a>
          <a href="#" className="footer-link">Feedbacks</a>
        </div>

        <div className="footer-column">
          <h4 className="footer-column-title">Categories</h4>
          <a href="#" className="footer-link">Dashboard</a>
          <a href="#" className="footer-link">Service Detail</a>
        </div>

        <div className="footer-column">
          <h4 className="footer-column-title">Resources</h4>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms & conditions</a>
          <a href="#" className="footer-link">Changelog</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Retrofit© 2026 . All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;