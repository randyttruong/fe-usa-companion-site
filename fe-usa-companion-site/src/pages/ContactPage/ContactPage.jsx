import React from 'react'
import "./ContactPage.css"
import Banner from "../../components/Banner/Banner"
import NavBar from "../../components/NavBar/NavBar"
import TopBar from '../../components/TopBar/TopBar'
import { ExistingComponentsTable } from '../../components/ExistingComponentsTable/ExistingComponentsTable'

function ContactPage() { 
  return (
    <>
      <div className="contact-container">
        <ExistingComponentsTable 
          pageType={3}
        /> 
        <TopBar />
        <Banner />
        <div className="body"> 
          <NavBar />
          <div className="contact-body">
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage
