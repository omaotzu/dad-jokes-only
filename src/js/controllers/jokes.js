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

JokesNewCtrl.$inject = ['Joke', 'Category','$state', '$auth'];
function JokesNewCtrl(Joke, Category, $state, $auth){
  const vm = this;
  vm.joke = {};
  vm.category = Category.query();
  vm.joke.categories = [];
  vm.joke.createdBy = $auth.getPayload().userId;

  function addCategory(category) {
    if(!vm.joke.categories.includes(category.name)){
      vm.joke.categories.push(category.name);
    }else if(vm.joke.categories.includes(category.name)){
      const index = vm.joke.categories.indexOf(category.name);
      vm.joke.categories.splice(index, 1);
    }
  }
  vm.addCategory = addCategory;

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

JokesEditCtrl.$inject = ['Joke', 'Category', '$stateParams', '$state'];
function JokesEditCtrl(Joke, Category, $stateParams, $state){
  const vm = this;
  vm.joke = Joke.get($stateParams);





  function jokesUpdate(){
    if(vm.jokesEditForm.$valid){
      vm.joke
      .$update()
      .then(() => $state.go('jokesShow', $stateParams));
    }
  }
  vm.update = jokesUpdate;
}
