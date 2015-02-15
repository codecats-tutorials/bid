(function (selector) {
    var config = JSON.parse(document.querySelector(selector).innerHTML);

    require.config({
        baseUrl: config.STATIC_URL,
        urlArgs: "_=" + (new Date()).getTime(),
        'paths': {
            //'underscore': config.STATIC_URL + 'bundles/underscore/1.7.0/underscore-min',
            //'backbone'  : config.STATIC_URL + 'bundles/backbone/1.1.2/backbone',
            //'jquery'    : config.STATIC_URL + 'bundles/jquery/2.1.1/jquery.min',
            //'angular'   : config.STATIC_URL + 'bundles/angular/lib/1.3/angular'

        },
        'shim': {
            //'backbone': {
            //    'deps': ['underscore']
            //},
            //'lib/bloodhound': {
            //    'deps': ['jquery'],
            //    'exports': 'Bloodhound'
            //}
        }
    });

})('#global-config');

    //<script type="text/javascript" src="{% static 'js/app/main.js' %}"></script>
    //<script type="text/javascript" src="{% static 'js/app/config.js' %}"></script>
    //<script type="text/javascript" src="{% static 'js/app/routing.js' %}"></script>
    //<script type="text/javascript" src="{% static 'js/app/controller.js' %}"></script>
    //<script type="text/javascript" src="{% static 'js/app/service.js' %}"></script>
    //<script type="text/javascript" src="{% static 'js/app/directive.js' %}"></script>
