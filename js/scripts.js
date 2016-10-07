var date = new Date(2016, 10-1, 17);
//new Date(year, month, day, hours, minutes, seconds, milliseconds);
$('#counter').countdown({
  until: date,
  format: 'HMS',
  timeSeparator: ':',
  compact: true
});
