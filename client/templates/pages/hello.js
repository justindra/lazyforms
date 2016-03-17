Template.hello.events({
  'click button': function (evt, template) {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);

    var userId = $(evt.target).attr('data-id');
    var a = 'dd';

    if (a == 'dd') LazyForms.generatePdfDougDisher(userId);
    
  }
});

Template.hello.helpers({
  counter: function () {
    return 0;
  }
});