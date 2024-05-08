const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./testingDb.db');

db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS components (id INTEGER PRIMARY KEY, component_name TEXT, component_type TEXT, data TEXT)");
});


module.exports = db; 
