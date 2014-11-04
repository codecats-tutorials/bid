'use strict';
alert('b')
console.log(bidControllers)
bidControllers.
controller('ProductsCtrl', ['$scope', '$http', '$location',
function($scope, $http, $location) {
    window['l'] = $location;
    $scope.title = 'a';
    var collection  = new CarCollection(data);
    $scope.collection = collection;
    $scope.cars = collection.toJSON();
}]);