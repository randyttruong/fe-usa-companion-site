import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import "./LoginPage.scss";

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Check if the entered credentials are correct
    // frontend version
    // if (email === "fe_usa" && password === "admin1") {
    //   onLogin();
    // } else {
    //   setError("Invalid username or password");
    // }

    try{ 
      const resp = await fetch("http://localhost:8000/login", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }); 

      if (resp.ok) { 
        const data = await resp.json();
        if(data.message === "Success"){
          onLogin();
        }
        else{
          setError("Invalid username or password");
        }
      } else { 
        throw new Error("Failed to update homepage"); 
      }

    } catch (err) { 
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
        <TextField
          label="Username"
          type="text"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
      <button
        className={'create-button'}
        onClick={handleLogin}
      >
        Create
      </button>
    </div>
  );
}

export default LoginPage;
