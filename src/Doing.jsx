// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

const Doing = ({ todoTasks, doingTasks, setTodoTasks, setDoingTasks }) => {
  const [selectedTask, setSelectedTask] = useState("");

  const handleAddDoingTask = () => {
    if (selectedTask.trim() !== "" && !doingTasks.includes(selectedTask)) {
      setDoingTasks([...doingTasks, selectedTask]);
      setTodoTasks(todoTasks.filter((task) => task !== selectedTask)); // Remove task from Todo
      setSelectedTask(""); // Clear input after adding task
    }
  };

  return (
    <>
      <h2>Doing 🏃</h2>
      <div className="add-task">
        <select
          value={selectedTask}
          onChange={(e) => setSelectedTask(e.target.value)}
        >
          <option value="">Select a task from Todo</option>
          {todoTasks.map((task, index) => (
            <option key={index} value={task}>
              {task}
            </option>
          ))}
        </select>
        <button onClick={handleAddDoingTask}>Add</button>
      </div>
      <ul>
        {doingTasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button
              className="remove"
              onClick={() => {
                setDoingTasks(doingTasks.filter((_, i) => i !== index));
                setTodoTasks([...todoTasks, task]); // Add task back to Todo
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

Doing.propTypes = {
  logs: PropTypes.array.isRequired,
  todoTasks: PropTypes.array.isRequired,
  doingTasks: PropTypes.array.isRequired,
  setTodoTasks: PropTypes.func.isRequired,
  setDoingTasks: PropTypes.func.isRequired,
};

export default Doing;
