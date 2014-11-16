'use strict';

bidApp.controllers.bid.
controller('ProductsCtrl', ['$scope', '$http',
function($scope, $http) {
    $scope.collection = new bidApp.models.Product(bidApp.stores.products);
    $scope.products = $scope.collection.getProducts();
    window['s'] = $scope
    $http.get('products/product').
        success(function (data, status, headers, config) {
            if (data.success) {
                $scope.collection = new bidApp.models.Product(data.data);
                $scope.products = $scope.collection.getProducts();
            }
        }).
        error(function () {

        });
}]);