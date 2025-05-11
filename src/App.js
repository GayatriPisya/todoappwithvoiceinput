import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';

const API_URL = 'http://localhost:8080/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setTasks(res.data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  const addTask = (task) => {
    if (editTask) {
      axios.put(`${API_URL}/${editTask.id}`, task)
        .then(res => {
          setTasks(tasks.map(t => t.id === editTask.id ? res.data : t));
          setEditTask(null);
        });
    } else {
      axios.post(API_URL, task)
        .then(res => setTasks([...tasks, res.data]));
    }
    setShowForm(false);
  };

  const deleteTask = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => setTasks(tasks.filter(t => t.id !== id)));
  };

  const toggleComplete = (id) => {
    const task = tasks.find(t => t.id === id);
    const updated = { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' };
    axios.put(`${API_URL}/${id}`, updated)
      .then(res => setTasks(tasks.map(t => t.id === id ? res.data : t)));
  };

  const filteredTasks = tasks.filter(
    t =>
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-primary mb-3" onClick={() => setShowForm(!showForm)}>+ Add Task</button>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {showForm && <TaskForm onSubmit={addTask} initialData={editTask} />}
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleComplete}
        onEdit={(t) => { setEditTask(t); setShowForm(true); }}
      />
    </div>
  );
}

export default App;
