import React, { useState, useEffect } from 'react'
import './Homepage.css'
import { TextField, Button } from '@mui/material';
import Banner from '../../components/Banner/Banner'
import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar/TopBar';
import ComponentEntry from '../../components/ComponentEntry/ComponentEntry';

const handleSubmit = (e) =>  { 

}



function Homepage() {  
  const [title, setTitle] = useState("");
  const [missionText, setMissionText] = useState("");

    return (
      <>
        <div className="homepage-editor-container">
          <TopBar />
          <Banner />
          <div className='body'> 
          <NavBar />
            <div className="homepage-editor-content">
            <form onSubmit={handleSubmit}>
              <div> 
                <h1> Title </h1>
              <TextField
                className="submission"
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                multiline
              />
              </div>
              <ComponentEntry 
                label="Mission Statement Description"
                value={missionText}
              /> 
              <div> 
                <Button type="submit" variant="contained" color="primary">
                  Save Changes
                </Button>
              </div> 
            </form>
            </div>
          </div>
        </div>
      </>
    );
};

export default Homepage;