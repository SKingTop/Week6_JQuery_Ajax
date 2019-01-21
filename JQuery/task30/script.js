$('p').click(function(){
	$(this).nextAll().eq(4).not('h2').remove();
})