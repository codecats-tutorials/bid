//TODO: add relational collection
//http://backbonerelational.org/
//TODO: models as factory
bidApp.model.Product = Backbone.RelationalModel.extend({
    urlRoot     : '/product/',
    relations   : [
        {
            type            : Backbone.HasOne,
            key             : 'company',
            relatedModel    : 'bidApp.model.Company',
            collectionType  : 'bidApp.model.CompanyCollection',
            reverseRelation : {
                includeInJSON   : 'id',
                type            : Backbone.HasMany,
                key             : 'products',
                relatedModel    : 'bidApp.models.Product'
            }
	    }
    ],
    getProducts : function () {
        var all         = [],
            jsonData    = this.toJSON();
        console.log(this)
        window['t'] = this
        for (var i in jsonData) {
            if (parseInt(i) % 1 === 0) {
                all.push(jsonData[i]);
            }
        }
        return all;
    }
});
bidApp.model.Company = Backbone.RelationalModel.extend({
    urlRoot: '/company/'
});

bidApp.model.ProductCollection = Backbone.Collection.extend({
    model: bidApp.model.Product
});

bidApp.model.CompanyCollection = Backbone.Collection.extend({
    model: bidApp.model.Company
});
