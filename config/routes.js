const router = require('express').Router();
const auth = require('../controllers/auth');
const jokes = require('../controllers/jokes');
const users = require('../controllers/users');
const categories = require('../controllers/categories');

router.route('/jokes')
  .get(jokes.index)
  .post(jokes.create);

router.route('/jokes/:id')
  .get(jokes.show)
  .put(jokes.update)
  .delete(jokes.delete);


router.route('/categories')
  .get(categories.index)
  .post(categories.create);


router.route('/categories/:id')
  .get(categories.show)
  .put(categories.update)
  .delete(categories.delete);

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
