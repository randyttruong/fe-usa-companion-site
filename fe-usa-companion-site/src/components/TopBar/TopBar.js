import React from "react";
import "./TopBar.css";

/*
 * TODO
 * 1. Make the test on topbar white
 * 2. Add a sign in feature
 */

// TopBar
function TopBar({ name }) {
  return (
    <>
      <div className="topbar-container">
        <div className="topbar-content">Signed in as {name}</div>
      </div>
    </>
  );
}

export default TopBar;
