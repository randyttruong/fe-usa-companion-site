/*
 * update-homepage.js
 * This is a function for updating the homepage of the website. 
 */

const fs = require('fs');
const sqlite3 = require('sqlite3')
const db = require('./initDB.js')

module.exports = (express) => {
  const router = express.Router();

  const srcCodeDir =
    "/home/randyt/projects/fe-usa-companion-site/fe-usa-tsx/fe-usa/src/pages/HomePage.tsx";

  /*
   * /add-element
   * This is a route that enables users to add elements to the homepage.
   */
  router.post("/add-element", (req, res) => {
    const { type, id, data } = req.body;

    res.json({ message: "Element added successfully" });
  });

  router.get('/get-homepage-components', async (req, res) => {
    const query = `SELECT * from components`


    try {
      const resp = await new Promise((resolve, reject) => {
        db.all(query, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
        })
      })

      console.log(resp);

      final = {
        'message': 'successfully captured rows',
        'length': resp.length,
        'componentsList': resp,
      }

      res.json(final)
    } catch (err) {
      final = {
        'message': 'unsuccessfully captured rows',
        'error': err,
      }

      res.json(final)
    }

  })

  /*
   * /update-homepage
   * This is a route that enables users to update an element on the homepage.
   */
  router.post("/update-homepage", (req, res) => {
    const { title, missionText } = req.body;

    let sourceCode = fs.readFileSync(srcCodeDir, "utf8");

    sourceCode = sourceCode.replace(
      /<Typography variant = "h4".*?<\/Typography>/s,
      `<Typography variant = "h4" sx = {{textAlign: 'center', fontWeight: 'bold', marginTop: 5}} > ${title} </Typography>`
    );

    fs.writeFileSync(srcCodeDir, sourceCode);

    res.json({ message: "Homepage updated successfully" });
  });

  return router;
};

