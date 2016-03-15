/* Main JS */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

// local
var model = require('./models/image');
var AddForm = require('./components/form.jsx');
var feed = require('./components/listing.jsx');


var images = new model.ImagesCollection();
var ImageItems = feed.ImageItems;


  ReactDOM.render(
    <AddForm collection={images} />,
    document.getElementById('form')
  );


images.fetch().done(function(){
  ReactDOM.render(
    <ImageItems collection={images} />,
    document.getElementById('images')
  );
});



$('.plus-con').click(function(){
  $('.form-con').toggle("medium", function(){
    $('.form-con').removeClass('hidden');
  });
});

$(window).scroll('down', function(){
    $('.form-con').slideUp('slow');


});
