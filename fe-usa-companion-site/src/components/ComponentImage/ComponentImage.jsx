import React, { useState } from "react";
import "./ComponentImage.css";
import { useRef } from "react";

/* ComponentEntry()
 * This is a component that allows a user to edit a component 
 * on the original website that is an image
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
function ComponentImage({ label, value, fn }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  }

  const handleChange = (e) => {
    setSelectedImage(e.target.files[0]);
    console.log(e.target.files[0]);
    fn(e.target.files[0]);
  }

  return (
    <>
      <div className="component-image-container">
        <div className="component-image-header">
          <h1> {label} </h1>
        </div>
        <div className="component-image-content">
          <button className="component-image-upload-button" onClick={handleClick}>
            Upload Image
          </button>
          <input
            type="file"
            onChange={handleChange}
            ref={hiddenFileInput}
            style={{display: "none"}}
          />

        </div>
      </div>
    </>
  );
}

export default ComponentImage;