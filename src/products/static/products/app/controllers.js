'use strict';

bidControllers.
controller('ProductsCtrl', ['$scope', '$http', '$location',
function($scope, $http, $location) {
    window['l'] = $location;
    $scope.title = 'a';
    var collection  = [];
    $scope.collection = collection;
    $scope.cars = [];
}]);