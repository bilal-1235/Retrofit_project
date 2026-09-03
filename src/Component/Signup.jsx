import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import './Login.css';
import signupImage from '../assets/SignupPage/Signup.png';
import logo from "../assets/LogoHorizental.png";


function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  }

  return (
    <div className="login-page">
      <div className="login-image">
        <img src={signupImage} alt="Retrofit building" />
      </div>

      <div className="login-form-container">
        <div className="login-logo">
         <img src={logo} alt="Retrofit Portal" className="logo-icon" />
         
        </div>

        <div className="login-header">
          <h2>Sign Up to your account</h2>
          <p>Sign Up to start your retrofit services</p>
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

          <div className="login-field">
            <label>Confirm Password</label>
            <div className="login-password-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="login-password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <a href="#" className="login-forgot">Forgot password?</a>

          <button type="submit" className="login-button">Sign Up</button>
        </form>

        <p className="login-signup">
          Already have an account? <Link to="/login" className="login-signup-link">Login</Link>
        </p>
      </div>
    </div>
  );
}
export default Signup;