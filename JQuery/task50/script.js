$('#btn').click(function(){
	var $result = 0;
	$('div').each(function() {
		var $height = $(this).height();
		$result += $height;
	});
	alert($result);
});