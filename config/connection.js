const mongoose = require('mongoose');

mongoose.set('strictQuery', true); //--- newly added to avoid deprecated warnings----

// (node:19528) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` 
// option will be switched back to `false` by default in Mongoose 7. Use 
// `mongoose.set('strictQuery', false);` if you want to prepare for this change. 
// Or use `mongoose.set('strictQuery', true);` to suppress this warning.
// (Use `node --trace-deprecation ...` to show where the warning was created)


mongoose.connect('mongodb://localhost:27017/greeneShop', {
// mongoose.connect('mongodb://0.0.0.0:27017/greeneShop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection 
module.exports = mongoose.connection;
