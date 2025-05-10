import React, { useState } from 'react';
import VoiceInput from './VoiceInput';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'Medium',
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleVoiceInput = (text) => {
    setTask({ ...task, title: text }); // voice fills the title
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim() === '') return alert("Title is required");

    onAddTask(task); // send to parent or API
    setTask({ title: '', description: '', priority: 'Medium' }); // reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task title"
      />
      <VoiceInput onResult={handleVoiceInput} />

      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Description"
      ></textarea>

      <select name="priority" value={task.priority} onChange={handleChange}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
