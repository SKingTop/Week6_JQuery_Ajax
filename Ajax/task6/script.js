$('#form1').submit(function(){
	var str = $(this).serialize();
	$.ajax({
		url:'http://ajax.markello.info/goods.php',
		type: 'GET',
		data:str,
		success: function(result){
			$('#content').html(result);
		};
	});
}) ;