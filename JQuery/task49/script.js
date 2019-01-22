$('#btn').click(function(){
	$('div').each(function() {
		var $height = $(this).height();
		$(this).height($height * 2);
	});
});