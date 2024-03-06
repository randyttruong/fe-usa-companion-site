import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./LandingPage.css";
import Banner from "../../components/Banner/Banner";
import TopBar from "../../components/TopBar/TopBar";

function LandingPage() {
  return (
    <>
      <div className="landing-container">
        <TopBar />
        <Banner />
        <div className="body">
          <NavBar />
          <div className="landing-content">
            <h1> Welcome to the FE USA Companion Site!</h1>
            <p>
              This is a companion site for the FE USA site. Here, you are able
              to edit the content of the site without needing to know how to
              code.
            </p>
            <h2> Getting Started </h2>
            <p>
              Navigate to the list on the left for a list of subpages to edit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
