FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('SiteLayout', {header: 'StarTaiwanHeader', feature: 'StarTaiwan'});
    }
});


FlowRouter.route('/about', {
    name: 'about-team',
    action() {
        BlazeLayout.render('SiteLayout', {header: 'AboutHeader', feature: 'About'});
    }
});

FlowRouter.route('/contest', {
    name: 'contest',
    action() {
        BlazeLayout.render('SiteLayout', {header: 'ContestHeader', feature: 'Contest'});
    }
});

FlowRouter.route('/dashboard', {
    name: 'projects',
    action() {
        BlazeLayout.render('SiteLayout', {header: 'DashboardHeader', feature: 'Dashboard'});
    }
});


FlowRouter.route('/projects/', {
    name: 'projects',
    action() {
        BlazeLayout.render('SiteLayout', {header: 'ProjectsHeader', feature: 'Projects'});
    }
});

FlowRouter.route('/projects/:name', {
    name: 'project-home',
    action() {
        BlazeLayout.render('SiteLayout', {header: 'ProjectPageHeader', feature: 'ProjectPage'});
    }
});

FlowRouter.route('/resources', {
    name: 'resources',
    action() {
        BlazeLayout.render('SiteLayout', {header: 'ResourcesHeader', feature: 'Resources'});
    }
});

FlowRouter.route('/partners', {
    name: 'partners',
    action() {
        BlazeLayout.render('SiteLayout', {header: 'PartnersHeader', feature: 'Partners'});
    }
});


FlowRouter.route('/login', {
    name: 'login',
    action() {
        BlazeLayout.render('SiteLayout', {header: 'UserLoginHeader', feature: 'UserLogin'});
    }
});


FlowRouter.route('/signup', {
    name: 'signup',
    action() {

        if(Meteor.userId()){
            FlowRouter.go('/dashboard');
        } else {
            BlazeLayout.render('SiteLayout', {header:'UserSignupHeader', feature: 'UserSignup'});
        }
        
    }
});






