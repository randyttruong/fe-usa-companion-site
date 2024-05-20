import React, { useState } from "react";
import "./AboutPage.css";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import TopBar from "../../components/TopBar/TopBar";
import ComponentEntry from '../../components/ComponentEntry/ComponentEntry';
import ComponentImage from '../../components/ComponentImage/ComponentImage';
import ComponentSubmit from '../../components/ComponentSubmit/ComponentSubmit';

function AboutPage() {

  const [imageData, setImageData] = useState(null);
  const [name, setName] = useState("");
    const [body, setBody] = useState("");

    // handleAddressChange(): 
    // Helper function for setting 
    // the address of the contact page.
    const handleNameChange = (str) => {
        setName(str);
        console.log(`This is str ${str}`)
    }

    // handlePhoneChange(): 
    // Helper function for setting 
    // the phone number of the contact page.
    const handleBodyChange = (str) => {
        setBody(str);
        console.log(`This is str ${str}`)
    }

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await fetch("http://localhost:8000/update-about-page/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageData, name: name, body: body }),
    });

    const data = await resp.json();
    console.log(data.message);
}

  return (
    <>
      <div className="about-container">
        <TopBar />
        <Banner />
        <div className="body">
          <NavBar />
          <div className="about-content">
            <form onSubmit={handleSubmit}>
              <ComponentImage
                label="Profile Image"
                value={imageData}
                fn={handleImageChange}
              />
              <ComponentEntry
                label="Name"
                value={name}
                fn={handleNameChange}
              /> 
              <ComponentEntry
                label="Description"
                value={body}
                fn={handleBodyChange}
              /> 
              <ComponentSubmit />
            </form>           
          </div>
        </div> 
      </div>
    </>
  );
}

export default AboutPage;
