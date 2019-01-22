$text = $('#text');
$prev = $text.prevAll().get().reverse();
$next = $text.nextAll();
$text.after($prev).before($next);