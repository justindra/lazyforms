if (typeof LazyForms === 'undefined') { LazyForms = {}; }

LazyForms['generatePdfDougDisher'] = function (userId) {
  var profile = Meteor.users.findOne(userId).profile,
      doc = new jsPDF();

  doc.setFontSize(11);
  doc.addImage(REForms.toowong_DougDisher.forms[0], 'JPEG', 0, 0, 210, 297);

  // Personal details
  if (profile.first_name) doc.text(10, 146, profile.first_name);
  if (profile.last_name) doc.text(114, 146, profile.last_name);
  if (profile.address) doc.text(10, 155, profile.address.street + ', '
                                      + profile.address.suburb + ', '
                                      + profile.address.state + ', '
                                      + profile.address.country + ' '
                                      + profile.address.postcode);
  if (profile.email) doc.text(10, 164, profile.email);
  if (profile.phone.home) doc.text(10, 173, profile.phone.home);
  if (profile.phone.work) doc.text(74, 173, profile.phone.work);
  if (profile.phone.mobile) doc.text(136, 173, profile.phone.mobile);
  if (profile.dob) doc.text(10, 189, moment(profile.dob).format('DD/MM/YYYY'));
  if (profile.identifications.drivers_license) {
    doc.text(76, 189, profile.identifications.drivers_license.number);
    doc.text(134, 189, profile.identifications.drivers_license.state);
  }
  if (profile.identifications.passport) {
    doc.text(10, 198, profile.identifications.passport.number + ' / '
                    + moment(profile.identifications.passport.expiry).format('DD/MM/YYYY'));
    doc.text(76, 198, profile.identifications.passport.country);
  }
  if (profile.identifications.car) doc.text(134, 207, profile.identifications.car.type + ' / '
                                                    + profile.identifications.car.plate);

  doc.addPage();
  doc.addImage(REForms.toowong_DougDisher.forms[1], 'JPEG', 0, 0, 210, 297);

  doc.addPage();
  doc.addImage(REForms.toowong_DougDisher.forms[2], 'JPEG', 0, 0, 210, 297);


  // var splitTitle = doc.splitTextToSize("Hello what is this crazy title doing here. its so long and windy and is it gonna wrap? I don't know its just so crazy", 50);
  // doc.text(15, 20, splitTitle);

  doc.save('toowongDougDisher-' + profile.name + '.pdf');
}