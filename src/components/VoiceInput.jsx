import React, { useState } from 'react';

// This component will listen to your voice and pass the text to another component
const VoiceInput = ({ onResult }) => {
  const [listening, setListening] = useState(false);

  const handleVoice = () => {
    const recognition = new window.webkitSpeechRecognition(); // built-in browser tool
    recognition.lang = 'en-US'; // language
    recognition.interimResults = false; // only final results
    recognition.maxAlternatives = 1; // best match only

    // show "Listening..." while the mic is on
    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    // when speech is recognized
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript; // get the text
      onResult(transcript); // send it to the parent
    };

    recognition.start(); // begin listening
  };

  return (
    <button onClick={handleVoice}>
      {listening ? 'Listening...' : '🎤 Add by Voice'}
    </button>
  );
};

export default VoiceInput;
