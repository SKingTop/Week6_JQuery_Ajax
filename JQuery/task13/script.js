$('h2 + p').each(function(index) {
		$(this).insertBefore($(this).prev());
});