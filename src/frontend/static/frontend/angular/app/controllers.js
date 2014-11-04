'use strict';

bidApp.controllers.bid = angular.module('bidControllers', []);
/* Ctrl */

bidApp.controllers.bid.
controller('MainCtrl', ['$scope', '$http',
function($scope, $http) {
    $scope.title = 'Bid'
}]);