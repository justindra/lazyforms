Template.registerHelper('formatDateForInput', function (value) {
  return moment(value).format('YYYY-MM-DD');
});