angular
  .module('dadJokesOnly')
  .config(Router);

Router.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
function Router($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/views/sessions/home.html'
    })

    .state('register', {
      url: '/register',
      templateUrl: 'js/views/sessions/register.html',
      controller: 'RegisterCtrl as register'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/sessions/login.html',
      controller: 'LoginCtrl as login'
    })
    .state('usersShow', {
      url: '/user/:id',
      templateUrl: 'js/views/users/show.html',
      controller: 'UsersShowCtrl as usersShow'
    });

  $urlRouterProvider.otherwise('/login');
}
