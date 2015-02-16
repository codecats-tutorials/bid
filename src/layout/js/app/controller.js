'use strict';

bidApp.controller.bid = angular.module('bidController', ['mgcrea.ngStrap']);
/* Ctrl */

bidApp.controller.bid.
    controller('MainCtrl', ['$scope', '$http', '$modal',
        function($scope, $http, $modal) {
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
            ////events
            $scope.$on('onAddProduct', function (e, removeMask) {
                $modal({
                    title           : 'Success',
                    template: 'helper/template/index.html'//,
                    //content         : 'a',
                    //animation       : 'am-fade-and-slide-bottom',
                    //backdropAnimation: 'am-fade-and-slide-bottom'
                });

                removeMask($scope);
            });
    }]);
bidApp.controller.bid.
    controller('MC', ['$scope', '$http', '$modal',
        function ($scope, $http, $modal) {
            $scope.title = 'y'
    }]);