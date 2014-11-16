'use strict';

bidApp.controllers.bid = angular.module('bidControllers', []);
/* Ctrl */

bidApp.controllers.bid.
controller('MainCtrl', ['$scope', '$http',
function($scope, $http) {
    var body = angular.element('body');
    body.addClass('loading')
    $scope.title = 'Bid'
    body.removeClass('loading')
}]);