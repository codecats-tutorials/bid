'use strict';

bidApp.controllers.bid = angular.module('bidControllers', []);
/* Ctrl */

bidApp.controllers.bid.
controller('MainCtrl', ['$scope', '$http',
function($scope, $http) {
    var body            = angular.element('body'),
        btnAddProduct   = angular.element('#add-product');
    body.addClass('loading')
    $scope.title = 'Bid'
    //events
    btnAddProduct.bind('click', function () {
        btnAddProduct.addClass('loading');
        var removeMask = function () {
            btnAddProduct.removeClass('loading');
        };
        $scope.$broadcast('onAddProduct', removeMask)
    });


    body.removeClass('loading')
}]);

bidApp.controllers.bid.
    controller('ModalController', ['$scope', '$http', 'ModalService', function ($scope, $http, service) {
        service['ctrl'] = $scope;
    }]);