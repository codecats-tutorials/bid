'use strict';

bidApp.controllers.bid.
controller('ExampleCtrl', ['$scope', '$http',
function($scope, $http, $location) {
    $scope.$parent.title = 'This is an example';
    var collection  = new bidApp.models.CarCollection(bidApp.stores.cars);
    $scope.collection = collection;
    $scope.cars = collection.toJSON();
}]);
