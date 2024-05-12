import React, { useState, useEffect } from 'react'
import "./InvolvedPage.scss";
import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import ComponentImage from '../../components/ComponentImage/ComponentImage';
import ComponentSubmit from '../../components/ComponentSubmit/ComponentSubmit';
import { ExistingComponentsTable } from '../../components/ExistingComponentsTable/ExistingComponentsTable'
import { AddComponentButton } from '../../components/AddComponentButton/AddComponentButton';

function InvolvedPage() {
  const [imageData, setImageData] = useState(null);

  const convertImageToBase64 = (file, callback) => {
    const reader = new FileReader();

    reader.onloadend = function() {
      const str64 = reader.result.split(",")[1];
      callback(str64);
    }

    reader.readAsDataURL(file);
  }

  const handleImageChange = (img) => {
    convertImageToBase64(img, function(str64) {
      setImageData({
        name: img.name,
        data: str64
      });
    });
  }

  // handleSubmit
  // Helper function for sending form data to the API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch("http://localhost:8000/update-homepage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ imageData }),
        });

      if (resp.ok) {
        const data = resp.json();
        console.log("Successfully updated involvedpage");
        console.log(data);
      } else {
        throw new Error("Failed to update involvedpage");
      }

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <NavBar />
      <div className="editor-container">
        <Banner title={'Getting Involved'} />
        <div className="body">
          <div className="involved-content">
            <ExistingComponentsTable pageType={2} />
            <AddComponentButton pageType={2} />
            <form onSubmit={handleSubmit}>
              <ComponentImage
                label="Image"
                value={imageData}
                fn={handleImageChange}
              />
              <ComponentSubmit />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvolvedPage;
