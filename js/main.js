var app = angular.module('contactAngularApp', ['contactAngularApp.controllers', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/welcome', {
            templateUrl: 'views/welcome.html',
            controller: 'WelcomePageController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactPageController'
        })
        .otherwise({
            redirectTo: '/welcome'
        });
}]);
