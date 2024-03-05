const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); 



app.post('/update-homepage', (req, res) => {
    const { title, missionText } = req.body;


    let sourceCode = fs.readFileSync('C:\\Users\\NU\\DISC23-24\\fe-usa-companion-site\\fe-usa-tsx\\fe-usa\\src\\pages\\HomePage.tsx', 'utf8');


    sourceCode = sourceCode.replace(/<Typography variant = "h4".*?<\/Typography>/s, `<Typography variant = "h4" sx = {{textAlign: 'center', fontWeight: 'bold', marginTop: 5}} > ${title}</Typography>`);

    fs.writeFileSync('C:\\Users\\NU\\DISC23-24\\fe-usa-companion-site\\fe-usa-tsx\\fe-usa\\src\\pages\\HomePage.tsx', sourceCode);


    res.json({ message: 'Homepage updated successfully' });
});

app.listen(8000, () => {
    console.log('Server running on port 8000');
});