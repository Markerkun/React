// src/pages/Dashboard.jsx
import React, { useState } from "react";
import WeekGrid from "../../components/WeekGrid/WeekGrid";
import "./Dashboard.css"; // стиль для календаря
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = ( ) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { logout } = useAuth();
  const navigate = useNavigate();

  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 1); // Monday

  const days = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    return day;
  });

  const prevWeek = () => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
  const nextWeek = () => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));
  const today = () => setCurrentDate(new Date());

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Task Calendar</h1>
        <button onClick={() => {
          logout();
          navigate("/login");
        }} >Logout</button>
      </header>

      <div className="calendar-controls">
        <button onClick={prevWeek}>←</button>
        <button onClick={today}>Today</button>
        <button onClick={nextWeek}>→</button>
      </div>

      <h3>{currentDate.toLocaleString("uk-UA", { month: "long", year: "numeric" })}</h3>

      <WeekGrid days={days} />
    </div>
  );
};

export default Dashboard;
