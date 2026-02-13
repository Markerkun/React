// src/context/TaskContext.jsx
import React, { createContext, useState } from "react";
import { useAuth } from "./AuthContext";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
