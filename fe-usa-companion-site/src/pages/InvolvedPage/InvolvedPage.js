import React from "react";
import "./InvolvedPage.css";
import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import TopBar from "../../components/TopBar/TopBar";

function InvolvedPage() {
  return (
    <>
      <div className="involved-container">
        <TopBar />
        <Banner />
        <div className="body">
          <NavBar />
          <div className="involved-content"></div>
        </div>
      </div>
    </>
  );
}

export default InvolvedPage;
