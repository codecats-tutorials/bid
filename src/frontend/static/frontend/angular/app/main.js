var bidApp = angular.module('bidApp', [
    'ngRoute',
    'ngCookies',
    'bidControllers',
//    'bidFilters',
//    'bidServices',
//    'bidUserControllers'
]);

bidApp.run(function run ($http, $cookies) {
    $http.defaults.headers.common['X-CSRFToken'] = $cookies['csrftoken'];
});