const router = require('express').Router();
const auth = require('../controllers/auth');
const jokes = require('../controllers/jokes');
const users = require('../controllers/users');

router.route('/jokes')
  .get(jokes.index);

router.route('/jokes/new')
  .post(jokes.create);

router.route('/jokes/:id')
  .get(jokes.show)
  .put(jokes.update)
  .delete(jokes.delete);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req,res) => res.notFound());

module.exports = router;
