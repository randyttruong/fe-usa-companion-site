/* 
 * create-component.js 
    * This is a function for creating a new component for the website.
 */ 

const app= require('../server.js');  

const express = require('express');
const router = express.Router(); 
const sqlite3 = require('sqlite3'); 

const db = require('./initDB.js')

const insertQuery = `INSERT INTO components (component_name, component_type, data) VALUES (?, ?, ?)` ;
const sanity = `SELECT * from components`; 

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

async function insertItem(params) { 
  const { } = params  


  try {
    const resp1 = await db.run(insertQuery, , (err) => {  
      if (err) { reject(err) } 
      else { resolve() }
    })

  } catch (err) {  
    return 
  }

  return 
}

async function sanityCheck() {  
  const resp = await new Promise((resolve, reject) => { 
    db.all(sanity, (err, rows) => { 
      if (err) { reject(err) A } 
      else { resolve(rows) }
    })
  })

  return resp 
}

async function createHeader(compData) {
  const { data } = compData;
  const params = ["test", "header", data];

  const final = `<Typography variant = "h4" sx = {{textAlign: 'center', fontWeight: 'bold', marginTop: 5}} > 
${data}
</Typography>`

  try {
    const resp = await new Promise((resolve, reject) => {
      db.run(insertQuery, params, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log(this.lastID);
          resolve();
        }
      });
    });

    const resp2 = await new Promise((resolve, reject) => {
      db.all(sanity, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
  return final;
}

async function createBody(compData) {
  const { data } = compData; 
  final = `
<Typography variant="body1" sx={{ pb: 5 }}>
${data}
</Typography>
` 

  const params = ["test", "textbox", data]; 

  try {
    const resp = await new Promise((resolve, reject) => { 
      db.run(insertQuery, params, (err) => {
        if (err) {
          reject(err) 
        } else {
          resolve() 
        }
      })
    }); 

    const resp2 = await new Promise((resolve, reject) => { 
      db.all(sanity, (err, rows) => {  
        if (err) { 
          reject(err)
        } else {  
          resolve(rows)
        }
      }) 
    })

    console.log(resp2); 

  } catch (err) {
    console.log(err); 

  }

  return 0;
} 

async function createMediaBox(compData) {   
  const { data } = compData 

  const resp = insertItem(data) 

}

async function createTextBox(compData) {
  const { data } = compData 
}

createBody({data: "testing testing 123"})

module.exports = router;
