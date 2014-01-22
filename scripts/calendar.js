/**
 * Created by Brett on 14/01/14.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'routers/router'
], function($, _, Backbone, Router){
    "use strict";
    return {
        start: function() {
            Router.start();
        }
    }
});