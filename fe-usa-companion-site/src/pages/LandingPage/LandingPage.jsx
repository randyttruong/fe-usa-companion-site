import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import '../Theme.scss'
import Banner from "../../components/Banner/Banner";
import TopBar from "../../components/TopBar/TopBar";

function LandingPage() {
  return (
    <>
      <div className="landing-container">

        <div className="body">
          <Banner title={'FE USA Companion Site'} />
          <NavBar />
          <div className="landing-content">
            <div className="block">
              <h1> Welcome to the Future Entrepreneurs Companion Site!</h1>
              <p>
                This is a companion site for the FE USA site. Here, you are able
                to edit the content of the site without needing to know how to
                code.
              </p>
            </div>
            <div className="block">
              <h1> Configuration Guide </h1>
              <p>
                Navigate to the list on the left for a list of subpages to edit.
              </p>

              <div className={'nested-block'}>
                <h2> Adding Components</h2>
                <p>
                  In order to add a component, please select the <tt>Add</tt> button.
                </p>
              </div>
              <div className={'nested-block'}>
                <h2> Editing Components</h2>
                <p>
                  In order to edit a component, select the <tt>Edit</tt> button.
                </p>
              </div>
              <div className={'nested-block'}>
                <h2> Deleting Components</h2>
                <p>
                  In order to delete a component, select the <tt>Delete</tt> button.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
