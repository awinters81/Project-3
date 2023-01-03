const express = require('express');
// const mongoose = require('mongoose');     //    Already on      ./config/connection
const db = require('./config/connection');
const {Greene, Users} = require('./src/models');

const routes = require('./src/routes');  // https://localhost
const PORT = process.env.PORT || 3001;
// const PORT = 3001;
const app = express();
const activity = 'Greene Shop'

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/all-users', (req, res) => {
  Users.find({}, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Internal Server Error' });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/all-items', (req, res) => {
  Greene.find({}, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Internal Server Error' });
    } else {
      res.status(200).json(result);
    }
  });
});

//



app.use(routes);





db.once('open', () => {
  app.listen(PORT, () => {
    // console.log(`API server for ${activity} running on port ${PORT}!`);
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
