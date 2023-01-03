/*   ./routes/api/userRoutes.js   */

console.log("Test")

const router = require('express').Router();

<<<<<<< HEAD
const { getallUsers, createUser} = require('../../controller/users');
=======
const {
    getallUsers
    // ,createUser
>>>>>>> 5dc481d5cbfaaa71c2c350fee0fea4b6a6b02e4f
    // addReaction,
    // delReaction
// } = require('../../controller/users');


router
  .route('/')
  .get(getallUsers)  
  // .post(createUser);
//   .get(getAllThoughts)
//   .post(addThought);

router
  .route('/:id')  
//   .get(getThoughtById)
//   .put(updateThought)
//   .delete(deleteThought);


router
//   .route('/:thoughtId/reaction')
//   .post(addReaction)
//   .delete(delReaction)

module.exports = router;
