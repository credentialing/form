const express = require('express');
const router = express.Router();
const dbConnection = require('./db.connection');


router.get('/',  async  (req, res, next) => {
  let result = await dbConnection.query('select * from Provider');
  res.json(result);
});

router.get('/:id',  async (req, res, next) => {
  //TODO: I know ! i'm not escaping the id, so what? this is ia PoC, so if you are still sending this to prod you has been stoling money.
  let result = await dbConnection.query(`select * from Provider where ProviderID=${req.params.id}`);
  res.json(result);
});


router.post('/',  async  (req, res, next) => {
  const providerCount = await dbConnection.query('select count( * ) as count from Provider');
  const count = providerCount[0].count;
  const insert = await dbConnection.insert({
    ProviderID: count,
    ProviderName: '',
    ProviderFIrstName: '',
    ProviderMidName: '',
    ProviderLastName: '',
    PrimaryAddress1: '',
    PrimaryAddress2: '',
    NPI_ID: '',
    MedicalSchool: '',
    Degree: '',
    YearAwarded : '',
    PrimaryCity : '',
    PrimaryState : '',
    MailingAddress1: '',
    MailingAddress2: '',
    MailingCity: '',
    MailingState: '',
    MailingZipCode: '',
    PrimaryActivity: '',
    Speciality: ''
  });
  res.status(201).json({
    ProviderID: count,
    ProviderName: '',
    ProviderFIrstName: '',
    ProviderMidName: '',
    ProviderLastName: '',
    PrimaryAddress1: '',
    PrimaryAddress2: '',
    NPI_ID: '',
    MedicalSchool: '',
    Degree: '',
    YearAwarded : '',
    PrimaryCity : '',
    PrimaryState : '',
    MailingAddress1: '',
    MailingAddress2: '',
    MailingCity: '',
    MailingState: '',
    MailingZipCode: '',
    PrimaryActivity: '',
    Speciality: ''
  });
});

module.exports = router;