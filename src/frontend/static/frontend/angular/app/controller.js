'use strict';

bidApp.controller.bid = angular.module('bidController', []);
/* Ctrl */

bidApp.controller.bid.
    controller('MainCtrl', ['$scope', '$http',
        function($scope, $http) {
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

            body.removeClass('loading')
        }]);

bidApp.controller.bid.
    controller('ModalCtrl', ['$scope', '$http', '$sce',
        function ($scope, $http, $sce) {
            $scope.view = angular.element('#modal');
            $scope.setContent       = function (contentObjects) {
                for (var i in contentObjects) {
                    if (i === 'body') {
                        $scope.createComponent(contentObjects[i]);
                    } else {
                        $scope[i] = contentObjects[i];
                    }
                }
                $scope.$apply();
            };
            $scope.setBody          = function (body) {
                $scope.setContent({'body': body});
            };
            $scope.setTitle         = function (title) {
                this.setContent({'title': title});
            };
            $scope.show             = function (callback) {
                if (typeof callback === 'undefined') callback = function () {};
                $scope.view.modal();
                callback.call($scope, arguments);
            };
            $scope.renderClass      = function (btn) {
                return (typeof btn.class !== 'undefined') ? btn.class : 'btn-primary';
            };
            $scope.getFunction      = function (btn, me) {
                var func = (typeof btn.function !== 'undefined') ? btn.function : function () {};
                return func(btn, me);
            };
            $scope.createComponent  = function (object) {
                //array
                if (typeof object === 'object' && typeof object.length === 'number') {
                    $scope.modalBody = object.type
                } else if (typeof object === 'object' && typeof object.type !== 'undefined' && object.type === 'form') {
                    //form
                    angular.element('body').addClass('loading');
                    $http.get(object.url).success(function (data) {
                        $scope.modalBody = $sce.trustAsHtml(data);
                        angular.element('body').removeClass('loading');
                    });
                } else if (typeof object === 'string') {
                    //string dom component
                    $scope.modalBody = $sce.trustAsHtml(object);
                };
            };
            //events
            $scope.$on('onAddProduct', function (e, removeMask) {
                $scope.show(function () {
                    $scope.setContent({
                        'body'      : {
                            type        : 'form',
                            url         : 'products/product?type=form',
                            function    : function () {
                                console.log('callback')
                            }
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

                removeMask($scope);
            });
    }]);