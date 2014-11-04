bidApp.
config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
}).
config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
})

.config(['$routeProvider',  function($routeProvider) {
    console.log('pROV');
    window['prov'] = $routeProvider;
    $routeProvider
    .when('/product-list', {
        templateUrl     : 'products/index.html',
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
    console.log('a')
}]);