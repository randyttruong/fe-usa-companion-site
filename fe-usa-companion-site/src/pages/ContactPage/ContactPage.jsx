import React from 'react'
import "./ContactPage.scss"
import Banner from "../../components/Banner/Banner"
import NavBar from "../../components/NavBar/NavBar"
import { ExistingComponentsTable } from '../../components/ExistingComponentsTable/ExistingComponentsTable'
import { AddComponentButton } from '../../components/AddComponentButton/AddComponentButton'

function ContactPage() {
  return (
    <>
      <NavBar />
      <div className="editor-container">
        <Banner title={'Contact Us'} />
        <div className="body">
          <div className="contact-body">
            <ExistingComponentsTable pageType={3} />
            <AddComponentButton pageType={3} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage
