/* 
 * Homepage.js 
 * Page that enables users to edit components on 
 * the homepage of the FE USA website. 
 * 
 * TODO: 
 * - Be able to add + delete components? 
 */ 

import React, { useState, useEffect } from 'react'
import './Homepage.scss'
import Banner from '../../components/Banner/Banner'
import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar/TopBar';
import ComponentEntry from '../../components/ComponentEntry/ComponentEntry';
import ComponentSubmit from '../../components/ComponentSubmit/ComponentSubmit';
import { ExistingComponentsTable } from '../../components/ExistingComponentsTable/ExistingComponentsTable'
import { NewComponent } from '../../components/NewComponentCreationForm/NewComponentCreationForm'

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

    const resp = await fetch("http://localhost:8000/update-homepage/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, missionText: missionText }),
    });

    const data = await resp.json();
    console.log(data.message);
  } 

    return (
      <>
          <NavBar />
        <div className="editor-container">
          <Banner title={'Homepage'}/>
          <div className='body'> 
            <div className="homepage-editor-content">
            <ExistingComponentsTable pageType={0} />
            <NewComponent pageType={0}/> 
            </div>
          </div>
        </div>
      </>
    );
};

export default Homepage;
