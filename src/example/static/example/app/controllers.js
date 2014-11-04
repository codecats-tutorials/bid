'use strict';

bidControllers.
controller('ExampleCtrl', ['$scope', '$http',
function($scope, $http, $location) {
    $scope.title = 'a';
    var collection  = new CarCollection(data);
    $scope.collection = collection;
    $scope.cars = collection.toJSON();
}]);
