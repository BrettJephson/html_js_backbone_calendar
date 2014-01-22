/**
 * Created by Brett on 13/01/14.
 */
define(['underscore', 'backbone', 'models/day'], function(_, Backbone, Day) {
    "use strict";

    var Days = Backbone.Collection.extend({
        model: Day
    });

    return Days;
});