$('#btn').click(function(){
	$('li').filter(':even').empty();	
	$('li').filter(':odd').remove();
});