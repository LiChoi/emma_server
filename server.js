'use strict';

const express = require('express');
const app = express();
const Compendium = require('./Compendium.js').Compendium;
const Conditions = require('./Conditions.js').Conditions;

app.route('/').get((req, res) => {
  res.json({Compendium: Compendium, Conditions: Conditions});
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + process.env.PORT);
});


