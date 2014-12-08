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
    controller('ModalCtrl', ['$scope', '$http', '$modal',
        function ($scope, $http, $modal) {
            $scope.view = angular.element('#modal');
            $scope.data = {};
            $scope.form = {'errors': []};
            $scope.setContent       = function (contentObjects) {
                $scope.disabled = 'disable';
                var hasBody = false;
                for (var i in contentObjects) {
                    if (i === 'body') {
                        hasBody = true;
                        $scope.createComponent(contentObjects[i]);
                    } else {
                        $scope[i] = contentObjects[i];
                    }
                }
                if (hasBody === false) {
                    $scope.disabled = '';
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
                return (function () {
                    if ($scope.disabled) return;
                    var func = (typeof btn.function !== 'undefined') ? btn.function : function () {};
                    func(btn, me);
                })();
            };
            $scope.createComponent  = function (object) {
                //array
                if (typeof object === 'object' && typeof object.length === 'number') {
                    $scope.modalBody = object.type
                } else if (typeof object === 'object' && typeof object.type !== 'undefined' && object.type !== undefined) {
                    //form
                    if (typeof object.onBeforeLoading !== 'undefined') object.onBeforeLoading.apply($scope, []);
                    angular.element('body').addClass('loading');
                    if (typeof object.onBeforeGet !== 'undefined') object.onBeforeGet.apply($scope, []);
                    $http.get(object.url).success(function (data) {
                        if (typeof object.onBeforeBind !== 'undefined') object.onBeforeBind.apply($scope, []);
                        $scope.modalBody = data;
                        if (typeof object.onAfterBind !== 'undefined') object.onAfterBind.apply($scope, []);
                        $scope.disabled = '';
                        angular.element('body').removeClass('loading');
                        if (typeof object.onAfterCreate !== 'undefined') object.onAfterCreate.apply($scope, []);
                    });
                } else if (typeof object === 'string') {
                    //string dom component
                    $scope.modalBody = object;
                };
            };
            //events
            $scope.$on('onAddProduct', function (e, removeMask) {
                $scope.show(function () {
                    $scope.setContent({
                        'body'      : {
                            type        : 'form',
                            url         : 'products/product?type=form',
                            onAfterBind : function (data) {
                                this.data.name = 'initialized'
                            }
                        },
                        'title'     : 'Tytuł',
                        'buttons'   : [
                            {
                                name    : 'Save it',
                                function: function (btn, me) {
                                    var form    = $scope.view.find('form')[0],
                                        data    = JSON.stringify(me.data);
                                    $http({
                                        url     : form.action,
                                        method  : form.method,
                                        data    : {data: data}
                                    }).then(
                                        function success (data) {
                                            $scope.form.errors = data.data.errors;
                                            if (data.data.success) {
                                                $modal({
                                                    title           : 'Success',
                                                    content         : data.success,
                                                    animation       : 'am-fade-and-slide-bottom',
                                                    backdropAnimation: 'am-fade-and-slide-bottom'
                                                });
                                            }
                                        },
                                        function failure (data) {
                                            console.log(data)
                                            $modal({
                                                title           : 'Error',
                                                content         : data.statusText,
                                                //template        : 'helper/template/index.html',
                                                animation       : 'am-fade-and-slide-bottom',
                                                backdropAnimation: 'am-fade-and-slide-top'
                                            });
                                        }
                                    );
                                }
                            }
                        ]
                    });
                });

                removeMask($scope);
            });
    }]);