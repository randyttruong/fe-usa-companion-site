const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); 

api_updatehomepage = require("./api/update-homepage.js");
api_createcomponent = require("./api/create-component.js");
api_updategetinvolved = require("./api/update-get-involved.js")

/* 
 * Adding routes to the Express app 
 * TODO: Add middleware 
 */ 
app.use('/update-homepage', api_updatehomepage);
app.use("/create-component", api_createcomponent);
app.use("/update-involvedpage", api_updategetinvolved);
/* 
 * update-homepage 
 * 
 */ 

app.listen(8000, () => {
    console.log('Server running on port 8000');
});

module.exports = app; 