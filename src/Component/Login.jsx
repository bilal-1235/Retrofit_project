import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import './Login.css';
import loginImage from '../assets/LoginPage/loginBackground.png';

import logo from "../assets/LogoHorizental.png";




function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  }

  return (
    <div className="login-page">
      <div className="login-image">
        <img src={loginImage} alt="Retrofit building" />
      </div>

      <div className="login-form-container">
        <div className="login-logo">
          <img src={logo} alt="Retrofit Portal" className="logo-icon" />
        </div>

        <div className="login-header">
          <h2>Login to your account</h2>
          <p>The faster you login, The faster we get to work</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label>Email address</label>
            <input
              type="email"
              placeholder="John.smith@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-field">
            <label>Password</label>
            <div className="login-password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="login-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <a href="#" className="login-forgot">Forgot password?</a>

          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="login-signup">
          Don't have an account? <Link to="/signup" className="login-signup-link">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
export default Login;