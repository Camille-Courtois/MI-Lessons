var article = [
	{id:'baguette',	title: 'Where to get a good baguette in Stratford?', p: 'Go to a good bakery, duh.'},
	{id:'other', title: 'question', p: 'whatever'}
];

function test(idHere){	//$?
	for(var i = 0; i<article.length; i++){
		if(idHere==article[i].id){
			$('.article-text__title').text(article[i].title);
			$('.article-text__p').text(article[i].p);
		}
	}
};
