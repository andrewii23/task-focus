// App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Doing from "./Doing";
import Logs from "./Logs";
import Todo from "./Todo";

const App = () => {
  const [task, setTask] = useState("");
  const [logs, setLogs] = useState([]);
  const [todoTasks, setTodoTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setLogs([...logs, task]);
      setTask(""); // Clear input after adding task
    }
  };

  const removeFromLogs = (index) => {
    const newLogs = [...logs];
    const removedTask = newLogs.splice(index, 1)[0]; // Remove the task and capture it
    setLogs(newLogs);

    // Remove the task from other lists if present
    setTodoTasks(todoTasks.filter((task) => task !== removedTask));
    setDoingTasks(doingTasks.filter((task) => task !== removedTask));
  };

  return (
    <div className="container">
      <h1>To do List 📋</h1>
      <div className="add-task">
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="Type your task here..."
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="lists">
        <div className="list">
          <Logs logs={logs} removeFromLogs={removeFromLogs} />
        </div>
        <div className="list">
          <Todo
            logs={logs}
            todoTasks={todoTasks}
            setTodoTasks={setTodoTasks}
            setDoingTasks={setDoingTasks}
          />
        </div>
        <div className="list">
          <Doing
            todoTasks={todoTasks}
            doingTasks={doingTasks}
            setTodoTasks={setTodoTasks}
            setDoingTasks={setDoingTasks}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
