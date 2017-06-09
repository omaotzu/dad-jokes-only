angular
  .module('dadJokesOnly')
  .controller('JokesIndexCtrl', JokesIndexCtrl)
  .controller('JokesNewCtrl', JokesNewCtrl)
  .controller('JokesShowCtrl', JokesShowCtrl);

JokesIndexCtrl.$inject = ['Joke'];
function JokesIndexCtrl(Joke){
  const vm = this;
  vm.all = Joke.query();
}

JokesNewCtrl.$inject = ['Joke','$state', '$auth'];
function JokesNewCtrl(Joke, $state, $auth){
  const vm = this;
  vm.joke = {};
  vm.joke.createdBy = $auth.getPayload().userId;

  function jokeCreate(){
    if(vm.jokesNewForm.$valid){
      Joke
        .save(vm.joke)
        .$promise
        .then(() => $state.go('jokesIndex'));
    }
  }
  vm.create = jokeCreate;
}

JokesShowCtrl.$inject = ['Joke', '$stateParams'];
function JokesShowCtrl(Joke, $stateParams){
  const vm = this;
  vm.joke = Joke.get($stateParams);
}
