
import './App.css';
import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';


function App() {
  const [title, setTitle] = useState('');
  const [missionText, setMissionText] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      // Send form data to API
      fetch('http://localhost:8000/update-homepage', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, missionText }),
      })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
  };

  return (
      <form onSubmit={handleSubmit}>
          <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
          />
          <TextField
              label="Mission Text"
              value={missionText}
              onChange={(e) => setMissionText(e.target.value)}
              fullWidth
              multiline
          />
          <Button type="submit" variant="contained" color="primary">
              Save Changes
          </Button>
      </form>
  );
};

export default App;