/*   ./src/controller/userController.js   */

const { Users } = require('../models');

const userController = {
    getallUsers (req, res) {
        alert("get users")
        Users.find().then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No users found!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err))
    },


    createUser({ body }, res) {
        console.log('Create Users body')
        Users.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    }
}

module.exports = userController