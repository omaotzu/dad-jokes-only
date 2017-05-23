angular
  .module('dadJokesOnly')
  .config(Router);

Router.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

function Router($locationProvider, $stateProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'js/views/statics/home.html'
  });

  $urlRouterProvider.otherwise('/');
}
