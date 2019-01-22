$('#test p').each(function(){
	$(this).append('!').filter(':not(.www)').css('color', 'red');
});