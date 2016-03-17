Template.profile.helpers({
  user: function () {
    return Meteor.user();
  }
});

Template.profile.events({
  'submit #personal-profile-form': function (evt, template) {
    evt.preventDefault();

    var updateDetails = {
      'profile.first_name': evt.target.first_name.value,
      'profile.last_name': evt.target.last_name.value,
      'profile.address': {
        'street': evt.target.address_street.value,
        'suburb': evt.target.address_suburb.value,
        'state': evt.target.address_state.value,
        'country': evt.target.address_country.value,
        'postcode': evt.target.address_postcode.value
      },
      'profile.email': evt.target.email.value,
      'profile.phone': {
        'home': evt.target.phone_home.value,
        'mobile': evt.target.phone_mobile.value,
        'work': evt.target.phone_work.value
      },
      'profile.dob': new Date(evt.target.dob.value),
      'profile.identifications': {
        'drivers_license': {
          'number': evt.target.drivers_license_number.value,
          'state': evt.target.drivers_license_state.value,
          'expiry': new Date(evt.target.drivers_license_expiry.value)
        },
        'passport': {
          'number': evt.target.passport_number.value,
          'country': evt.target.passport_country.value,
          'expiry': new Date(evt.target.passport_expiry.value)
        },
        'car': {
          'type': evt.target.car_type.value,
          'plate': evt.target.car_plate.value
        }
      }
    },
      userId = evt.target.user_id.value;

    Meteor.users.update({_id: userId}, {$set: updateDetails});
  },
  'submit #rental-profile-form': function (evt, template) {
    evt.preventDefault();

    var updateDetails = {
      'profile.rental_history.current': {
        'address': {
          'street': evt.target.current_address_street.value,
          'suburb': evt.target.current_address_suburb.value,
          'state': evt.target.current_address_state.value,
          'country': evt.target.current_address_country.value,
          'postcode': evt.target.current_address_postcode.value
        },
        'rent': parseFloat(evt.target.current_rent.value),
        'length': evt.target.current_length.value,
        'agent': {
          'name': evt.target.current_agent_name.value,
          'phone': evt.target.current_agent_phone.value
        },
        'reason': evt.target.current_reason.value
      },
      'profile.rental_history.previous': {
        'address': {
          'street': evt.target.previous_address_street.value,
          'suburb': evt.target.previous_address_suburb.value,
          'state': evt.target.previous_address_state.value,
          'country': evt.target.previous_address_country.value,
          'postcode': evt.target.previous_address_postcode.value
        },
        'rent': parseFloat(evt.target.previous_rent.value),
        'length': evt.target.previous_length.value,
        'agent': {
          'name': evt.target.previous_agent_name.value,
          'phone': evt.target.previous_agent_phone.value
        },
        'reason': evt.target.previous_reason.value
      }
    },
      userId = evt.target.user_id.value;

    Meteor.users.update({_id: userId}, {$set: updateDetails});
  },
  'submit #employment-profile-form': function (evt, template) {
    evt.preventDefault();

    var updateDetails = {
      'profile.employment_history.current': {
        'name': evt.target.current_name.value,
        'address': {
          'street': evt.target.current_address_street.value,
          'suburb': evt.target.current_address_suburb.value,
          'state': evt.target.current_address_state.value,
          'country': evt.target.current_address_country.value,
          'postcode': evt.target.current_address_postcode.value
        },
        'position': evt.target.current_position.value,
        'length': evt.target.current_length.value,
        'income': parseFloat(evt.target.current_income.value),
        'capacity': evt.target.current_capacity.value,
        'manager': {
          'name': evt.target.current_manager_name.value,
          'position': evt.target.current_manager_position.value,
          'phone': evt.target.current_manager_phone.value
        }
      },
      'profile.employment_history.previous': {
        'name': evt.target.previous_name.value,
        'address': {
          'street': evt.target.previous_address_street.value,
          'suburb': evt.target.previous_address_suburb.value,
          'state': evt.target.previous_address_state.value,
          'country': evt.target.previous_address_country.value,
          'postcode': evt.target.previous_address_postcode.value
        },
        'position': evt.target.previous_position.value,
        'length': evt.target.previous_length.value,
        'income': parseFloat(evt.target.previous_income.value),
        'capacity': evt.target.previous_capacity.value,
        'manager': {
          'name': evt.target.previous_manager_name.value,
          'position': evt.target.previous_manager_position.value,
          'phone': evt.target.previous_manager_phone.value
        },
      },
      'profile.employment_history.student': {
        'number': evt.target.student_number.value,
        'institution': evt.target.student_institution.value,
        'degree': evt.target.student_degree.value,
        'sponsorship': parseFloat(evt.target.student_sponsorship.value),
        'capacity': evt.target.student_capacity.value,
        'year': parseInt(evt.target.student_year.value)
      }
    },
      userId = evt.target.user_id.value;

    Meteor.users.update({_id: userId}, {$set: updateDetails});
  },
  'submit #references-profile-form': function (evt, template) {
    evt.preventDefault();
    var names = evt.target.elements['reference_name[]'],
      relationships = evt.target.elements['reference_relationship[]'],
      numbers = evt.target.elements['reference_number[]'],
      updateDetails = {
      'profile.references': []
    },
      userId = evt.target.user_id.value;

    for (var i = 0; i < names.length; i++) {
      updateDetails['profile.references'].push({
        name: names[i].value,
        relationship: relationships[i].value,
        number: numbers[i].value
      });
    }

    Meteor.users.update({_id: userId}, {$set: updateDetails});
  }
});