const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
// mongoose.connect('mongodb://localhost:27017/departmentsDB', {
mongoose.connect('mongodb://0.0.0.0:27017/vitaminShop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection 
module.exports = mongoose.connection;
