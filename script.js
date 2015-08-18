angular.module('animateApp', ['ngAnimate'])

.controller('mainController', function($scope) {

  // set the default states for tasks and completed
  $scope.tasks = false;
  $scope.completed = false;
});
