$('p').each(function(index) {
	$index = index + 1;
	$(this).not('.www').append(' ' + $index );
});