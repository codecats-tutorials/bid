'use strict'

bidApp.services.bid = angular.module('bidServices', []);

bidApp.services.bid
    .factory('ModalService', [function () {
        var service = this;

        this['ctrl']        = null;
        this['view']        = angular.element('#modal');
        this['scope']       = this;
        this['setContent']  = function (contentObjects) {
            for (var i in contentObjects) {
                this.ctrl[i] = contentObjects[i];
            }
            service.ctrl.$apply();
        };
        this['setBody']     = function (body) {
            this.setContent({'body': body});
        }
        this['setTitle']    = function (title) {
            this.setContent({'title': title});
        };
        this['show']        = function (callback) {
            if (typeof callback === 'undefined') callback = function () {};
            service.view.modal();
            callback.call(service, arguments);
        };
        return service;
    }
]);

bidApp.services.bid
    .factory('ComponentService', ['$sce', 'FormComponent', function ($sce, form) {
        var service = this;

        this['createComponent'] = function (object) {
            //array
            if (typeof object === 'object' && typeof object.length === 'number') {
                return object.type
            } else if (typeof object === 'object' && typeof object.type !== 'undefined' && object.type === 'form') {

                //$http.get(object.url);
                return $sce.trustAsHtml(form.create(object));
            } else if (typeof object === 'string') {
                return $sce.trustAsHtml(object);
            }

        };
        return service;
    }]);

bidApp.services.bid
    .factory('FormComponent', ['$http', function ($http) {
        var service = this,
            created = false,
            formId  = 0;
        this['setLoading']  = function (id) {
            setTimeout(function () {
                angular.element('#form-' + id).parent().parent().addClass('loading');
            }, 100)
        };
        this['getView']     = function (object) {
            service.setLoading(formId);
            $http.get(object.url).success(function (data) {
                var form = angular.element('#form-' + formId);
                window['data'] = data;
                console.log(formId)
                form.html(data);
                form.parent().parent().removeClass('loading');
            });
        };
        this['create']      = function (object) {
            var view = '<div id="form-' + formId + '"></div>'
            if (created) return view;
            formId++;
            service.getView(object);
            created = true;
            return view;
        };
        return service;
    }]);

