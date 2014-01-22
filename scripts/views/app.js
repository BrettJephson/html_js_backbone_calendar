define(['underscore', 'backbone', 'collections/days', 'models/day', 'views/day'], function(_, Backbone, Days, Day, DayView) {
    "use strict";

     var appView = Backbone.View.extend({
        el: "#calendar-app",
        initialize: function() {
            this.collection = new Days();

            this.listenTo(this.collection, 'add', this.render);
            this.collection.add(new Day())
        },
         render: function() {
            this.collection.each(function(item){
                this.renderItem(item);
            }, this);
         },
         renderItem: function(item) {
             var view = new DayView({
                 model: item
             });
             this.$el.append( view.render().el );
         }
     });

    return appView;
});