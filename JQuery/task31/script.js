$('p').click(function(){
	$(this).nextAll().eq(4).not(':has(b)').remove();
})