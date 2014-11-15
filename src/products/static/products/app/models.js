//TODO: add relational collection
//http://backbonerelational.org/
//TODO: models as factory
bidApp.models.Product = Backbone.RelationalModel.extend({
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
bidApp.models.Company = Backbone.RelationalModel.extend({
    urlRoot: '/company/'
});

bidApp.models.ProductCollection = Backbone.Collection.extend({
    model: bidApp.models.Product
});

bidApp.models.CompanyCollection = Backbone.Collection.extend({
    model: bidApp.models.Company
});
