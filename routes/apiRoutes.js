const fs = require('fs');
const util = require('util');
const app = require('express').Router();
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
let notesInfo;

//GET
app.get("/notes", (req, res) => {
    readFileAsync('db/db.json', 'utf8').then(function (data) {
        notesInfo = JSON.parse(data);
        res.json(notesData)
    })
});

//POST

app.post('/notes', (req, res) => {
    readFileAsync("db/db.json", "uft8").then(function (data) {
        notesInfo = JSON.parse(data);

        let newPost = req.body;
        let currentId = notesData.length;

        newPost.id = currentId + 1;

        notesInfo.push(newPost);

        notesInfo = JSON.stringify(notesData);

        writeFileAsync('db/db.json', notesInfo);

        res.json(notesInfo);
    });
} );

