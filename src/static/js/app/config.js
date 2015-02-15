( function () {
    bidApp.
        config(function ($httpProvider) {
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
            $httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
        }).
        config(function ($interpolateProvider) {
            $interpolateProvider.startSymbol('{$');
            $interpolateProvider.endSymbol('$}');
        });

    function initializeNamespaces(app, namespaces) {
        for (var i in namespaces) {
            var ns = namespaces[i];
            app[ns] = {};
        }
    };

    initializeNamespaces(bidApp, [
        'controller', 'model', 'store', 'service', 'filter', 'directive'
    ]);
})();