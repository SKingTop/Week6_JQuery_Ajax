$('p[class]').each(function(){
	var $class = $(this).attr('class');
	var $div = $('<div>').addClass($class);
	$(this).removeAttr('class').wrap($div);
});