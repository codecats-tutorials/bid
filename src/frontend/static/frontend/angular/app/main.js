var bidApp = angular.module('bidApp', [
    'ngRoute',
    'ngCookies',
    'bidController',
    'bidService'
//    'bidFilters'
]);

bidApp.run(function run ($http, $cookies) {
    $http.defaults.headers.common['X-CSRFToken'] = $cookies['csrftoken'];
});