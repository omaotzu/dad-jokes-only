angular
  .module('dadJokesOnly')
  .config(Router);

Router.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];
function Router($urlRouterProvider, $locationProvider, $stateProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/views/auth/home.html'
    });

  $urlRouterProvider.otherwise('/');
}
