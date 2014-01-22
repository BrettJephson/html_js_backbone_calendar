/**
 * Created by Brett on 11/01/14.
 */
require.config({
    baseUrl: "scripts",
    paths: {
        "underscore": "vendor/underscore/underscore",
        "jquery": "vendor/jquery/jquery",
        "backbone": "vendor/backbone/backbone",
        "text": "vendor/requirejs-text/text"
    },
    shim: {
        "backbone": {
            deps:["underscore", "jquery"],
            exports: "Backbone"
        },
        "underscore": {
            exports: "_"
        }
    }
});

require(['calendar'], function(Application) {
    Application.start();
});
