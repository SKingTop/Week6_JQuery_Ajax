$('b').each(function(){
	if ($(this).parent('.www') || $(this).parent('p')) {
		$(this).parent().css({color: 'red', fontSize: '30px'});
	};
});