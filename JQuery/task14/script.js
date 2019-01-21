$('p:empty').each(function(index) {
		var text = $(this).prev().html();
		$(this).html(text);
});