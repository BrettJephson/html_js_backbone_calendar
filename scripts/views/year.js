/**
 * Created by Brett on 14/01/14.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'enums/text',
    'collections/months',
    'models/month',
    'text!templates/year.html',
], function($, _, Backbone, Text, MonthsCollection, Month, YearTemplate) {
    "use strict";

    var YearView = Backbone.View.extend({
        el: $('#calendar-app'),
        initialize: function() {
            this.collection = this.createMonthsCollection();
        },
        createMonthsCollection: function() {
            var collection = new MonthsCollection();
            var i = 0,
                numberOfMonths = Text.months.length;
            for(;i<numberOfMonths;++i) {
                collection.add(new Month({ year:this.model, month: i+1, name: Text.months[i] }));
            }
            return collection;
        },
        render: function() {
            var compiledTemplate = _.template(YearTemplate, {year: this.model.get("year"), months: this.collection.toJSON()});
            this.$el.html(compiledTemplate);
        }
    });

    return YearView;
});