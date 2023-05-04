import React, { useState } from "react";
import PropTypes from "prop-types";
import "./login-form.css";

export const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (username && password) {
      setShowSuccess(true);
      onLogin(username);
    } else {
      setShowSuccess(false);
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <label className="login-form__label" htmlFor="username">
        Username:
      </label>
      <input
        className="login-form__input"
        type="text"
        name="username"
        data-testid="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label className="login-form__label" htmlFor="password">
        Password:
      </label>
      <input
        className="login-form__input"
        type="password"
        name="password"
        data-testid="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        className="login-form__button"
        type="submit"
        data-testid="login-button"
      >
        Login
      </button>
      {showSuccess ? (
        <div className="login-form__success-message">
          Welcome, email@example.com!
        </div>
      ) : (
        <div className="login-form__error-message">Failure, try again!</div>
      )}
    </form>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
