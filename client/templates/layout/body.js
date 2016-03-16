Template.appBody.events({
  'click [data-action="login"]': function (evt, template) {
    Meteor.loginWithPassword('john', 'john123');
  },
  'click [data-action="logout"]': function (evt, template) {
    Meteor.logout();
  }
});