const Joke = require('../models/joke');

function jokesIndex(req, res, next){
  Joke
    .find()
    .exec()
    .then((jokes) => res.json(jokes))
    .catch(next);
}

function jokesCreate(req, res, next){
  Joke
    .create(req.body)
    .then((joke) => res.status(201).json(joke))
    .catch(next);
}

function jokesShow(req, res, next) {
  Joke
    .findById(req.params.id)
    .exec()
    .then((joke) => {
      if(!joke) return res.notFound();
      res.json(joke);
    })
    .catch(next);
}

function jokesUpdate(req, res, next) {
  Joke
    .findById(req.params.id)
    .exec()
    .then((joke) => {
      if(!joke) return res.notFound();

      for (const field in req.body){
        joke[field] = req.body[field];
      }

      return joke.save();
    })
    .then((joke) => res.json(joke))
    .catch(next);
}

function jokesDelete(req, res, next) {
  Joke
    .findById(req.params.id)
    .exec()
    .then((joke) => {
      if(!joke) return res.notFound();
      return joke.remove();
    })
    .catch(next);
}

module.exports = {
  index: jokesIndex,
  create: jokesCreate,
  show: jokesShow,
  update: jokesUpdate,
  delete: jokesDelete
};
