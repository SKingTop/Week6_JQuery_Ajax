var prevText = $('#test').prev().html();
var nextText = $('#test').next().html();
// var text = $('#test').html();
// $('#test').html(prevText + ' ' + text + ' ' + nextText);
$('#test').prepend(prevText + ' ');
$('#test').append(' ' + nextText);