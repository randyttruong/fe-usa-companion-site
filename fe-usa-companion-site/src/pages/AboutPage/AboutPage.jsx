import React from "react";
import "./AboutPage.css";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import TopBar from "../../components/TopBar/TopBar";
import { ExistingComponentsTable } from '../../components/ExistingComponentsTable/ExistingComponentsTable'

function AboutPage() {
  return (
    <>
      <div className="about-container">
        <ExistingComponentsTable 
          pageType={1}
        />
        <TopBar />
        <Banner />
        <div className="body">
          <NavBar />
          <div className="about-content"></div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
