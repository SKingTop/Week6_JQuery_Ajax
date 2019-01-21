$('p').click(function(){
	$(this).prev().remove().end().next().remove();
})