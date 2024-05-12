const express = require('express');
const fs = require('fs');
const cors = require('cors');
const db = require('./api/initDB.js')

const app = express();
app.use(express.json());
app.use(cors()); 

api_updatehomepage = require("./api/update-homepage.js")(express);
api_updateinvolvedpage = require("./api/update-involvedpage.js")(express);
api_utils = require('./api/utils.js')

/* 
 * Adding routes to the Express app 
 * TODO: Add middleware 
 */ 
app.use('/', api_updatehomepage);
app.use('/', api_updateinvolvedpage);
app.use('/utils', api_utils)

/* 
 * update-homepage 
 * 
 */ 

app.listen(8000, () => {
    console.log('Server running on port 8000');
});

module.exports = app;