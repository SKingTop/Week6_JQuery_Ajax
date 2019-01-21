$('p').each(function(){
	var text = $(this).html();
	$(this).append(' ! ' + text);
})