'use strict';

bidApp.controllers.bid.
controller('ProductsCtrl', ['$scope', '$http',
function($scope, $http) {
    $scope.collection = new bidApp.models.Product(bidApp.stores.products);
    $scope.products = $scope.collection.getProducts();
    window['s'] = $scope
    $http.get('products/product')
}]);