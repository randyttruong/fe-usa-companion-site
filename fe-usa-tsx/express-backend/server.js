const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); 

app.post('/update-homepage', (req, res) => {
    const { title, missionText } = req.body;
    

    const updatedSourceCode = `
        // Your updated source code here
    `;

    fs.writeFileSync('fe-usa-tsx/fe-usa/src/pages/HomePage.tsx', updatedSourceCode);

    res.json({ message: 'Homepage updated successfully' });
});

app.listen(8000, () => {
    console.log('Server running on port 8000');
});