const Category = require('../models/category');

function categoriesIndex(req, res, next){
  Category
    .find()
    .exec()
    .then((categories) => res.json(categories))
    .catch(next);
}

function categoriesCreate(req, res, next){
  Category
    .create(req.body)
    .then((category) => res.status(201).json(category))
    .catch(next);
}

function categoriesShow(req, res, next) {
  Category
    .findById(req.params.id)
    .exec()
    .then((category) => {
      if(!category) return res.notFound();
      res.json(category);
    })
    .catch(next);
}

function categoriesUpdate(req, res, next) {
  Category
    .findById(req.params.id)
    .exec()
    .then((category) => {
      if(!category) return res.notFound();

      for (const field in req.body){
        category[field] = req.body[field];
      }

      return category.save();
    })
    .then((category) => res.json(category))
    .catch(next);
}

function categoriesDelete(req, res, next) {
  Category
    .findById(req.params.id)
    .exec()
    .then((category) => {
      if(!category) return res.notFound();
      return category.remove();
    })
    .then((categories) => res.json(categories))
    .catch(next);
}

module.exports = {
  index: categoriesIndex,
  create: categoriesCreate,
  show: categoriesShow,
  update: categoriesUpdate,
  delete: categoriesDelete
};
