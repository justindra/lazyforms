if (typeof LazyForms === 'undefined') { LazyForms = {}; }

LazyForms['generatePdfdougDisher_toowong'] = function (userId, rentalDetails) {
  var profile = Meteor.users.findOne(userId).profile,
      doc = new jsPDF();

  doc.setFontSize(11);
  doc.addImage(REForms.toowong_DougDisher.forms[0], 'JPEG', 0, 0, 210, 297);

  // Rental Details
  if (rentalDetails.address) doc.text(10, 88, rentalDetails.address);
  if (rentalDetails.weekly_rent) doc.text(10, 104, rentalDetails.weekly_rent.toString());
  if (rentalDetails.lease_term) doc.text(90, 104, rentalDetails.lease_term.toString());
  if (rentalDetails.lease_start) doc.text(137, 104, moment(rentalDetails.lease_start).format('DD/MM/YYYY'));
  if (rentalDetails.num_occupants) doc.text(10, 120, rentalDetails.num_occupants);
  if (rentalDetails.children) doc.text(108, 120, rentalDetails.children);
  if (rentalDetails.pets.num_type) doc.text(10, 129, rentalDetails.pets.num_type);
  if (rentalDetails.pets.registered) doc.text(108, 129, rentalDetails.pets.registered);

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

  // Current Rental Details
  var rental_history = profile.rental_history;

  if (rental_history && rental_history.current) {
    var current = rental_history.current;
    if (current.address) doc.text(10, 222, current.address.street + ', '
                                         + current.address.suburb + ', '
                                         + current.address.state + ', '
                                         + current.address.country + ' '
                                         + current.address.postcode);
    if (current.rent) doc.text(10, 232, current.rent.toString());
    if (current.length) doc.text(76, 232, current.length);
    if (current.agent.name) doc.text(10, 241, current.agent.name);
    if (current.agent.phone) doc.text(76, 241, current.agent.phone);
    if (current.reason) {
      var reason = doc.splitTextToSize(current.reason, 70);
      doc.text(134, 232, reason);
    }
  }

  if (rental_history && rental_history.previous) {
    var previous = rental_history.previous;
    if (previous.address) doc.text(10, 257, previous.address.street + ', '
                                         + previous.address.suburb + ', '
                                         + previous.address.state + ', '
                                         + previous.address.country + ' '
                                         + previous.address.postcode);
    if (previous.rent) doc.text(10, 266, previous.rent.toString());
    if (previous.length) doc.text(76, 266, previous.length);
    if (previous.agent.name) doc.text(10, 275, previous.agent.name);
    if (previous.agent.phone) doc.text(76, 275, previous.agent.phone);
    if (previous.reason) {
      var reason = doc.splitTextToSize(previous.reason, 70);
      doc.text(134, 266, reason);
    }
  }

  doc.addPage();
  doc.addImage(REForms.toowong_DougDisher.forms[1], 'JPEG', 0, 0, 210, 297);

  // Employment Details
  var employment_history = profile.employment_history;
  if (employment_history && employment_history.current) {
    var current = employment_history.current;
    if (current.name) doc.text(10, 44, current.name);
    if (current.address) doc.text (107, 44, current.address.street + ', '
                                         + current.address.suburb + ', '
                                         + current.address.state + ', '
                                         + current.address.country + ' '
                                         + current.address.postcode);
    if (current.position) doc.text(10, 53.5, current.position);
    if (current.manager.name) doc.text(76, 53.5, current.manager.name + ' / '
                                               + current.manager.position);
    if (current.manager.phone) doc.text(141, 53.5, current.manager.phone);
    if (current.length) doc.text(10, 63, current.length);
    if (current.income) doc.text(76, 63, current.income.toString());
    if (current.capacity) doc.text(141, 63, current.capacity);
  }

  if (employment_history && employment_history.previous) {
    var previous = employment_history.previous;
    if (previous.name) doc.text(10, 80, previous.name);
    if (previous.address) doc.text (107, 80, previous.address.street + ', '
                                         + previous.address.suburb + ', '
                                         + previous.address.state + ', '
                                         + previous.address.country + ' '
                                         + previous.address.postcode);
    if (previous.position) doc.text(10, 89, previous.position);
    if (previous.manager.name) doc.text(76, 89, previous.manager.name + ' / '
                                              + previous.manager.position);
    if (previous.manager.phone) doc.text(141, 89, previous.manager.phone);
    if (previous.length) doc.text(10, 99, previous.length);
    if (previous.income) doc.text(76, 99, previous.income.toString());
    if (previous.capacity) doc.text(141, 99, previous.capacity);
  }

  if (employment_history && employment_history.student) {
    var student = employment_history.student;
    if (student.number) doc.text(10, 115, student.number);
    if (student.institution) doc.text(76, 115, student.institution);
    if (student.sponsorship) doc.text(141, 115, student.sponsorship.toString());
    if (student.degree) doc.text(10, 124.5, student.degree);
    if (student.capacity) doc.text(76, 124.5, student.capacity);
    if (student.year) doc.text(141, 124.5, student.year.toString());
  }

  // References
  var references = profile.references,
      name = [[10, 141], [10, 150.5], [10, 160]],
      relationship = [[76, 141], [76, 150.5], [76, 160]],
      number = [[141, 141], [141, 150.5], [141, 160]];
  if (references) {
    for (var i = 0; i < references.length; i++) {
      if (references[i].name) doc.text(name[i][0], name[i][1], references[i].name);
      if (references[i].relationship) doc.text(relationship[i][0], relationship[i][1], references[i].relationship);
      if (references[i].number) doc.text(number[i][0], number[i][1], references[i].number);
    }
  }

  // Emergency Contact
  // Vertical is 176

  // Payment
  var weekly_rent = rentalDetails.weekly_rent;

  if (weekly_rent) {
    var bond = weekly_rent * 4,
        minimum = weekly_rent * 2,
        total = weekly_rent * 6;
    doc.text(115, 195, weekly_rent.toString());
    doc.text(115, 202.5, bond.toString());
    doc.text(115, 210.5, minimum.toString());
    doc.text(115, 218, total.toString());
  }

  doc.addPage();
  doc.addImage(REForms.toowong_DougDisher.forms[2], 'JPEG', 0, 0, 210, 297);

  // var splitTitle = doc.splitTextToSize("Hello what is this crazy title doing here. its so long and windy and is it gonna wrap? I don't know its just so crazy", 50);
  // doc.text(15, 20, splitTitle);

  doc.save('toowongDougDisher-' + profile.name + '.pdf');
}