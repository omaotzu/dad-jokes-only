angular
  .module('dadJokesOnly')
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersIndexCtrl.$inject= ['User'];
function UsersIndexCtrl(User){
  const vm = this;

  vm.all = User.query();
}

UsersShowCtrl.$inject= ['User', '$stateParams'];
function UsersShowCtrl(User, $stateParams){
  const vm = this;
  vm.user = User.get($stateParams);
}

UsersEditCtrl.$inject = ['User', '$stateParams', '$state'];
function UsersEditCtrl(User, $stateParams, $state) {
  const vm = this;
  vm.user = User.get($stateParams);

  function usersUpdate() {
    vm.user
      .$update()
      .then(() => {
        console.log('changing');
        $state.go('usersShow', $stateParams);
      });
  }
  vm.update = usersUpdate;
}
