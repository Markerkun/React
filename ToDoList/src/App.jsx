import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import { useEffect } from "react";

import LoginPage from "./pages/AuthPages/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import TaskForm from "./pages/TaskForm/TaskForm";
import "./App.css";
import RegisterPage from "./pages/AuthPages/RegisterPage";

function App() {
  const { login } = useAuth();

  return (
    <TaskProvider>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/task" element={<TaskForm />} />
      </Routes>
    </TaskProvider>
  );
}

export default App;
