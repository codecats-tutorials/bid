var bidApp = angular.module('bidApp', [
    'ngRoute',
    'ngCookies',
    'ngAnimate',
    'bidController',
    'bidService',
    'bidDirective',
//    'bidFilters',
    //https://github.com/mgcrea/angular-strap
    'mgcrea.ngStrap.modal',
    'mgcrea.ngStrap.aside',
    'mgcrea.ngStrap.tooltip'

]);

bidApp.run(function run ($http, $cookies) {
    $http.defaults.headers.common['X-CSRFToken'] = $cookies['csrftoken'];
});

//require(['js/alert'], function() {
//	console.log('main');
//});
