$('#btn1').click(function(){
	var num1 = $('#num1').val();
	var num2 = $('#num2').val();
	$.ajax({
		url:'http://ajax.markello.info/a1.php',
		type: 'POST',
		data:{num1:num1,num2:num2},
		dataType: 'html',
		success: function(result){
			$('#content').html(result);
		};
	});
}) ;