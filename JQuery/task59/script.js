$('#btn').click(function(){
	$('input').each(function(){
		$(this).attr('placeholder',$(this).val()).removeAttr('value');
	});
});