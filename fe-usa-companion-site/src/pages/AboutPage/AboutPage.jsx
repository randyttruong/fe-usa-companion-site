import React from "react";
import "./AboutPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import TopBar from "../../components/TopBar/TopBar";
import { ExistingComponentsTable } from '../../components/ExistingComponentsTable/ExistingComponentsTable'
import { NewComponent } from '../../components/NewComponentCreationForm/NewComponentCreationForm'

function AboutPage() {
  return (
    <>
      <NavBar />
      <div className="editor-container">
        <Banner title={'About Us'}/>
        <div className="body">
          <div className="about-content">
            <ExistingComponentsTable 
              pageType={1}
            />
            <NewComponent pageType={1} /> 
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
