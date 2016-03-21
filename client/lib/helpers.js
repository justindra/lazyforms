Template.registerHelper('formatDateForInput', function (value) {
  return moment(value).format('YYYY-MM-DD');
});

Template.registerHelper('canRunAds', function () {
  return (typeof canRunAds === 'undefined') ? false : canRunAds;
});