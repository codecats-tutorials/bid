'use strict';

var bidControllers = angular.module('bidControllers', []);
/* Ctrl */
var data = [
    { id: 1, name: 'Honda', cost: 10 },
    { id: 2, name: 'Toyota', cost: 20 },
    { id: 3, name: 'Ford', cost: 40 }
];

var CarCollection = Backbone.Collection.extend({
    totalCost: function() {
        var total = 0;

        this.forEach(function(model) {
            total += model.get('cost');
        });

        return total;
    }
});

bidControllers.
controller('MainCtrl', ['$scope', '$http',
function($scope, $http) {
    $scope.title = 'ma'
}]);


bidControllers.
controller('ExampleCtrl', ['$scope', '$http', '$location',
function($scope, $http, $location) {
    window['l'] = $location;
    $scope.title = 'a';
    var collection  = new CarCollection(data);
    $scope.collection = collection;
    $scope.cars = collection.toJSON();
}]);