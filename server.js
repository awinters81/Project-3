const express = require('express');
// const mongoose = require('mongoose');     //    Already on      ./config/connection
const db = require('./config/connection');
const routes = require('./src/routes');

const PORT = 3001;
const app = express();
const activity = 'Vitamin Shop'

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    // console.log(`API server for ${activity} running on port ${PORT}!`);
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
