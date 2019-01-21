$('p').click(function(){
	$(this).prevUntil(':header').remove();
})