/*  /src/models/Users.js  */

const mongoose = require('mongoose');
const { Schema, model } = require('mongoose'); //  <==


// 2) -------------------   Construct a new instance of the schema class
const usersSchema = new mongoose.Schema({
  email: { type: String, required: true },    // Configure individual properties using Schema Types 
  password: { type: String, required: true },  // The type of data is set to 'String' and required is set to false, meaning it will accept null values
  // Use built in date method to get current date
  lastAccessed: { type: Date, default: Date.now }
},
  {
    toJSON: {
        virtuals: true,
        getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

//3) --------------  import/require JSON file to loop through & Seed the database --
const Users = mongoose.model('users', usersSchema);
// const handleError = (err ? handleError(err) : console.log('New User was created'))

/*
//4) ------------------------  Create a New Instance the model, a document
Users.create(
    {
        email: "podasin@gmail.com",
        password: "WhatsApp"
    },
    (err) => (err ? handleError(err) : console.log('Created New User'))
);
*/        
  
module.export = Users;

