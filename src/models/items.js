const mongoose = require('mongoose');

// 2) -------------------   Construct a new instance of the schema class
const GreeneSchema = new mongoose.Schema({
  product: { type: String, required: true },    // Configure individual properties using Schema Types 
  brand: { type: String, required: true },  // The type of data is set to 'String' and required is set to false, meaning it will accept null values
  price: {type: Number, required: true },
  form: String,  // capsules/liquid.. 
  quantity: Number,
  inStock: Boolean,
  // Use built in date method to get current date
  lastAccessed: { type: Date, default: Date.now },
});

//3) --------------  import/require JSON file to loop through & Seed the database --

