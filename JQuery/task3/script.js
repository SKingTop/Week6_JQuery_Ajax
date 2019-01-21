$('p').each(function(){
	var text = $(this).html();
	$('p').replaceWith('<div>' + text + '</div>');
});