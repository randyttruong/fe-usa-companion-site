import React from "react";
import "./AboutPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import { ExistingComponentsTable } from '../../components/ExistingComponentsTable/ExistingComponentsTable'
import { AddComponentButton } from "../../components/AddComponentButton/AddComponentButton";

function AboutPage() {
  return (
    <>
      <NavBar />
      <div className="editor-container">
        <Banner title={'About Us'} />
        <div className="body">
          <div className="about-content">
            <ExistingComponentsTable
              pageType={1}
            />
            <AddComponentButton pageType={1} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
