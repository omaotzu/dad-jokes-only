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
    .state('usersIndex', {
      url: '/users',
      templateUrl: 'js/views/users/index.html',
      controller: 'UsersIndexCtrl as usersIndex'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: 'js/views/users/show.html',
      controller: 'UsersShowCtrl as usersShow'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: 'js/views/users/edit.html',
      controller: 'UsersEditCtrl as usersEdit'
    })
    
    .state('jokesIndex', {
      url: '/jokes',
      templateUrl: 'js/views/jokes/index.html',
      controller: 'JokesIndexCtrl as jokesIndex'
    })
    .state('jokesNew', {
      url: '/jokes/new',
      templateUrl: 'js/views/jokes/new.html',
      controller: 'JokesNewCtrl as jokesNew'
    })
    .state('jokesShow', {
      url: '/jokes/:id',
      templateUrl: 'js/views/jokes/show.html',
      controller: 'JokesShowCtrl as jokesShow'
    })
    .state('jokesEdit', {
      url: '/jokes/:id/edit',
      templateUrl: 'js/views/jokes/edit.html',
      controller: 'JokesEditCtrl as jokesEdit'
    });
  $urlRouterProvider.otherwise('/login');
}
