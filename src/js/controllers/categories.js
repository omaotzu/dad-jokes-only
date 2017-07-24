angular
  .module('dadJokesOnly')
  .controller('CategoriesIndexCtrl', CategoriesIndexCtrl)
  .controller('CategoriesNewCtrl', CategoriesNewCtrl);


CategoriesIndexCtrl.$inject = ['Category', '$state'];
function CategoriesIndexCtrl(Category, $state){
  const vm = this;
  vm.all = Category.query();

  function categoriesUpdate(category){
    category
    .$update()
    .then(() => $state.go('categoriesIndex'));
  }
  vm.update = categoriesUpdate;

  function categoriesDelete(category){
    category
      .$remove()
      .then(() => $state.reload('categoriesIndex'));
  }
  vm.delete = categoriesDelete;
}

CategoriesNewCtrl.$inject= ['Category', '$state'];
function CategoriesNewCtrl(Category, $state){
  const vm = this;
  vm.category = {};

  function categoryCreate(){
    if(vm.categoriesNewForm.$valid){
      Category
        .save(vm.category)
        .$promise
        .then(() => $state.go('jokesNew'));
    }
  }
  vm.create = categoryCreate;
}
