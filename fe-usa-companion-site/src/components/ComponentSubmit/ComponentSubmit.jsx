import React from 'react'
import "./ComponentSubmit.css"
import { Button } from "@mui/material"

function ComponentSubmit() {
  return (
    <>
      <div className="component-submit-container">
        <Button type="submit" variant="contained" color="primary">
          Save Changes
        </Button>
      </div>
    </>
  );
}

export default ComponentSubmit;
