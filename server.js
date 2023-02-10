//Brings in express and fs
const { prototype } = require('events');
const express = require('express');
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

//brings in css and js from public
app.use(express.static('public'));

//sets port for Heroku or 3001
const PORT = process.env.PORT || 3001

//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, console.log(`Server has launced on PORT ${PORT}`));