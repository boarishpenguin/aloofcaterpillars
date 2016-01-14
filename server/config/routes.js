// links to controllers
var userController = require('../controllers/userController.js');
var mealController = require('../controllers/mealController.js');
var feedbackController = require('../controllers/feedbackController.js');
var tagController = require('../controllers/tagController.js');
var helper = require('./helpers.js');

// Middleware. Add below as needed

module.exports = function(app, express) {
  // retrieving and deleting a specific user
  app.get('/boorish/users/:id', helper.decode, userController.getUser); // retrieve a user
  app.post('/boorish/users', userController.create); // create a new user
  app.delete('/boorish/users/', helper.decode, userController.removeUser); // remove a user
  app.post('/boorish/users/signin', userController.signin); // sign in a user
  app.get('/boorish/users/signedin', userController.checkAuth); // check user authorization

  // creating, retreiving, and removing meals
  app.get('/boorish/meals', helper.decode, mealController.allAvailableMeals); // get all meals
  app.post('/boorish/meals', helper.decode, mealController.createMeal); // create a new meal
  app.put('/boorish/meals/:mid', helper.decode, mealController.editMeal); // edit a new meal
  app.delete('/boorish/meals/:mid', helper.decode, mealController.deleteMeal) // TODO: write controller to delete meal

  // adding, retrieving, and deleting a user's meals
  app.get('/boorish/meals/users/:mid', helper.decode, mealController.userMeals) // TODO: write a controller to GET all of a user's meals
  app.post('/boorish/meals/users/:mid', helper.decode, mealController.addMealToUser) // TODO: write a controller to add a meal to a user's list
  app.put('/boorish/meals/users/:uid', helper.decode, mealController.deleteMealFromUser) // TODO: write controller to remove a meal from user's list

  // retrieving and adding feedback on individual meals
  app.get('/boorish/feedback/meals/:id', feedbackController.retrieveFeedback) // TODO: write controller to retrievie feedback on a meal
  app.post('/boorish/feedback/meals/:id', feedbackController.addFeedback) // TODO: write controller to add feedback to a meal

};
