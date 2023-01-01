/*   ./routes/api/userRoutes.js   */

console.log("Test")

const router = require('express').Router();

const {
    getallUsers,
    createUser
    // addReaction,
    // delReaction
} = require('../../controller/users');


router
  .route('/users')
  .get(getallUsers)  
  .post(createUser);
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
