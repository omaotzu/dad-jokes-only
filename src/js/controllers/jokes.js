angular
  .module('dadJokesOnly')
  .controller('JokesIndexCtrl', JokesIndexCtrl)
  .controller('JokesNewCtrl', JokesNewCtrl)
  .controller('JokesShowCtrl', JokesShowCtrl)
  .controller('JokesEditCtrl', JokesEditCtrl);

JokesIndexCtrl.$inject = ['Joke'];
function JokesIndexCtrl(Joke){
  const vm = this;
  vm.all = Joke.query();
}

JokesNewCtrl.$inject = ['Joke','$state', '$auth'];
function JokesNewCtrl(Joke, $state, $auth){
  const vm = this;
  vm.selectedCats  = [];
  vm.cats = [
    'Animal',
    'Cutural',
    'News/Politics',
    'Religion',
    'Sexual',
    'Work'
  ];

  vm.joke = {};
  vm.joke.createdBy = $auth.getPayload().userId;

  function jokeCreate(){
    console.log(vm.selectedCats);
    if(vm.jokesNewForm.$valid){
      Joke
        .save(vm.joke)
        .$promise
        .then(() => $state.go('jokesIndex'));
    }
    vm.joke.categoriesSelected = [];
  }
  vm.create = jokeCreate;
}

JokesShowCtrl.$inject = ['Joke', '$stateParams'];
function JokesShowCtrl(Joke, $stateParams){
  const vm = this;
  vm.joke = Joke.get($stateParams);
}

JokesEditCtrl.$inject = ['Joke', '$stateParams', '$state'];
function JokesEditCtrl(Joke, $stateParams, $state){
  const vm = this;
  vm.joke = Joke.get($stateParams);

  function jokesUpdate(){
    if(vm.jokesEditForm.$valid){
      vm.joke
      .$update();
    }
    if(vm.joke.$update){
      $state.go('jokesShow', $stateParams);
    }
  }
  vm.update = jokesUpdate;
}
