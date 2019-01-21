$('p').each(function(index){
	$index  = index + 1;
	$(this).append(' N:' + $index);
})