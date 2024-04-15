import PropTypes from "prop-types";

const Logs = ({ logs, removeFromLogs }) => {
  return (
    <>
      <h2>Logs 📁</h2>
      <ul>
        {logs.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button className="remove" onClick={() => removeFromLogs(index)}>
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

Logs.propTypes = {
  logs: PropTypes.array.isRequired,
  removeFromLogs: PropTypes.func.isRequired,
};

export default Logs;
