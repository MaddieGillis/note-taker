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
    })
});

//POST

router.post('/notes', (req, res) => {
    readFileAsync("db/db.json").then(function (data) {
        notesInfo = JSON.parse(data);

        let newPost = req.body;
        let currentId = notesInfo.length;

        newPost.id = currentId + 1;

        notesInfo.push(newPost);

        notesInfo = JSON.stringify(notesInfo);

        writeFileAsync('db/db.json', notesInfo).then(function (data) {
            console.log("Added note");
        });

        res.json(notesInfo);
    });
} );

module.exports = router;