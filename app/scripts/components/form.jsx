/* Form Comp */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

// local


// utility

$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};



var AddForm = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  addImage: function(e){
    e.preventDefault();
    var imageAdd = this.$el.serializeObject();
    this.props.collection.create(imageAdd);
    $('.form-con').toggle("medium", function(){
      $('.form-con').addClass('hidden');
    });
  },
  clear: function(e){
    e.preventDefault();
    $('.form-con').toggle("medium", function(){
      $('.form-con').addClass('hidden');
    });
  },
  render: function(){
    return(
    <form action="" className="container add-form">

      <div className="form-group url-form">
        <input name="url" type="text" className="form-control" id="img-url" placeholder="Image URL" />
      </div>

      <div className="form-group">
        <textarea className="form-control" name="caption" rows="5" placeholder="Image Caption"></textarea>
      </div>
        <div className="btn-con">
          <button id="cancel-btn" type="button" className="btn btn-default" onClick={this.clear}>Cancel</button>
          <button id="submit-btn" type="submit" className="btn btn-default" onClick={this.addImage}>
          <i className="fa fa-picture-o"></i>
          Add Image
          </button>
        </div>
    </form>
   )
  }
});



module.exports = AddForm;
