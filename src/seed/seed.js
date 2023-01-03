const db = require('../../config/connection');
const { Greene, Users } = require('../models');

const inventory = require('./items.json');
const userData = require('./users.json');


// const greene = await Greene.insertMany(inventory);
// const users  = await Users.insertMany(usersData);

db.once('open', async () => {
  // clean database
  await Greene.deleteMany({});
  await Users.deleteMany({});
  // bulk create each model
   await Greene.insertMany(inventory);
   await Users.insertMany(userData);
    
    console.log('all done!');
    process.exit(0);
 
});

