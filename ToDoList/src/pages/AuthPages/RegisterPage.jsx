import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./AuthPages.css";

const RegistrationPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) return alert("Заповніть усі поля!");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return alert("Введіть коректний email!");
    if (password.length < 6)
      return alert("Пароль повинен містити мінімум 6 символів!");

    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    if (existingUsers.some(u => u.email === email))
      return alert("Користувач з таким email вже існує!");

    const newUser = { email, password };
    localStorage.setItem(
      "registeredUsers",
      JSON.stringify([...existingUsers, newUser])
    );

    login({ email: newUser.email });
    alert("Registration successful!");
    navigate("/");
  };

  return (
    <div className="auth-page-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="submit-btn">Register</button>
      </form>

      <button className="switch-btn" onClick={() => navigate("/login")}>
        Вже маєш акаунт? Увійти
      </button>
    </div>
  );
};

export default RegistrationPage;
