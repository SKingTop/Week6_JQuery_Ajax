$('#btn').click(function(){
	$(':checkbox').each(function (index, elem) {
	elem.checked = !elem.checked;
});
});