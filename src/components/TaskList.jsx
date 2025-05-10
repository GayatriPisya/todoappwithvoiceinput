import React from 'react';

const TaskList = ({ tasks }) => {
  if (!tasks.length) {
    return <p>No tasks available.</p>;
  }

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Priority: <strong>{task.priority}</strong></p>
            <p>Status: <em>{task.status || 'Pending'}</em></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
