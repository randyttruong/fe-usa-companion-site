import React, { useState, useEffect } from 'react'
import "./InvolvedPage.css";
import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import TopBar from "../../components/TopBar/TopBar";
import ComponentEntry from '../../components/ComponentEntry/ComponentEntry';
import ComponentImage from '../../components/ComponentImage/ComponentImage';

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
        type: img.type,
        size: img.size,
        data: str64
      });
    });
  }

  // handleSubmit
  // Helper function for sending form data to the API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try{ 
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
      <div className="involved-container">
        <TopBar />
        <Banner />
        <div className="body">
          <NavBar />
          <div className="involved-content">
          <form onSubmit={handleSubmit}>
            <ComponentImage
              label="Image"
              value={imageData}
              fn={handleImageChange}
            />
          </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvolvedPage;
