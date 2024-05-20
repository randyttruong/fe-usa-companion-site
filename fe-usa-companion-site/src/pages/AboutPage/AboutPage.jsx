import React from "react";
import '../Theme.scss'
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import { ExistingComponentsTable } from '../../components/ExistingComponentsTable/ExistingComponentsTable'
import { AddComponentButton } from "../../components/AddComponentButton/AddComponentButton";

function AboutPage() {
  return (
    <>
      <NavBar />
      <div className="editor-container">
        <div className="body">
          <Banner title={'About Us'} />
          <div className={'editor-content'}>
            <AddComponentButton pageType={1} />
          </div>
          <div className="about-content">
            <ExistingComponentsTable
              pageType={1}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
