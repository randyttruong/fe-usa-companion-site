/* 
 * Homepage.js 
 * Page that enables users to edit components on 
 * the homepage of the FE USA website. 
 * 
 * TODO: 
 * - Be able to add + delete components? 
 */

import React, { useState, useEffect } from 'react'
import '../Theme.scss'
import Banner from '../../components/Banner/Banner'
import NavBar from '../../components/NavBar/NavBar';
import { ExistingComponentsTable } from '../../components/ExistingComponentsTable/ExistingComponentsTable'
import { AddComponentButton } from '../../components/AddComponentButton/AddComponentButton'
import { ContinueButton } from '../../components/ContinueWizard/ContinueButton';


function Homepage() {
  const debug = 1;
  const [title, setTitle] = useState("");
  const [missionText, setMissionText] = useState("");

  const [globalMode, setGlobalMode] = useState(0);
  const [selectedComp, setSelectedComp] = useState(
    { 'name': 'default' }
  )

  const editToggleHandler = (event) => {
    if (globalMode === 1) {
      setGlobalMode(0)
    } else {
      setGlobalMode(1)
    }
  }

  const deleteToggleHandler = (event) => {
    if (globalMode === 2) {
      setGlobalMode(0)
    } else {
      setGlobalMode(2)
    }
  }

  const [componentList, setComponentList] = useState([])

  return (
    <>
      <NavBar />
      <div className="editor-container">
        <div className='body'>
          <Banner title={'Homepage'} />
          {/*<div> this is the globalMode: {globalMode}</div>*/}
          {/*debug &&
            <div>
              <div>this is the globalMode: {globalMode}</div>
              <div>this is the selectedComp: {selectedComp['name']} {selectedComp['desc']} {selectedComp['type']}</div>
  </div>*/}
          <div className={'editor-content'}>
            <AddComponentButton
              pageType={0}
              globalMode={globalMode}
              editToggleHandler={editToggleHandler}
              deleteToggleHandler={deleteToggleHandler}
              selectedComp={selectedComp}
            />
          </div>
          <ExistingComponentsTable
            componentList={componentList}
            pageType={0}
            globalMode={globalMode}
            setGlobalMode={setGlobalMode}
            selectedComp={selectedComp}
            setSelectedComp={setSelectedComp}
          />
          {(globalMode !== 0
            && selectedComp['default'] === 0)
            && <ContinueButton
              globalMode={globalMode}
              selectedComp={selectedComp}
            />
          }
        </div>

      </div>
    </>
  );
};

export default Homepage;
