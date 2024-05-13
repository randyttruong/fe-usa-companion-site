
const fs = require('fs'); 
const { createCard, createBody, insertImage } = require('./about-components');

module.exports = (express) => {
  const router = express.Router();

  const srcCodeDir =
    "/home/randyt/projects/fe-usa-companion-site/fe-usa-tsx/fe-usa/src/pages/AboutPage.tsx";


  router.post("/add-element", async (req, res) => {
    const { name, profile, children } = req.body;

    try{

      const newCardData = { name, profile, body: children };
      const newCard = await createCard(newCardData);

      let sourceCode = fs.readFileSync(srcCodeDir, "utf8");

      sourceCode += `\n${newCard.header}\n${newCard.body}`;

      fs.writeFileSync(srcCodeDir, sourceCode);

      res.json({ message: "Card added successfully" });

    } 
    
    catch (error) {
      console.error("Error adding element:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  
  router.post("/update-aboutpage", async (req, res) => {
    const { name, profile, children } = req.body;

    try {
      
      const bodyComponent = await createBody({ name, profile, children });

      await insertImage({ data: profile });

      let sourceCode = fs.readFileSync(srcCodeDir, "utf8");

      
      sourceCode = sourceCode.replace(
        /<AboutSection.*?<\/AboutSection>/s,
        bodyComponent
      );

     
      fs.writeFileSync(srcCodeDir, sourceCode);

      res.json({ message: "About page updated successfully" });
    } catch (error) {
      console.error("Error updating about page:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  return router; 
}; 

