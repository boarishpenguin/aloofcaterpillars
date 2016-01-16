angular.module('dashboard', ['ngMaterial', 'ngMessages'])

.controller('dashController', function($scope, $window, Users, Feedback) {
  $scope.tokenBalance = $window.localStorage.getItem('com.oneAppTokens');
  $scope.specialName = $window.localStorage.getItem('com.oneAppName');

  Users.getMeals()
  .then(function(meals) {
    if (meals.eating && meals.eating.current.length) {
      $scope.nextMeal = meals.eating.current[0];
    } else {
      $scope.nextMeal = {
        imgUrl: '/images/defaultMealImage.png', // need address of default image
        title: 'Nothing yet!',
        creator: 'a friend',
        date_available: 'soon'
      };
    }

    if (meals.created && meals.created.current.length) {
      $scope.nextOffer = meals.created.current[0];
      $scope.nextOffer.portions = meals.created.current[0].portions - meals.created.current[0].portions_left;
    } else {
      $scope.nextOffer = {
        imgUrl: '/images/defaultMealImage.png', // need address of default image
        title: 'Share a meal with someone',
        date_available: 'soon',
        portions: 'lots of'
      };
    }

    if (meals.created && meals.created.past.length) {
      var randIdx = Math.floor(Math.random()*meals.created.past.length);
      $scope.oneFeedback = meals.created.past[randIdx];
      $scope.oneFeedback.overall = Feedback.retrieveFeedBack($scope.oneFeedback._id).overall;
    } else {
      $scope.oneFeedback = {
        imgUrl: '/images/defaultMealImage.png',
        title: '...what you\'ve shared?',
        overall: 'We don\'t know yet, but we think they\'ll love it!'
      };
    }
  });
});
