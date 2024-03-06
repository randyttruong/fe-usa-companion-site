/* 
 * Homepage.js 
 * Page that enables users to edit components on 
 * the homepage of the FE USA website. 
 * 
 * TODO: 
 * - Be able to add + delete components? 
 */ 

import React, { useState, useEffect } from 'react'
import './Homepage.css'
import Banner from '../../components/Banner/Banner'
import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar/TopBar';
import ComponentEntry from '../../components/ComponentEntry/ComponentEntry';
import ComponentSubmit from '../../components/ComponentSubmit/ComponentSubmit';

function Homepage() {  
  const [title, setTitle] = useState("");
  const [missionText, setMissionText] = useState("");

  // handleTitleChange(): 
  // Helper function for setting 
  // the title of the homepage.
  const handleTitleChange = (str) => {
    setTitle(str);
    console.log(`This is str ${str}`)
  }

  // handleMissionTextChange()
  // Helper function for setting the 
  // description of the homepage 
  const handleMissionTextChange = (str) => { 
    setMissionText(str);
  }

  // handleSubmit
  // Helper function for sending form data to the API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try{ 
      const resp = await fetch("http://localhost:8000/update-homepage", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, missionText }),
      }); 

      if (resp.ok) { 
        const data = resp.json();
        console.log("Successfully updated homepage");
        console.log(data);
      } else { 
        throw new Error("Failed to update homepage"); 
      }

    } catch (err) { 
      console.error(err);
    }
  }

    return (
      <>
        <div className="homepage-editor-container">
          <TopBar />
          <Banner />
          <div className='body'> 
          <NavBar />
            <div className="homepage-editor-content">
            <form onSubmit={handleSubmit}>
              <ComponentEntry 
                label="Title"
                value={title} 
                fn={handleTitleChange}
              />
              <ComponentEntry
                label="Mission Statement Description"
                value={missionText}
                fn={handleMissionTextChange}
              /> 
              <ComponentSubmit />
            </form>
            </div>
          </div>
        </div>
      </>
    );
};

export default Homepage;