Template.registerHelper('formatDateForInput', function (value) {
  if (Object.prototype.toString.call(value) === '[object Date]') {
    return value && (value.getFullYear() + '-' + ("0" + (value.getMonth() + 1)).slice(-2) + '-' + ("0" + value.getDate()).slice(-2)) || '';
  } else return '';
});