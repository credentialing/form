
const sql = require("mssql");
const config = {
  user: 'sa',
  password: 'G123456789!',
  server: 'db',
  database: 'HealthCareMaster'//'Test'
}
// const getCredentialCheckID = () => {

// };
// const getProvider = () => {
//   ProviderID,
// 	ProviderName
// 	ProviderFIrstName
// 	ProviderMidName
// 	ProviderLastName
// 	PrimaryAddress1
// 	PrimaryAddress2
// 	PrimaryCity
// 	PrimaryState
// 	PrimaryZipCode
// 	PrimaryPhone
// 	MailingAddress1
// 	MailingAddress2
// 	MailingCity
// 	MailingState
// 	MailingZipCode
// 	PrimaryActivity
// 	Speciality
// 	NPI_ID
// 	MedicalSchool
// 	Degree
// 	YearAwarded
// };
// const getProviderCert = () => {
// 	ProviderCertID
// 	ProviderID 
// 	Board 
// 	Certification 
// 	PrimaryCert 
// };
// connect to your database
sql.connect(config, function (err) {
  if (err) console.log(err);
  console.log('connected')
  setInterval( () => {
 
    const request = new sql.Request();
    request.query('select * from CredentialCheck', function (err, recordset) {
      try {

        console.log(err)
        console.log(recordset);
      }catch (e){
        console.log(e)
      }
    });
    
  }, 10000) 
});