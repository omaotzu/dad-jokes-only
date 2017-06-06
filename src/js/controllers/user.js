angular
  .module('dadJokesOnly')
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl);

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
