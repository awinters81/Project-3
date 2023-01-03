/*   ./src/models/index.js   */
const Greene = require('./Greene');
const Users = require('./Users');
// var objectType = (obj) => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

// console.log(objectType(Users));
// console.log(typeof Users);

module.exports = { Greene, Users };

// console.log(Users);