Template.generate.events({
  'submit #confirm-rental-form': function (evt, template) {
    evt.preventDefault();

    var locationForm = $('#location-rental-form')[0],
        petForm = $('#pet-rental-form')[0];

    var rental_details = {
      address: locationForm.rental_address.value,
      weekly_rent: parseFloat(locationForm.rental_weekly_rent.value),
      lease_term: parseInt(locationForm.rental_lease_term.value),
      lease_start: locationForm.rental_lease_start.value,
      num_occupants: locationForm.rental_occupants.value,
      children: locationForm.rental_children.value,
      pets: {
        num_type: petForm.rental_pets.value,
        registered: petForm.rental_pets_registered.value
      }
    }

    Meteor.call('saveProperty', evt.target.user_id.value, rental_details);
    LazyForms['generatePdf_' + evt.target.agent.value](evt.target.user_id.value, rental_details);
  },
  'submit #location-rental-form, submit #pet-rental-form': function (evt, template) {
    evt.preventDefault();
  }
});