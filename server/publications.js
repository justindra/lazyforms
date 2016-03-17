Meteor.publish('user', function () {
  return Meteor.users.find({_id: this.userId}, {
    fields: {
      profile: 1
    }
  });
});