Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);

      var doc = new jsPDF();

      doc.setFontSize(40);
      doc.addImage(REForms.toowong_DougDisher[0], 'JPEG', 0, 0, 270, 330);
      doc.text(35, 25, "hello");

      doc.save('hello.pdf');
    }
});

Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });


Session.setDefault('counter', 0);