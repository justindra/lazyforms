Accounts.onCreateUser(function (options, user) {
    if (options.profile) {
        user.profile = options.profile;
    }
    if (user.services.facebook) {
        if(!user.profile) user.profile = {};
        user.profile.name = user.services.facebook.name;
        user.profile.first_name = user.services.facebook.first_name;
        user.profile.last_name = user.services.facebook.last_name;
        user.profile.email = user.services.facebook.email;
        user.profile.gender = user.services.facebook.gender;
        user.profile.avatar = 'https://graph.facebook.com/' + user.services.facebook.id + '/picture?type=large';
        user.emails = [{
            address: user.services.facebook.email,
            verified: false
        }];
    } else if (user.services.google) {
        if(!user.profile) user.profile = {};
        user.profile.name = user.services.google.name;
        user.profile.first_name = user.services.google.given_name;
        user.profile.last_name = user.services.google.family_name;
        user.profile.email = user.services.google.email;
        user.profile.gender = user.services.google.gender;
        user.profile.avatar = user.services.google.picture;
        user.emails = [{
            address: user.services.google.email,
            verified: user.services.google.verified_email
        }];
    }
    return user;
});