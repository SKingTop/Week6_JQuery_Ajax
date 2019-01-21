$('p').each(function(index) {
	$(this).not('.www').append(' ' + index );
});