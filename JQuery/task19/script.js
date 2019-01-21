var prevText = $('#test').prevAll().eq(1).html();
var nextText = $('#test').nextAll().eq(1).html();
$('#test').prevAll().eq(1).html(nextText);
$('#test').nextAll().eq(1).html(prevText);