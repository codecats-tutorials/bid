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
    controller('ModalController', ['$scope', '$http', '$modal',
        function ($scope, $http, $modal) {
            $scope.title = 'y'
            $scope.xyz = '123'


            $scope.submiter = function () {
                console.log('click')
                $scope.title = '123'
            }

            ////events
            $scope.$on('onAddProduct', function (e, removeMask) {

                $modal({
                    title           : 'Success',
                    template: 'products/product?type=form'
                    //template: 'helper/template/modal.html'
                    //content         : 'a'
                });

                removeMask($scope);
            });
    }]);