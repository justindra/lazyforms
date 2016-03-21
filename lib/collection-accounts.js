Properties = new Mongo.Collection('properties');

Meteor.methods({
  saveProperty: function (userId, rentalDetails) {
    check(userId, String);
    check(rentalDetails, Object);

    Properties.insert({
      userId: userId,
      details: rentalDetails,
      createdOn: new Date()
    });
  }
});