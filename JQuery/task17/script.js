$('#sqr').click(function(){
	$('input').each(function(){
		var a = $(this).val();
		var b = a * a;
		$(this).val(b);
	});
});