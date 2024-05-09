import "./App.css";
import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import InvolvedPage from "./pages/InvolvedPage/InvolvedPage";
import Test from './pages/Test.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepageEditor" element={<Homepage />} />
          <Route path="/aboutEditor" element={<AboutPage />} />
          <Route path="/contactEditor" element={<ContactPage />} />
          <Route path="/involvedEditor" element={<InvolvedPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
