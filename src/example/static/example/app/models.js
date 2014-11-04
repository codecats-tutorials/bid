bidApp.models.CarCollection = Backbone.Collection.extend({
    totalCost: function() {
        var total = 0;

        this.forEach(function(model) {
            total += model.get('cost');
        });

        return total;
    }
});
