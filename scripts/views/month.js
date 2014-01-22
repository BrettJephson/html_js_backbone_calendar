/**
 * Created by Brett on 14/01/14.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'enums/text',
    'collections/days',
    'models/day',
    'text!templates/month.html'
], function($, _, Backbone, Text, DaysCollection, Day, MonthTemplate) {
    "use strict";

    var MonthView = Backbone.View.extend({
        el: $('#calendar-app'),
        initialize: function() {
            this.collection = this.createDaysCollection();
        },
        createDaysCollection: function() {
            var collection = new DaysCollection();
            var month = this.model.get("month")-1;
            var date = new Date(this.model.get("year"), month, 1);
            while(date.getMonth()==month){
                collection.add(new Day({ date:date }));
                date.setDate(date.getDate()+1);
            }
            return collection;
        },
        render: function() {
            var compiledTemplate = _.template(MonthTemplate, {year: this.model.get("year"), month: { name: this.model.get("name"), value: this.model.get("month") }, daysOfWeek: Text.days, days: this.collection.toJSON()});
            this.$el.html(compiledTemplate);
        }
    });

    return MonthView;
});