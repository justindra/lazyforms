if (typeof LazyForms === 'undefined') { LazyForms = {}; }

LazyForms['generatePdfDougDisher'] = function (userId) {
  var user = Meteor.users.findOne(userId),
        doc = new jsPDF();

    doc.setFontSize(11);
    doc.addImage(REForms.toowong_DougDisher[0], 'JPEG', 0, 0, 210, 297);
    doc.text(10, 146, user.profile.firstName);
    doc.text(115, 146, user.profile.lastName);
    doc.text(10, 155, user.profile.address.street + ', ' + user.profile.address.suburb + ', ' + user.profile.address.state);

    doc.save('toowongDougDisher-' + user.profile.name + '.pdf');
}