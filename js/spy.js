var value = $('input[spy]');

if (value.attr('spy') === 'false') {
  value.attr('type', 'text');
  value.attr('spy', 'true');
} else {
  value.attr('type', 'password');
  value.attr('spy', 'false');
}
