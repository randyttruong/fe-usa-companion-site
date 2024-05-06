const app = require('../server')
const express = require('express') 
const db = require('./initDB.js') 
const router = express.Router()  


router.get('/reset-db', async (req, res) => {
  const table = 'components' 

  const delQuery = `DROP TABLE IF EXISTS ${table}`; 

  const resp = await new Promise((resolve, reject) => {  
    db.run(delQuery, (err) => { 
      if (err) { reject(err) } 
      else { resolve() }
    })
  })

  const resp2 = await new Promise((resolve, reject) => {  
    const createQuery = `CREATE TABLE IF NOT EXISTS components (id INTEGER PRIMARY KEY, component_name TEXT, component_type TEXT, data TEXT)`
    db.run(createQuery, (err) => {  
      if (err) { reject(err) } 
      else { resolve() }
    }); 
  })

  const resp3 = await new Promise((resolve, reject) => {  
    const sanity = `SELECT * FROM components` 
    db.all(sanity, (err, rows) => {  
      if (err) { reject(err) } 
      else { resolve(rows) }
    });
  })

  res.json({"message": "successful",
            "data": resp3, 
            "length": resp3.length, })

  console.log('Here is the length of the database, which should be 0,', resp3.length); // just check if the database actually reset lol 

}) 

router.get('/show-db', async (req, res) => {  
  const sanity = `SELECT * FROM components`

  const resp = await new Promise((resolve, reject) => {  
    db.all(sanity, (err, rows) => {  
      if (err) { reject(err) } 
      else { resolve(rows) }
    })
  })

  console.log('This is the current state of the database', resp) 

  res.json({"message": "success", 
             "data": resp})
})

module.exports = router; 

