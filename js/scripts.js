var date = new Date(2016, 10-1, 7);
//new Date(year, month, day, hours, minutes, seconds, milliseconds);
$('#counter').countdown({
  until: date,
  format: 'HMS',
  timeSeparator: ':',
  compact: true
});
