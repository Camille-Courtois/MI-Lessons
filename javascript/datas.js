var article = {
	title: 'Where to get a good baguette in Stratford?',
	content: 'Go to a good bakery, duh.'
};


$(function(){
	$('.article__title').text(article.title);
	$('.article__content').text(article.content);
});