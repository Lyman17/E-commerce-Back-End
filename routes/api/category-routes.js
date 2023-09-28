const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories (including associated Products)
  Category.findAll();
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value (including associated Products)
  Category.findOne();
});

router.post('/', (req, res) => {
  // create a new category
  Category.create();
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update();
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy();
});

module.exports = router;