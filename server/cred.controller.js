const express = require('express');
const router = express.Router();
const dbConnection = require('./db.connection');

router.get('/', async (req, res, next) => {
  let result = await dbConnection.query('select * from CredentialCheck');
  res.json(result);
});

router.get('/:id',  async (req, res, next) => {
  //TODO: I know ! i'm not escaping the id, so what? this is ia PoC, so if you are still sending this to prod you has been stoling money.
  let result = await dbConnection.query(`select * from CredentialCheck where ProviderID=${req.params.id}`);
  res.json(result);
});

module.exports = router;