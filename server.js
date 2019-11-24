'use strict';

const express = require('express');
const app = express();
const Compendium = require('./Compendium.js').Compendium;

app.route('/').get((req, res) => {
  res.json(Compendium);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + process.env.PORT);
  console.log(Compendium);
});


