import './App.css';
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    // Add status field
    const newTask = { ...task, status: 'Pending' };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h1>🧠 Smart To-Do App</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
