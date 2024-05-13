/*
 * update-contact.js
 * This is a function for updating the contact page of the website. 
 */ 

const fs = require('fs'); 

module.exports = (express) => {
  const router = express.Router();

  const srcCodeDir =
    "/home/randyt/projects/fe-usa-companion-site/fe-usa-tsx/fe-usa/src/pages/Contact.tsx";

  /*
   * /add-element
   * This is a route that enables users to add elements to the contact.
   */
  router.post("/add-element", (req, res) => {
    const { type, id, data } = req.body;

    res.json({ message: "Element added successfully" });
  });

  /*
   * /update-contact
   * This is a route that enables users to update an element on the contact page.
   */
  router.post("/update-contact", (req, res) => {
    const { address, phone, email } = req.body;

    let sourceCode = fs.readFileSync(srcCodeDir, "utf8");

    const newValues = [
      address,
      `Email: ${email}`, 
      `Phone: ${phone}`
    ]
    const prevIndex = 0;
    const boxIndex = sourceCode.indexOf(`<Box>`, prevIndex + 1);
    prevIndex = boxIndex;

    // Update each Box element in the source code
    newTexts.forEach((newText, index) => {
      boxIndex = sourceCode.indexOf(`<Box>`, prevIndex + 1);
      prevIndex = boxIndex;
      if (boxIndex !== -1) {
        const closingBoxTagIndex = sourceCode.indexOf(`</Box>`, prevIndex);
        if (closingBoxTagIndex !== -1) {
          const replace = `<Box> ${newText} </Box>`
          sourceCode = sourceCode.substring(0, boxIndex) + replace + sourceCode.substring(closingBoxTagIndex + '</Box'.length);
        }
      }
    });

    fs.writeFileSync(srcCodeDir, sourceCode);

    res.json({ message: "Contact updated successfully" });
  });
  
  return router; 
}; 

