$('p').each(function(index) {
	$(this).clone().insertBefore(this).css('color', 'red');
	$(this).css('color', 'green');
});