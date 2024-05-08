/*
 * update-homepage.js
 * This is a function for updating the homepage of the website. 
 */ 

const fs = require('fs'); 

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

