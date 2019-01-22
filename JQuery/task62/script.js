$('#select1').on('change', function(){
	var $num = $('#select1').find('option:selected').index();
			$('input[type="radio"]').each(function(index){
				if ($num == index) {
					$(this).attr('checked', true);
				} else {
					$(this).attr('checked', false);
				};
			});
	});