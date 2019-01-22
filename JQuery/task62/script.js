// $('#select').on('change', function(){
// 	var $num = $('#select').val();
// 	alert($num);
// 		$(':checkbox').each(function(index){
// 			if ((index+1) == $num) {
// 				$(this).attr('checked', true);
// 			} else {
// 				$(this).attr('checked', false);
// 			}
// 		});
// 	});
$('#select').on('change', function () {
var index = $('#select option:selected').index();
$('input[type=radio]').eq(index).prop('checked',true);
});