const express = require('express');
// const mongoose = require('mongoose');     //    Already on      ./config/connection
const db = require('./config/connection');


const routes = require('./src/routes');  // https://localhost

const PORT = 3001;
const app = express();
const activity = 'Greene Shop'

//
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//

app.use(routes);



db.once('open', () => {
  app.listen(PORT, () => {
    // console.log(`API server for ${activity} running on port ${PORT}!`);
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
