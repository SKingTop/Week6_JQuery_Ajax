$('#test').click(function(){
	$parent = $(this).parents('.www');
	$parent.find('p').css('color', 'red');
});