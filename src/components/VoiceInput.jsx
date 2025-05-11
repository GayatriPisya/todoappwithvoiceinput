import React, { useState } from 'react';
import VoiceInput from './VoiceInput'; // Import the VoiceInput component

const ParentComponent = () => {
  const [taskText, setTaskText] = useState('');

  const handleVoiceResult = (text) => {
    setTaskText(text); // Update task text with recognized speech
  };

  return (
    <div>
      <h1>Voice Input Example</h1>
      <VoiceInput onResult={handleVoiceResult} />
      <p>Recognized Text: {taskText}</p>
    </div>
  );
};

export default ParentComponent;
