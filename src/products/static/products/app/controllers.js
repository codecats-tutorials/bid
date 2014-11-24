'use strict';

bidApp.controllers.bid.
controller('ProductsCtrl', ['$scope', '$http', 'ModalService',
function($scope, $http, modalService) {
    $scope.collection = new bidApp.models.Product(bidApp.stores.products);
    $scope.products = $scope.collection.getProducts();
    window['s'] = $scope
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

    $scope.$on('onAddProduct', function (e, removeMask) {
        console.log('onAddProduct')
        modalService.show(function () {
            this.setContent({
                'body'      : {
                    type: 'form',
                    url : 'products/product?type=form'
                },
                'title'     : 'Tytuł',
                'buttons'   : [
                    {
                        name    : 'Save it',
                        function: function () {
                            console.log('AGREEMENTS');
                            console.log(arguments);
                        }
                    },
                    {
                        name    : 'Delete',
                        class   : 'btn-danger'
                    }
                ]
            });
        });
        //modalService.body = 'bbbbbbbbb';
        removeMask();

    });
}]);