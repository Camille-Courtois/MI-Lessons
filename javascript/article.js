// https://lodash.com/docs#template
var ourTemplateFunction = _.template($('#article-template').html());

// Save a reference to our article list in the DOM
var $articleList = $('#article-list');

// Loop through each of the articles defined in data.js
articles.forEach(function(article) {

  // Create a string of our template with the values from our article data
  // injected
  var articleHtml = ourTemplateFunction(article);

  // Create a DOM node using jQuery
  // jQuery will return a DOM node when passed a HTML string
  // eg $('<div class="something">') will return a jQuery object that can be
  // injected in to the document
  var $article = $(articleHtml);

  // Create a containing list item
  var $li = $('<li>');

  // Append our article to the list item
  $li.append($article);

  // Append our list item (with article now injected) in to the document
  $li.appendTo($articleList);

});

