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

JokesNewCtrl.$inject = ['']

JokesShowCtrl.$inject = ['Joke', '$stateParams'];
function JokesShowCtrl(Joke, $stateParams){
  const vm = this;
  vm.joke = Joke.get($stateParams);
}
