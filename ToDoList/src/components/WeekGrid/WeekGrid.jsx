// src/components/WeekGrid.jsx
import React, { useEffect, useState } from "react";
import "./WeekGrid.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const hours = Array.from({ length: 24 }, (_, i) => i);

const WeekGrid = ({ days }) => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (user && user.email) {
      const userTasks = savedTasks.filter(task => task.userEmail === user.email);
      setTasks(userTasks);
    } else {
      setTasks([]);
    }
  }, [user]);

  // Пошук задачі для конкретної клітинки
  const getTaskForCell = (day, hour) => {
    const formattedDate = day.toISOString().split("T")[0];
    const formattedTime = `${String(hour).padStart(2, "0")}:00`;
    return tasks.find(
      task =>
        task.date === formattedDate &&
        task.time === formattedTime
    );
  };

  // Обробник додавання/редагування задачі
  const handleAddOrEditTask = (day, hour, task = null) => {
    navigate("/task", {
      state: {
        day: day.toISOString().split("T")[0],
        hour,
        task, // передаємо дані задачі, якщо редагуємо
      },
    });
  };

  return (
    <div className="week-grid">
      <div className="grid-header">
        <div className="time-col">Time</div>
        {days.map((day, idx) => (
          <div key={idx} className="day-col">
            <div>{day.toLocaleDateString("en-US", { weekday: "short" })}</div>
            <div>{day.getDate()}</div>
          </div>
        ))}
      </div>

      <div className="grid-body">
        {hours.map(hour => (
          <div key={hour} className="grid-row">
            <div className="time-col">{hour.toString().padStart(2, "0")}:00</div>

            {days.map((day, idx) => {
              const task = getTaskForCell(day, hour);

              return (
                <div key={idx} className="day-col">
                  {task ? (
                    <div
                      className="task-item"
                      onClick={() => handleAddOrEditTask(day, hour, task)}
                      title={task.description || "No description"}
                    >
                      <strong>{task.title}</strong>
                    </div>
                  ) : (
                    <button
                      className="add-task-btn"
                      onClick={() => handleAddOrEditTask(day, hour)}
                    >
                      +
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekGrid;
