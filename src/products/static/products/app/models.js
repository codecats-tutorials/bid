//TODO: add relational collection
//http://backbonerelational.org/
//TODO: models as factory
bidApp.models.Product = Backbone.Collection.extend({
    urlRoot     : '/product/',
    relations   : [
        {
            type            : Backbone.HasOne,
            key             : 'company',
            relatedModel    : 'bidApp.models.Company',
            collectionType  : 'bidApp.models.CompanyCollection',
            reverseRelation : {
                includeInJSON   : 'id',
                type            : Backbone.HasMany,
                key             : 'products',
                relatedModel    : 'bidApp.models.Product'
            }
	    }
    ]
});
bidApp.models.Company = Backbone.RelationalModel.extend({
    urlRoot: '/company/'
});

bidApp.models.ProductCollection = Backbone.Collection.extend({
    model: bidApp.models.Product
});
