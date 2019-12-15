'use strict';

const express = require('express');
const app = express();
const Compendium = require('./Compendium.js').Compendium;
const Conditions = require('./Conditions.js').Conditions;

app.route('/').get((req, res) => {
  res.json({Compendium: Compendium, Conditions: Conditions});
});

app.route('/privacy').get((req, res) => {
  res.send(
    "Emma stores all the information you provide to her on your phone. Therefore, this information is only as secure as your phone. It is your responsibility to keep your phone safe. " + 
    "Emma does not transmit this information anywhere else except when you ask her to open up your phone's gmail account to pre-fill the email body. Even then, you must input the email address and hit 'send' before any information is sent. " +
    "Emma does not communicate with external devices except when you touch the 'Update' button to update her clinical knowledge. This sends a request to pull information from a server. No health information is transmitted from your phone in this request."
  );
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + process.env.PORT);
});


