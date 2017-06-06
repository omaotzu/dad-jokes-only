angular
  .module('dadJokesOnly')
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('LoginCtrl', LoginCtrl);

RegisterCtrl.$inject= ['$auth', '$state'];
function RegisterCtrl($auth, $state){
  const vm = this;
  vm.user = {};
  console.log('On register page');
  function submit(){
    if (vm.registerForm.$valid){
      $auth.signup(vm.user)
        .then(() => $state.go('login'));
    }
  }
  vm.submit = submit;
}

LoginCtrl.$inject= ['$auth', '$state'];
function LoginCtrl($auth, $state){
  const vm = this;
  vm.credentials = {};
  console.log('On login page');
  function submit(){
    if(vm.loginForm.$valid){
      $auth.login(vm.credentials)
        .then(() => $state.go('usersShow', {id: $auth.getPayload().userId}));
    }
  }
  vm.submit = submit;
}
