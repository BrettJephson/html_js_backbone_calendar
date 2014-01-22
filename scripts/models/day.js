/**
 * Created by Brett on 14/01/14.
 */
define([
    'backbone',
    'enums/text'
], function(Backbone, Text){
    "use strict";

    var Day = Backbone.Model.extend({
        defaults: {
            "date": new Date()
        },
        initialize: function() {
            this.on("change:date", this.dateChanged);
            this.on("change:day change:month change:year", this.modelChanged);
            this.dateChanged(this);
        },
        modelChanged: function(model) {
            var date = model.get("date");
            date.setDate(model.get("day"));
            date.setMonth(model.get("month"));
            date.setYear(model.get("year"));
            model.set({date:date});
        },
        dateChanged: function(model) {
            var date = model.get("date");
            model.set({
                year: date.getFullYear(),
                month: date.getMonth(),
                day: date.getDate(),
                dayOfWeek: date.getDay(),
                name: Text.days[date.getDay()]
            });
        }
    });

    return Day;
});