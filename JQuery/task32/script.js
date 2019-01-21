$('p').click(function(){
	$(this).nextAll().eq(3).not('h2').next().remove();
})