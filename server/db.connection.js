
const sql = require("mssql");
const config = {
  user: 'sa',
  password: 'G123456789!',
  server: 'db',
  database: 'HealthCareMaster'//'Test'
}

const prepareStatement = Provider => {
  
  return `INSERT INTO Provider (ProviderID, ProviderName, ProviderFIrstName, ProviderMidName, ProviderLastName, PrimaryAddress1, PrimaryAddress2, PrimaryCity, PrimaryState, PrimaryZipCode, PrimaryPhone, MailingAddress1, MailingAddress2, MailingCity, MailingState, MailingZipCode, PrimaryActivity, Speciality, NPI_ID, MedicalSchool, Degree, YearAwarded ) VALUES ('${Provider.ProviderID}', '${Provider.ProviderName}', '${Provider.ProviderFIrstName}', '${Provider.ProviderMidName}','${Provider.ProviderLastName}','${Provider.PrimaryAddress1}','${Provider.PrimaryAddress2}','${Provider.PrimaryCity}','${Provider.PrimaryState}','${Provider.PrimaryZipCode}','${Provider.PrimaryPhone}','${Provider.MailingAddress1}','${Provider.MailingAddress2}','${Provider.MailingCity}','${Provider.MailingState}','${Provider.MailingZipCode}','${Provider.PrimaryActivity}','${Provider.Speciality}','${Provider.NPI_ID}','${Provider.MedicalSchool}','${Provider.Degree}','${Provider.YearAwarded}')`;
}
const processError = (e) => {
  console.log(e);
  console.error('Connection fail, system will exit');
  process.exit(0);
}
class Connection {
  constructor () {
  }

  async connect() {
    this.pool = await new sql.ConnectionPool(config)
    return this.pool.connect();
  }

  async query(query) {
    try {
      const connection  = await this.connect();
      const request = connection.request(); 
      const queryResult =  await request.query(query);
      return queryResult.recordset || [];
    } catch (e) {
      processError(e);
    } finally {
      await this.pool.close();
    }
  }

  async insert(object, parser = prepareStatement) {
    try {
      const connection  = await this.connect();
      const transaction = new sql.Transaction(connection);
  
      await transaction.begin();
  
      const request = new sql.Request(transaction);
    
      await request.query(parser(object));
  
      const commit = await transaction.commit();

      return commit;
    } catch (e) {
      processError(e);
    } finally {
      await this.pool.close();
    }
  }
}

module.exports = new Connection();