const express = require('express'); 
const cors = require('cors'); 

// Instantiate the app 
const app = express();


app.use(express.json()); 
app.use(express.cors()); 


// localhost:8000/hello-world
// functions that people can connect to 
// GET, POST, UPDATE, DELETE 
app.get('/hello-world', (request, response) => { 

    console.log("Hello world");
    response.send("Hello world");
    // DO SOMETHING 

});


app.listen(8000, () => { 
    console.log("Started listening on port 8000")
})