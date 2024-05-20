const fs = require('fs'); 
const path = require('path');
const { createCard, createBody, insertImage } = require('./about-components');

module.exports = (express) => {
  const router = express.Router();

  const srcCodeDir = "/home/randyt/projects/fe-usa-companion-site/fe-usa-tsx/fe-usa/src/pages/AboutPage.tsx";

  router.post("/add-element", async (req, res) => {
    const { name, profile, children } = req.body;

    try {
      const newCardData = { name, profile, body: children };
      const newCard = await createCard(newCardData);

      let sourceCode = fs.readFileSync(srcCodeDir, "utf8");

      sourceCode += `\n<CardComponent id="${newCard.id}" name="${newCard.name}" profile="${newCard.profile}" body="${newCard.body}" />`;

      fs.writeFileSync(srcCodeDir, sourceCode);

      res.json({ message: "Card added successfully", id: newCard.id });

    } catch (error) {
      console.error("Error adding element:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  router.post("/update-aboutpage", async (req, res) => {
    const { id, name, profile, children } = req.body;

    try {
      const bodyComponent = await createBody({ name, profile, children });

      const imagePath = await insertImage({ data: profile });

      let sourceCode = fs.readFileSync(srcCodeDir, "utf8");

      // Update AboutSection based on id
      const regex = new RegExp(`<CardComponent id="${id}".*?</CardComponent>`, 's');
      sourceCode = sourceCode.replace(regex, bodyComponent);

      // Insert the import statement at the first blank line
      const lines = sourceCode.split('\n');
      const importIndex = lines.findIndex(line => line.trim() === '');
      lines.splice(importIndex, 0, `import "${imagePath}";`);
      sourceCode = lines.join('\n');

      fs.writeFileSync(srcCodeDir, sourceCode);

      res.json({ message: "About page updated successfully" });
    } catch (error) {
      console.error("Error updating about page:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  return router; 
};