const mongoose = require('mongoose');

// 2) -------------------   Construct a new instance of the schema class
const UsersSchema = new mongoose.Schema({
  email: { type: String, required: true },    // Configure individual properties using Schema Types 
  password: { type: String, required: true },  // The type of data is set to 'String' and required is set to false, meaning it will accept null values
  // Use built in date method to get current date
  lastAccessed: { type: Date, default: Date.now },
});

//3) --------------  import/require JSON file to loop through & Seed the database --
const Users = mongoose.model('Users', UsersSchema);
const handleError = (err ? handleError(err) : console.log('New User was created'))

//4) ------------------------  Create a New Instance the model, a document
Users.create(
    {
        email: "podasin@gmail.com",
        password: "WhatsApp"
    },
    (err) => (err ? handleError(err) : console.log('Created New User'))
);
        
  
module.export = Users;

