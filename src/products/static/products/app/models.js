//TODO: add relational collection
//http://backbonerelational.org/
bidApp.models.CompanyCollection = Backbone.Collection.extend({});
bidApp.models.ProductCollection = Backbone.Collection.extend({
    relations: [{
		type: Backbone.HasOne,
		key: 'company',
		relatedModel: 'bidApp.models.CompanyCollection',
		collectionType: 'AnimalCollection',
		reverseRelation: {
			key: 'livesIn',
			includeInJSON: 'id'
			// 'relatedModel' is automatically set to 'Zoo'; the 'relationType' to 'HasOne'.
		}
	}]
});
