import React, { useState, useEffect } from 'react';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const TaskForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('Pending');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setPriority(initialData.priority);
      setStatus(initialData.status);
      setDueDate(initialData.dueDate);
    }
  }, [initialData]);

  const handleVoiceInput = (setter) => {
    if (!SpeechRecognition) return alert('Speech Recognition not supported');
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onresult = (e) => setter(e.results[0][0].transcript);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert('Title is required');
    onSubmit({ title, description, priority, status, dueDate });
    setTitle('');
    setDescription('');
    setPriority('Medium');
    setStatus('Pending');
    setDueDate('');
  };

  return (
    <form className="card card-body mb-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <div className="input-group">
          <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
          <button type="button" className="btn btn-outline-secondary" onClick={() => handleVoiceInput(setTitle)}>🎤</button>
        </div>
      </div>
      <div className="form-group">
        <label>Description</label>
        <div className="input-group">
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button type="button" className="btn btn-outline-secondary" onClick={() => handleVoiceInput(setDescription)}>🎤</button>
        </div>
      </div>
      <div className="form-group">
        <label>Priority</label>
        <select className="form-control" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
      <div className="form-group">
        <label>Status</label>
        <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input type="date" className="form-control" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </div>
      <button className="btn btn-success mt-3" type="submit">{initialData ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;
