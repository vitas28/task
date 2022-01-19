const { Router } = require('express');
const router = Router();
const data = require('../mockedData/product.json');

router.get('/', async (req, res) => {
  res.status(200).json(data);
});

router.post('/', async (req, res) => {
  res.status(200).json({ message: 'Product was added' });
});

router.put('/', async (req, res) => {
  res.status(200).json({ message: 'Some detail was changed' });
});

router.delete('/', async (req, res) => {
  res.status(200).json({ message: 'Product was deleted' });
});

module.exports = router;
