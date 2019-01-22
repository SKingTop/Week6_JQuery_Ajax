var $allCheckBox = $(':checkbox');
$allCheckBox.click(function(){
	if ($(':checkbox:checked').length == 2) {
		$allCheckBox.attr('disabled', true);
	};
});