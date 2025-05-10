import React from 'react';

const TaskList = ({ tasks }) => {
  if (!tasks.length) {
    return <p>No tasks available.</p>;
  }

  return (
   <div className="task-list">
  <h2>Task List</h2>
  <ul>
    {tasks.map((task, index) => (
      <li className="task-item" key={index}>
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
