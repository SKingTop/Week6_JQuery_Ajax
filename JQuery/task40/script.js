$('#btn1').click(function(){
	var array = [];
	$('#test').parents().each( function() {
	var $class = $(this).attr('class');
	if ($class) {
		array = array.concat($class.split(' '));
	}
});
	alert(array);
});