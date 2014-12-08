'use strict';

bidApp.controller.bid.
controller('ExampleCtrl', ['$scope', '$http',
function($scope, $http, $location) {
    $scope.$parent.title = 'This is an example';
    var collection  = new bidApp.model.CarCollection(bidApp.store.cars);
    $scope.collection = collection;
    $scope.cars = collection.toJSON();
}]);
