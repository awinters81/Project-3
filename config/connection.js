const mongoose = require('mongoose');
// Mern Activity 1 connection 
mongoose.set('strictQuery', true);  // new pho added

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/greeneShop',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;


// // prior connection --
// const mongoose = require('mongoose');
// mongoose.set('strictQuery', true);  //--- newly added to avoid deprecated warnings----

// mongoose.connect('mongodb://localhost:27017/greeneShop', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Export connection 
// module.exports = mongoose.connection;