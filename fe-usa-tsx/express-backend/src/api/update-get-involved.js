/*
 * update-homepage.js
 * This is a function for updating the homepage of the website. 
 */ 

const app = require('../server.js');
const express = require('express');
const fs = require('fs');
const router = express.Router();

const srcCodeDir = '/Users/randytruongentertainment/Projects/fe-usa-companion-site/fe-usa-tsx/fe-usa/src/pages/InvolvedPage.tsx';
/* 
 * /add-element
 * This is a route that enables users to add elements to the invovled page. 
 */ 
router.post('/add-element', (req, res) => {  
    const { type, id, data } = req.body;

    const newComponent = new componentStructure(type, id, data); // Create metadata data structure 

    res.json({ message: 'Element added successfully' });
});

/* 
 * /update-homepage
 * This is a route that enables users to update an element on the homepage. 
 * 
 * How do I enable users to 
 */ 
router.post('/update-involvedpage', (req, res) => {
    //
    // fetch() -> { bodY: {} }
    //
    const { imageData } = req.body.content; 

    let sourceCode = fs.readFileSync(srcCodeDir, 'utf8');

    const decodedImageData = Buffer.from(imageData, 'base64');
    console.log(decodedImageData);
    fs.writeFile('image.jpg', decodedImageData, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            res.status(500).send('Error writing file.');
          } else {
            console.log('Image data written to file.');
            res.send('Image data processed and written to file successfully.');
          }
    });

    fs.writeFileSync(srcCodeDir, sourceCode);

    response.json({ message: 'Involved page updated successfully' });
});


module.exports = router; 