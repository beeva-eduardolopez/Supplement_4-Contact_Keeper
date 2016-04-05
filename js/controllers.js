var controllers = angular.module('contactAngularApp.controllers', []);

controllers.controller('WelcomePageController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
    
    if ($scope.contacts == '' || $scope.contacts == undefined){
         $scope.contacts = [];
    }

    $scope.addContact = function() {

        var name = $scope.name;
        var email = $scope.email;
        var phoneNumber = $scope.phoneNumber;

        var contact = {
            name: name,
            email: email,
            phoneNumber: phoneNumber

        };
        $scope.contacts.push(contact);

    };

    $scope.getContacts = function() {

        $scope.contacts = $scope.contacts;
        $rootScope.contacts = $scope.contacts;
    };

    $scope.getContacts();



}]);

controllers.controller('ContactPageController', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams, $http) {

    var contactid = $routeParams.id;
    var contacts = $scope.contacts;
    $scope.contact = contacts[contactid];
}]);






