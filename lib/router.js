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