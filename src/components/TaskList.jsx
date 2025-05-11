import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => {
  if (!tasks.length) return <p className="text-muted">No tasks to display.</p>;
  
  return (
    <div className="row">
      {tasks.map(task => (
        <div key={task.id} className="col-md-6 col-sm-12 mb-4">
          <TaskItem task={task} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
