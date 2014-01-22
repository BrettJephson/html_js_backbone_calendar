/**
 * Created by Brett on 14/01/14.
 */
define(['underscore', 'backbone', 'models/month'], function(_, Backbone, Month) {
    "use strict";

    var Months = Backbone.Collection.extend({
        model: Month
    });

    return Months;
});