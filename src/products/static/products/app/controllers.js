'use strict';

bidApp.controllers.bid.
controller('ProductsCtrl', ['$scope', '$http',
function($scope, $http) {
    $scope.collection = new bidApp.models.ProductCollection(bidApp.stores.products);
}]);