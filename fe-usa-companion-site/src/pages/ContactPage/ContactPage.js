import React, { useState, useEffect } from 'react'
import "./ContactPage.css"
import Banner from "../../components/Banner/Banner"
import NavBar from "../../components/NavBar/NavBar"
import TopBar from '../../components/TopBar/TopBar'
import ComponentEntry from '../../components/ComponentEntry/ComponentEntry';
import ComponentSubmit from '../../components/ComponentSubmit/ComponentSubmit';

function ContactPage() { 

    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    // handleAddressChange(): 
    // Helper function for setting 
    // the address of the contact page.
    const handleAddressChange = (str) => {
        setAddress(str);
        console.log(`This is str ${str}`)
    }

    // handlePhoneChange(): 
    // Helper function for setting 
    // the phone number of the contact page.
    const handlePhoneChange = (str) => {
        setPhone(str);
        console.log(`This is str ${str}`)
    }

    // handleEmailChange(): 
    // Helper function for setting 
    // the email of the contact page.
    const handleEmailChange = (str) => {
        setEmail(str);
        console.log(`This is str ${str}`)
    }

    // handleSubmit
    // Helper function for sending form data to the API
    const handleSubmit = async (e) => {
        e.preventDefault();

        const resp = await fetch("http://localhost:8000/update-homepage/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ address: address, phone: phone, email: email }),
        });

        const data = await resp.json();
        console.log(data.message);
    }
        
    return (
        <>
            <div className="contact-container">
                <TopBar />
                <Banner />
                <div className="body"> 
                    <NavBar />
                    <div className="contact-content">
                    <form onSubmit={handleSubmit}>
                        <ComponentEntry 
                            label="Address"
                            value={address} 
                            fn={handleAddressChange}
                        />
                        <ComponentEntry
                            label="Phone Number"
                            value={phone}
                            fn={handlePhoneChange}
                        /> 
                        <ComponentEntry
                            label="Email"
                            value={email}
                            fn={handleEmailChange}
                        /> 
                        <ComponentSubmit />
                    </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage