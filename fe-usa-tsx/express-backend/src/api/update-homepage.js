/*
 * update-homepage.js
 * This is a function for updating the homepage of the website. 
 */ 

const app = require('../server.js');
const express = require('express');
const router = express.Router();

const srcCodeDir = '/Users/randytruongentertainment/Projects/fe-usa-companion-site/fe-usa-tsx/fe-usa/src/pages/HomePage.tsx';
/* 
 * /add-element
 * This is a route that enables users to add elements to the homepage. 
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
router.post('/update-homepage', (req, res) => {
    //
    // fetch() -> { bodY: {} }
    //
    const { title, missionText } = req.body; 

    let sourceCode = fs.readFileSync(srcCodeDir, 'utf8');


    sourceCode = sourceCode.replace(/<Typography variant = "h4".*?<\/Typography>/s, 
    `<Typography variant = "h4" sx = {{textAlign: 'center', fontWeight: 'bold', marginTop: 5}} > ${title} </Typography>`);

    fs.writeFileSync(srcCodeDir, sourceCode);

    response.json({ message: 'Homepage updated successfully' });
});


module.exports = router; 