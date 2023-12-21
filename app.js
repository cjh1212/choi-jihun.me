const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/ctf', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/ctf.html'));
});

app.get('/data', (req, res) => {
    const directoryPath = path.join(__dirname, 'public/data/sections');
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send(err);
        }
        
        let fileContents = [];
        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const parts = content.split('---');
            const filePart = file.split('.')[1];
            fileContents.push({ name: filePart, content: parts[1], emj: parts[0]});
        });

        res.json(fileContents)
    });
});

app.get('/desc', (req, res) => {
    fs.readFile(path.join(__dirname, 'public/data/description/description'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send(err);
        }
        
        res.json(data);
    })
});

app.listen(80, () => {
    console.log('Server running on port 80')
});