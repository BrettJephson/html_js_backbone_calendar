/**
 * Created by Brett on 14/01/14.
 */
define([
    "backbone"
], function(Backbone){
    "use strict";

    var Year = Backbone.Model.extend({
        defaults: {
            "year": new Date().getFullYear()
        }
    });
    return Year;
});