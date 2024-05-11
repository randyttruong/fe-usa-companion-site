import React from 'react'
import "./ContactPage.scss"
import Banner from "../../components/Banner/Banner"
import NavBar from "../../components/NavBar/NavBar"
import TopBar from '../../components/TopBar/TopBar'
import { ExistingComponentsTable } from '../../components/ExistingComponentsTable/ExistingComponentsTable'
import { NewComponent } from '../../components/NewComponentCreationForm/NewComponentCreationForm'

function ContactPage() { 
  return (
    <>
          <NavBar />
      <div className="editor-container">
        <Banner title={'Contact Us'}/>
        <div className="body"> 
          <div className="contact-body">
            <ExistingComponentsTable 
              pageType={3}
            /> 
            <NewComponent 
              pageType={3}
              /> 
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage
