// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

const Todo = ({ logs, todoTasks, setTodoTasks }) => {
  const [selectedTask, setSelectedTask] = useState("");
  const [addedTasks, setAddedTasks] = useState([]);

  const handleAddTodoTask = () => {
    if (selectedTask.trim() !== "" && !addedTasks.includes(selectedTask)) {
      setTodoTasks([...todoTasks, selectedTask]);
      setSelectedTask(""); // Clear input after adding task
      setAddedTasks([...addedTasks, selectedTask]);
    }
  };

  return (
    <>
      <h2>Todo 📝</h2>
      <div className="add-task">
        <select
          value={selectedTask}
          onChange={(e) => setSelectedTask(e.target.value)}
        >
          <option value="">Select a task from Logs</option>
          {logs.map(
            (task, index) =>
              !addedTasks.includes(task) && (
                <option key={index} value={task}>
                  {task}
                </option>
              )
          )}
        </select>
        <button onClick={handleAddTodoTask}>Add</button>
      </div>
      <ul>
        {todoTasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button
              className="remove"
              onClick={() => {
                setTodoTasks(todoTasks.filter((_, i) => i !== index));
                setAddedTasks(addedTasks.filter((t) => t !== task));
              }}
            >
              🪓
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

Todo.propTypes = {
  logs: PropTypes.array.isRequired,
  todoTasks: PropTypes.array.isRequired,
  setTodoTasks: PropTypes.func.isRequired,
  setDoingTasks: PropTypes.func.isRequired, // Assuming setDoingTasks is a required prop, adjust if necessary
};

export default Todo;
