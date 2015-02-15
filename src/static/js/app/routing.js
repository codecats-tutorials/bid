bidApp.
config(['$routeProvider',  function($routeProvider) {
    $routeProvider
    .when('/product-list', {
        templateUrl     : 'products/index.html'
        //controller    : 'aaaCtrl'
    })
    .when('/example', {
        templateUrl     : 'example/index.html',
        controller      : 'ExampleCtrl'
    })
    .otherwise({
        templateUrl     : 'main.html',
        controller      : 'MainCtrl'
        //redirectTo    : '/aaa'
    });
}]);