angular
  .module('dadJokesOnly')
  .factory('Category', Category);

Category.$inject = ['$resource'];
function Category($resource) {
  return new $resource('/api/categories/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
