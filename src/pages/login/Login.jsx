import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useLogin } from "../../hooks/useLogin";

// styles
import './Login.css'
import VisibilityOnIcon from '../../icons/visibility.svg';
import VisibilityOffIcon from '../../icons/visibility-off.svg';

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login, error, isPending } = useLogin()

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
  }

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="Login">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="not-password-input"
            type='email'
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
          <div className="input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <img 
              className="eye-btn"
              src={showPassword ? VisibilityOnIcon : VisibilityOffIcon}
              alt={showPassword ? "visibility on" : "visibility off"}
              onClick={toggleShowPassword}
            />
          </div>

          <Link to='/forgot-password' className="forgot-password">Forgot password?</Link>

          {errorMessage && <p className="error">{errorMessage}</p>}
          {error && <p className="error">{error}</p>}

          <div className="two-btn">
            <button 
              className="submit-btn"
              type="submit"
              disabled={isPending}
            >
              {isPending ? 'Loading...' : 'Login'}
            </button>
          </div>

          <p className="p-under-btn">Don’t have an account? <Link to='/signup' className="forgot-password a-under-btn">Sign-up here</Link></p>
        </form>
      </div>
    </div>
  )
}
