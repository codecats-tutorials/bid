bidApp.
config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
}).
config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});

bidApp['controllers']   = {};
bidApp['models']        = {};
bidApp['stores']        = {};
bidApp['services']      = {};
bidApp['filters']       = {};