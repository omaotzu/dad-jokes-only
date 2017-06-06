angular
  .module('dadJokesOnly')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', '$auth'];
function MainCtrl($rootScope, $state, $auth){
  const vm = this;
  vm.isAuthenticated = $auth.isAuthenticated;
  vm.currentUserId = $auth.getPayload().userId;
  console.log(vm.currentUserId);

  $rootScope.$on('error', (e, err) => {
    vm.message = err.data.message;
    if(err.status === 401) $state.go('login');
  });

  $rootScope.$on('$stateChangeSuccess', () => {
    vm.uiRouterState = $state.current.name;
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
  });

  function logout(){
    $auth.logout();
    $state.go('login');
  }
  vm.logout = logout;
}
