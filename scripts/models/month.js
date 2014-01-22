/**
 * Created by Brett on 14/01/14.
 */
define([
    "backbone",
    "enums/text"
], function(Backbone, Text){
    "use strict";

    var Month = Backbone.Model.extend({
        defaults: {
            "month": 1,
            "name": "January"
        },
        initialize: function() {
            this.on("change:month", this.monthChanged);
            this.monthChanged(this);
        },
        monthChanged: function(model) {
            model.set({
                name:  Text.months[model.get("month")-1]
            });
        }
    });

    return Month;
});