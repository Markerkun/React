import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TaskForm.css";

const TaskForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { day, hour, task } = location.state || {};

  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: task ? task.id : Date.now(),
      title,
      description,
      date: day || new Date().toISOString().split("T")[0],
      time: hour !== undefined ? `${hour.toString().padStart(2, "0")}:00` : "00:00",
      userEmail: task?.userEmail || JSON.parse(localStorage.getItem("auth"))?.email,
    };

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (task) {
      // редагуємо існуючу таску
      const updatedTasks = savedTasks.map(t => (t.id === task.id ? newTask : t));
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } else {
      // додаємо нову
      savedTasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(savedTasks));
    }

    navigate("/"); // повертаємось на Dashboard
  };

  return (
    <div className="task-form-container">
      <h2>{task ? "Edit Task" : "Add New Task"}</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <div className="form-buttons">
          <button type="submit">{task ? "Save Changes" : "Save"}</button>
          <button type="button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
