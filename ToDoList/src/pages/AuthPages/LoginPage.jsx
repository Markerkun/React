import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./AuthPages.css";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Заповніть усі поля!");

    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      login({ email: user.email });
      navigate("/");
    } else alert("Невірний email або пароль!");
  };

  return (
    <div className="auth-page-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" className="submit-btn">Login</button>
      </form>

      <button className="switch-btn" onClick={() => navigate("/register")}>
        Не маєш акаунту? Зареєструватися
      </button>
    </div>
  );
};

export default LoginPage;
