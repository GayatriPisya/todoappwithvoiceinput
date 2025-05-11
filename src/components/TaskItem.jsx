// components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, onDelete, onToggle, onEdit }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">
          <input
            type="checkbox"
            className="form-check-input me-2"
            checked={task.status === 'Completed'}
            onChange={() => onToggle(task.id)}
          />
          {task.title}
        </h5>
        <p className="card-text">{task.description}</p>
        <p className="card-text">
          <strong>Priority:</strong> {task.priority} | <strong>Status:</strong> {task.status}
        </p>
        {task.dueDate && <p className="card-text"><strong>Due:</strong> {task.dueDate}</p>}
        <button className="btn btn-sm btn-info me-2" onClick={() => onEdit(task)}>Edit</button>
        <button className="btn btn-sm btn-danger" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
