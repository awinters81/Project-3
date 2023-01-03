const mongoose = require('mongoose');
mongoose.set('strictQuery', true);  //--- newly added to avoid deprecated warnings----

mongoose.connect('mongodb://localhost:27017/greeneShop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection 
module.exports = mongoose.connection;
