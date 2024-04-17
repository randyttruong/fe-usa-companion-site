/* 
 * create-component.js 
    * This is a function for creating a new component for the website.
 */ 

const app = require('../server.js');
const express = require('express');
const router = express.Router(); 

// What are the different attributes of a React component? 
// - Component Type 
// - Classname / id 
// - data

class componentStructure { 
    constructor(type, id, data) {
        this.type = type; 
        this.id = id;
        this.data = data;
    } 
}

function createHeader() { 
    return 0; 
}

function createTextBox(params) {
    return 0;
}

router.post("/create-component", (req, res) => {


})

module.exports = router;