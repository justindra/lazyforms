// Seed the owner and admin accounts
Meteor.startup(function () {
  if (Meteor.users.find().count() < 1) {
    var userId = Accounts.createUser({
      username: 'john',
      password: 'john123',
      email: 'admin@domain.com',
      profile: {
        name: 'John Smith'
      }
    });

    console.log('added user');
  }
});