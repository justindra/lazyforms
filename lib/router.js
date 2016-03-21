FlowRouter.notFound = {
    action: function () {
        BlazeLayout.render('notfound');
    }
}

FlowRouter.route('/loading', {
    action: function(params) {
        BlazeLayout.render('loading');
    }
});

FlowRouter.route('/', {
    name: 'home',
    action: function(params) {
        BlazeLayout.render('appBody', {content: 'hello'});
    }
});

FlowRouter.route('/profile', {
    name: 'profile',
    action: function(params) {
        BlazeLayout.render('appBody', {content: 'profile'});
    }
});

FlowRouter.route('/generate', {
    name: 'generate',
    action: function(params) {
        BlazeLayout.render('appBody', {content: 'generate'});
    }
});

FlowRouter.route('/terms', {
    name: 'terms',
    action: function(params) {
        BlazeLayout.render('appBody', {content: 'terms'});
    }
});