angular
  .module('dadJokesOnly')
  .factory('Joke', Joke);

Joke.$inject = ['$resource'];
function Joke($resource) {
  return new $resource('/api/jokes/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
