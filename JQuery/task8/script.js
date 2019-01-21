var text = $('#test').html();
$('#test').prevUntil('p').last().prev().html(text);