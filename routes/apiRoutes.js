const fs = require('fs');
const util = require('util');
const app = require('express');
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
const router = require('express').Router();

let notesInfo;



//GET
router.get("/notes", (req, res) => {
    readFileAsync('db/db.json').then(function (data) {
        notesInfo = JSON.parse(data);
        res.json(notesInfo);

        console.log(`The notes info is passing it's: ${notesInfo}`);

    });
});

//POST

router.post('/notes', (req, res) => {
    readFileAsync("db/db.json").then(function (data) {
        notesInfo = JSON.parse(data);

        let newNote = req.body;
        let currentId = notesInfo.length;

        newNote.id = currentId + 1;

        notesInfo.push(newNote);

        notesInfo = JSON.stringify(notesInfo);

        writeFileAsync('db/db.json', notesInfo).then(function (data) {
            console.log("Added note");
        });

        res.json(notesInfo);
    });
} );

module.exports = router;