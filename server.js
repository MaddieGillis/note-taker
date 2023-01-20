//Brings in express and fs
const express = require('express');
const fs = require('fs');

const app = express();

//sets port for Heroku or 3001
const PORT = process.env.PORT || 3001

//Sets express to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());