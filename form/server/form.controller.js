const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.send('Online');
});

router.get('/:id', (req, res, next) => {
  res.send('Online');
});


router.post('/', (req, res, next) => {
  res.send('Online');
});

module.exports = router;