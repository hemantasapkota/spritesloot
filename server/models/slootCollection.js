var 
mongoose = require('mongoose'),
_ = require('underscore');
Schema = mongoose.Schema;

var SlootCollectionSchema = new Schema({
  developerId: String,
  collectionTitle: String,
  slootItems: [{title: String, imgUrl: String, price: String}]
});

mongoose.model('SlootCollection', SlootCollectionSchema);
