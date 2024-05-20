const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./testingDb.db');

const dropQuery = "DROP TABLE components"
const createQuery = "CREATE TABLE IF NOT EXISTS components (id INTEGER PRIMARY KEY, component_name TEXT, component_type TEXT, data TEXT)"
const insertQuery = "INSERT INTO components (component_name, component_type, data) VALUES (?, ?, ?)"
const paramList = [
  ['Hero Header', 'header1', 'Our Mission'],
  ['Body 1', 'body1', 'Future Entrepreneurs USA is a Chicago-based non-profit organization whose mission is to create an educational environment that provides opportunities and empowers young adults to learn business skills through both hands-on experience and training lessons. We plan to provide youth with resources that will increase their chances of achieving success in their business.'] ,
  ['Body 2', 'body1', 'Our vision is to build an organization that has the right programs, information, insights, experience, and services that help young adults build successful and profitable businesses.'] 
 
]

db.serialize(() => {
  db.run(dropQuery);
  db.run(createQuery);
  paramList.map((params) => {
    db.run(insertQuery, params)
  })
});


module.exports = db; 
