'use strict'

bidApp.services.bid = angular.module('bidServices', []);

bidApp.services.bid
.factory('modalService', [function () {
        var service = this;
        window['rs'] = rootScope
        this['view']    = angular.element('#modal');
        this['scope']   = this;
        this['show']    = function () {
            service.view.modal()
        };
        return service;
    }
]);