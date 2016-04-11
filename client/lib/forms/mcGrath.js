if (typeof LazyForms === 'undefined') { LazyForms = {}; }

LazyForms['generatePdf_paddington_mcGrath'] = function (userId, rentalDetails) {
  var profile = Meteor.users.findOne(userId).profile,
      doc = new jsPDF();

  doc.setFontSize(11);
  doc.addImage(REForms.paddington_mcGrath.forms[0], 'JPEG', 0, 0, 210, 297);

  // Rental Details
  if (rentalDetails.address) doc.text(12, 78, rentalDetails.address);
  if (rentalDetails.lease_term) doc.text(12, 94, rentalDetails.lease_term.toString());
  if (rentalDetails.weekly_rent) doc.text(80, 94, rentalDetails.weekly_rent.toString());
  if (rentalDetails.lease_start) doc.text(142, 94, moment(rentalDetails.lease_start).format('DD/MM/YYYY'));
  if (rentalDetails.num_occupants) doc.text(12, 111, rentalDetails.num_occupants);
  if (rentalDetails.children) doc.text(77, 111, rentalDetails.children);
  if (rentalDetails.pets.num_type) doc.text(142, 111, rentalDetails.pets.num_type);
  // if (rentalDetails.pets.registered) doc.text(108, 129, rentalDetails.pets.registered);

  // Personal details
  var name = '';
  if (profile.first_name) name += profile.first_name;
  if (profile.last_name) name += ' ' + profile.last_name;
  doc.text(12, 128, name);
  if (profile.email) doc.text(109, 128, profile.email);

  if (profile.address) doc.text(12, 138, profile.address.street + ', '
                                      + profile.address.suburb + ', '
                                      + profile.address.state + ', '
                                      + profile.address.country + ' '
                                      + profile.address.postcode);
  if (profile.phone.home) doc.text(12, 149, profile.phone.home);
  if (profile.phone.work) doc.text(77, 149, profile.phone.work);
  if (profile.phone.mobile) doc.text(142, 149, profile.phone.mobile);
  if (profile.dob) doc.text(12, 165, moment(profile.dob).format('DD/MM/YYYY'));
  if (profile.identifications.drivers_license) {
    doc.text(77, 165, profile.identifications.drivers_license.number);
    doc.text(142, 165, profile.identifications.drivers_license.state);
  }
  if (profile.identifications.passport) {
    doc.text(12, 176, profile.identifications.passport.number);
                    // + moment(profile.identifications.passport.expiry).format('DD/MM/YYYY'));
    doc.text(77, 176, profile.identifications.passport.country);
  }
  // if (profile.identifications.car) doc.text(134, 207, profile.identifications.car.type + ' / '
  //                                                   + profile.identifications.car.plate);
  if (profile.identifications.car) doc.text(188, 176, '1');

  doc.addPage();
  doc.addImage(REForms.paddington_mcGrath.forms[1], 'JPEG', 0, 0, 212, 297);
  // Current Rental Details
  var rental_history = profile.rental_history;

  if (rental_history && rental_history.current) {
    var current = rental_history.current;
    if (current.address) doc.text(55, 16, current.address.street + ', '
                                         + current.address.suburb + ', '
                                         + current.address.state + ', '
                                         + current.address.country + ' '
                                         + current.address.postcode);
    if (current.rent) doc.text(15, 27, current.rent.toString());
    if (current.length) doc.text(76, 27, current.length);
    if (current.agent.name) doc.text(12, 37, current.agent.name);
    if (current.agent.phone) doc.text(76, 37, current.agent.phone);
    if (current.reason) {
      var reason = doc.splitTextToSize(current.reason, 50);
      doc.text(142, 27, reason);
    }
  }

  if (rental_history && rental_history.previous) {
    var previous = rental_history.previous;
    if (previous.address) doc.text(12, 53, previous.address.street + ', '
                                         + previous.address.suburb + ', '
                                         + previous.address.state + ', '
                                         + previous.address.country + ' '
                                         + previous.address.postcode);
    if (previous.rent) doc.text(15, 63, previous.rent.toString());
    if (previous.length) doc.text(76, 63, previous.length);
    if (previous.agent.name) doc.text(12, 74, previous.agent.name);
    if (previous.agent.phone) doc.text(76, 74, previous.agent.phone);
    if (previous.reason) {
      var reason = doc.splitTextToSize(previous.reason, 50);
      doc.text(142, 63, reason);
    }
  }

  // Employment Details
  var employment_history = profile.employment_history;
  if (employment_history && employment_history.current) {
    var current = employment_history.current;
    if (current.name) doc.text(12, 117, current.name);
    if (current.address) doc.text (87, 117, current.address.street + ', '
                                         + current.address.suburb + ', '
                                         + current.address.state + ', '
                                         + current.address.country + ' '
                                         + current.address.postcode);
    if (current.position) doc.text(142, 127, current.position);
    if (current.manager.name) doc.text(12, 127, current.manager.name
                                              + ' ('+ current.manager.position + ')');
    if (current.manager.phone) doc.text(76, 127, current.manager.phone);
    if (current.length) doc.text(12, 137, current.length);
    if (current.income) doc.text(80, 137, current.income.toString());
    if (current.capacity) doc.text(142, 137, current.capacity);
  }

  if (employment_history && employment_history.previous) {
    var previous = employment_history.previous;
    if (previous.name) doc.text(12, 154, previous.name);
    if (previous.address) doc.text (87, 154, previous.address.street + ', '
                                         + previous.address.suburb + ', '
                                         + previous.address.state + ', '
                                         + previous.address.country + ' '
                                         + previous.address.postcode);
    if (previous.position) doc.text(142, 164, previous.position);
    if (previous.manager.name) doc.text(12, 164, previous.manager.name
                                              + ' ('+ current.manager.position + ')');
    if (previous.manager.phone) doc.text(76, 164, previous.manager.phone);
    if (previous.length) doc.text(12, 175, previous.length);
    if (previous.income) doc.text(80, 175, previous.income.toString());
    if (previous.capacity) doc.text(142, 175, previous.capacity);
  }

  // if (employment_history && employment_history.student) {
  //   var student = employment_history.student;
  //   if (student.number) doc.text(12, 115, student.number);
  //   if (student.institution) doc.text(76, 115, student.institution);
  //   if (student.sponsorship) doc.text(141, 115, student.sponsorship.toString());
  //   if (student.degree) doc.text(12, 124.5, student.degree);
  //   if (student.capacity) doc.text(76, 124.5, student.capacity);
  //   if (student.year) doc.text(141, 124.5, student.year.toString());
  // }

  // Emergency Contact
  // Vertical is 176

  // References
  var references = profile.references,
      name = [[12, 219], [12, 240]],
      // relationship = [[76, 141], [76, 240]],
      number = [[142, 219], [142, 240]];
  if (references) {
    for (var i = 0; i < name.length; i++) {
      if (references[i].name) doc.text(name[i][0], name[i][1], references[i].name);
      // if (references[i].relationship) doc.text(relationship[i][0], relationship[i][1], references[i].relationship);
      if (references[i].number) doc.text(number[i][0], number[i][1], references[i].number);
    }
  }

  doc.addPage();
  doc.addImage(REForms.paddington_mcGrath.forms[2], 'JPEG', 0, 0, 212, 297);

  // Payment
  var weekly_rent = rentalDetails.weekly_rent;

  if (weekly_rent) {
    var bond = weekly_rent * 4,
        minimum = weekly_rent * 2,
        total = weekly_rent * 6;
    doc.text(109, 102.5, weekly_rent.toString());
    doc.text(97, 129, bond.toString());
    doc.text(97, 140, minimum.toString());
    doc.text(97, 151, total.toString());
  }

  if (rentalDetails.lease_term) doc.text(65, 102.5, rentalDetails.lease_term.toString());
  
  doc.addPage();
  doc.addImage(REForms.paddington_mcGrath.forms[3], 'JPEG', 0, 0, 212, 297);

  doc.addPage();
  doc.addImage(REForms.paddington_mcGrath.forms[4], 'JPEG', 0, 0, 212, 297);

  doc.save('paddington_mcGrath-' + profile.name + '.pdf');
}