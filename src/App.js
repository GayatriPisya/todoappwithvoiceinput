import './App.css';
// App.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const addTask = (task) => {
    if (editTask) {
      setTasks(
        tasks.map((t) => (t.id === editTask.id ? { ...task, id: t.id } : t))
      );
      setEditTask(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now() }]);
    }
    setShowForm(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task
      )
    );
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <button
          className="btn btn-primary mb-3"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Task
        </button>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {showForm && (
        <TaskForm
          onSubmit={addTask}
          initialData={editTask}
        />
      )}
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleComplete}
        onEdit={(task) => {
          setEditTask(task);
          setShowForm(true);
        }}
      />
    </div>
  );
}

export default App;
