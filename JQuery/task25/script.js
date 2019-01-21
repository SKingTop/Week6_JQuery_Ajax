$('p').each(function(index){
	$index  = index + 1;
	var a = $(this).html();
	var result = a * $index;
	$(this).append(' Value * index(' + $index + ') = ' + result);
})