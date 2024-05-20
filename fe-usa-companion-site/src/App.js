import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Homepage from "./pages/Homepage/Homepage";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import InvolvedPage from "./pages/InvolvedPage/InvolvedPage";
import LoginPage from "./pages/LoginPage/LoginPage";  // Import LoginPage
import Test from './pages/Test.jsx';
import { useEffect } from 'react';

function App() {
  const storedIsAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
  const [isAuthenticated, setIsAuthenticated] = useState(storedIsAuthenticated);

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('isAuthenticated', true);
  };

  useEffect(() => {
    sessionStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <NavBar />
      <Routes>    
        <Route path="/login" element={ isAuthenticated ? <Navigate to="/" replace /> : <LoginPage onLogin={handleLogin} />} />
        <Route path="/" element={isAuthenticated ? <LandingPage/> : <Navigate to="/login" />} />
        <Route path="/homepageEditor" element={isAuthenticated ? <Homepage /> : <Navigate to="/login" />} />
        <Route path="/aboutEditor" element={isAuthenticated ? <AboutPage /> : <Navigate to="/login" />} />
        <Route path="/contactEditor" element={isAuthenticated ? <ContactPage /> : <Navigate to="/login" />} />
        <Route path="/involvedEditor" element={isAuthenticated ? <InvolvedPage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}



export default App;
