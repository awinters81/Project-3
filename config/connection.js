const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/greeneShop', {
// mongoose.connect('mongodb://0.0.0.0:27017/greeneShop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection 
module.exports = mongoose.connection;
