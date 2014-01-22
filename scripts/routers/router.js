/**
 * Created by Brett on 14/01/14.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'models/year',
    'models/month',
    'models/day',
    'views/year',
    'views/month',
    'views/day'
], function($, _, Backbone, Year, Month, Day, YearView, MonthView, DayView) {
    "use strict";
    var CalendarRouter = Backbone.Router.extend({
        routes: {
            'date/:year': 'year',
            'date/:year/:month': 'month',
            'date/:year/:month/:day': 'day',
            '*actions': 'default'
        },
        default: function() {
            var now = new Date();
            this.day(now.getFullYear(), now.getMonth()+1, now.getDate());
        },
        year: function(year) {
            var yearView = new YearView({ model: new Year({ year: year })});
            yearView.render();
        },
        month: function(year, month) {
            var monthView = new MonthView({ model: new Month({ year: year, month: month })});
            monthView.render();
        },
        day: function(year, month, day) {
            month -= 1;
            var dayView = new DayView({ model: new Day({ date: new Date(year, month, day) })});
            dayView.render();
        }
    });

    return {
        start: function() {
            var calendarRouter = new CalendarRouter();
            Backbone.history.start();
        }
    }
});