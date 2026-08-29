import "./Navbar.css";
import logo from "../assets/Retrofit.png";

function Navbar() {
  return (
    <nav className='Navbg'>
     <div className="logo">
  <img src={logo} alt="Retrofit Portal" className="logo-icon" />
  <div className="logo-text">
    <span>RETROFIT</span>
    <span>PORTAL</span>
  </div>
</div>

      <ul className="nav-links">
        <li>Services</li>
        <li>How it Works</li>
      </ul>

      <div className="nav-buttons">
        <button className="btn-login">Login</button>
        <button className="btn-getstarted">Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;