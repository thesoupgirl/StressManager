
var stressApp = angular.module('stressManagerApp', []);
  
stressApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.

      when('/addGoogleCalendar', {
        templateUrl: 'templates/add-google-calendar.html',
        controller: 'AddGoogleCalendarController'
      }).

      when('/showGoogleCalendar', {
        templateUrl: 'templates/show-google-calendar.html',
        controller: 'ShowGoogleCalendarController'
      }).

      when('/showStressLevels', {
        templateUrl: 'templates/show-stress-levels.html',
        controller: 'Calc'
      }).
      otherwise({
        redirectTo: '/addUser'
      });
  }]);