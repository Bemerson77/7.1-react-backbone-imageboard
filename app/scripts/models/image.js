/* MODEL */

// 3rd party
var Backbone = require('backbone');

// local


var Images = Backbone.Model.extend({

});


var ImagesCollection = Backbone.Collection.extend({
  model: Images,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/brandonimages1'
});


module.exports = {
  'Images': Images,
  'ImagesCollection': ImagesCollection
};
