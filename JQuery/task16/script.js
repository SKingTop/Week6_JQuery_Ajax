$('p:empty').each(function(){
	var text = $(this).prevUntil('h2').last().prev().html();
	$(this).html(text);
});