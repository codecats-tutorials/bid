'use strict';

bidApp.controller.bid = angular.module('bidController', ['mgcrea.ngStrap']);
/* Ctrl */

bidApp.controller.bid.
    controller('MainCtrl', ['$scope', '$http', '$modal', '$alert',
        function($scope, $http, $modal, $alert) {
            var body            = angular.element('body'),
                btnAddProduct   = angular.element('#add-product');

            body.addClass('loading');
            $scope.title = 'Bid';
            //events
            btnAddProduct.bind('click', function () {
                btnAddProduct.addClass('loading');

                var removeMask = function (modalCtrlScope) {
                    setTimeout(function () {
                        btnAddProduct.removeClass('loading');
                    }, 1);
                };

                $scope.$broadcast('onAddProduct', removeMask);
            });

            body.removeClass('loading');

        }]);

bidApp.controller.bid.
    controller('ModalCtrl', ['$scope', '$http', '$modal',
        function ($scope, $http, $modal) {
            $scope.title = 'y'
            ////events
            $scope.$on('onAddProduct', function (e, removeMask) {
                $modal({
                    title           : 'Success',
                    template: 'helper/template/modal.html'
                    //content         : 'a'
                });

                removeMask($scope);
            });
    }]);
//bidApp.controller.bid.
//    controller('ModalCtrl', ['$scope', '$http', '$modal',
//        function ($scope, $http, $modal) {
//            $scope.title = 'y'
//    }]);