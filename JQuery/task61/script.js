$('#number').blur(function(){
	var $num = $('#number').val();
		$(':checkbox').each(function(index){
			if ((index+1) == $num) {
				$(this).attr('checked', true);
			} else {
				$(this).attr('checked', false);
			}
		});
	});