define([
    'underscore',
    'backbone',
    'enums/text',
    'text!templates/day.html'
], function(_, Backbone, Text, DayTemplate) {
    "use strict";

    var DayView = Backbone.View.extend({
        el: $('#calendar-app'),
        initialize: function() {

        },
        render: function() {
            var compiledTemplate = _.template(DayTemplate, {
                day: this.model.toJSON(),
                month: { value: this.model.get("month")+1, name: Text.months[ this.model.get("month") ]}
            });
            this.$el.html(compiledTemplate);
        }
    });

    return DayView;
});