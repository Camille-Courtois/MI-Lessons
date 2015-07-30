var template = '' +
  '<div class="question">' +
    '<h2 class="question__body"><%= body %></h2>' +
    '<img width="50" height="50" src=\"<%= image %>\" />' +
  '</div>';

template = _.template(template);

var $questionsContainer = $('#questions-container');

$.ajax({
  url: '/data/questions.json',
  dataType: 'json',
  success: function(response) {
    _.each(response, function(question) {
      var questionHTML = template(question);
      $(questionHTML).appendTo($questionsContainer);
    });
  }
});

