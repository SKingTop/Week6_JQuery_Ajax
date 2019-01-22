$('#form1').submit(function(){
	var str = $(this).serialize();
	$.ajax({
		url:'http://ajax.markello.info/a2.php',
		type: 'POST',
		data:str,
		success: function(result){
			$('#content').html(result);
		};
	});
}) ;