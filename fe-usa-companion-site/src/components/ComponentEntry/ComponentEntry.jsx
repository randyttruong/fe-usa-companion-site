import React, { useState } from "react";
import "./ComponentEntry.css";
import { TextField, Button } from "@mui/material";

/* ComponentEntry()
 * This is a component that allows a user to edit a component 
 * on the original website. 
 * 
 * Main idea: 
 * 1. Show the user the current name of the component 
 * 2. Show the user the current value of the component 
 * 3. Give the user the ability to edit the current value of the 
 * component. 
 * 
 * Props: 
 * - label 
 * - value 
 * - fn
 */
function ComponentEntry({ label, value, fn }) {

  const [val, SetVal] = useState(""); 

  const handleSubmission = (e) => { 
    SetVal(e.target.value)
    console.log(e.target.value)
    fn(val);
  }

  return (
    <>
      <div className="component-entry-container">
        <div className="component-entry-header">
          <h1> {label} </h1>
        </div>
        <div className="component-entry-content">
          <TextField
            className="submission"
            id={label}
            label={label}
            value={val}
            onChange={handleSubmission}
            multiline
          />
        </div>
      </div>
    </>
  );
}

export default ComponentEntry;
