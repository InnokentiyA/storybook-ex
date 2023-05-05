import React, { useState } from "react";
import PropTypes from "prop-types";
import "./login-form.css";
import axios from "axios";

export const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (username && password) {
      axios.get("/api/auth").then((response) => {
        console.log(response.data);
      });
      setShowMessage(true);
      setIsSuccess(true);
      onLogin(username);
    } else {
      axios.get("/api/auth").then((response) => {
        console.log(response.data);
      });
      setShowMessage(true);
      setIsSuccess(false);
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
      {showMessage && (
        <div
          data-testid="message"
          className={`login-form__${isSuccess ? "success" : "error"}-message`}
        >
          {isSuccess
            ? "Welcome, email@example.com!"
            : "Login failed. Please check your credentials and try again."}
        </div>
      )}
    </form>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
