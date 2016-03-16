// Seed the owner and admin accounts
Meteor.startup(function () {
  if (Meteor.users.find().count() < 1) {
    var userId = Accounts.createUser({
      username: 'john',
      password: 'john123',
      email: 'admin@domain.com',
      profile: {
        name: 'John Smith',
        first_name: 'John',
        last_name: 'Smith',
        address: {
          street: '123 Some Street',
          suburb: 'Toowong',
          state:  'QLD',
          country: 'Australia',
          postcode: '4067'
        },
        email: 'john@domain.com',
        phone: {
          home: '07 123 1234',
          mobile: '0405 001 1232',
          work: '07 12312312312'
        },
        dob: '1/1/1990',
        identifications: {
          drivers_license: {
            number: '90223232323',
            state: 'QLD',
            expiry: '20/3/2017'
          },
          passport: {
            number: 'N123123',
            country: 'Australia',
            expiry: '20/3/2019'
          },
          car: {
            type: 'Sedan',
            plate: '123XYZ'
          }
        }
      }
    });

    console.log('added user');
  }
});