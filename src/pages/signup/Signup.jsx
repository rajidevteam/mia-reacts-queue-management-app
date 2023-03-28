import React, { useState } from "react"
import { Link } from "react-router-dom"

// styles
import './Signup.css'
import VisibilityOnIcon from '../../icons/visibility.svg';
import VisibilityOffIcon from '../../icons/visibility-off.svg';

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("")
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, password, confPass);
  }

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="Signup">
      <div className="signup-container">
        <h1>Create account</h1>
        <p className="p">
          You need to create an account to access this website
        </p>
        <form onSubmit={handleSubmit}>
          <input
            className="not-password-input"
            type='text'
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoFocus
          />
          <input
            className="not-password-input"
            type='email'
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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
          <input
            className="not-password-input conform-password"
            type='password'
            placeholder="Conform password"
            value={confPass}
            onChange={(e) => setConfPass(e.target.value)}
            required
          />

          {errorMessage && <p className="error">{errorMessage}</p>}

          <div className="two-btn">
            <button 
              className="submit-btn"
              type="submit"
            >
              Create account
            </button>
          </div>

          <p className="p-under-btn">Already have an account? <Link to='/login' className="forgot-password a-under-btn">Login here</Link></p>
        </form>
      </div>
    </div>
  )
}