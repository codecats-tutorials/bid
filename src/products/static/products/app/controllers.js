'use strict';

bidApp.controllers.bid.
controller('ProductsCtrl', ['$scope', '$http',// 'ModalEventService',
function($scope, $http) {
    $scope.collection = new bidApp.models.Product(bidApp.stores.products);
    $scope.products = $scope.collection.getProducts();

    var view = angular.element('[ng-controller=ProductsCtrl]')
    view.addClass('loading');
    $http.get('products/product').
        success(function (data, status, headers, config) {
            if (data.success) {
                $scope.collection = new bidApp.models.Product(data.data);
                $scope.products = $scope.collection.getProducts();
            }
            view.removeClass('loading');
        }).
        error(function () {
            view.removeClass('loading');
        });
    //setTimeout(function () {
    //    $scope.$root.$broadcast('onAddProduct', function(){});
    //},4000)
}]);