const SSE = require('express-sse');
const dbConnection = require('./db.connection');
const _EVENTS_ = {
  UPDATED: 'UPDATED'
}
class FormSSE {
  constructor() {
    this.stream = new SSE([]);
    this.check();
    this.pulling();

  }

  async updateCurrent() {
    const statement = `select ProviderID from CredentialCheck`;
    const credentials = await dbConnection.query(statement);
    return credentials.map( c => c.ProviderID);
  }

  check() {
    this.lastCheck = Date.now();
  }
  docComplete(objectInfo) {
    this.stream.send(objectInfo, _EVENTS_.UPDATED);
  }

  async pulling() {

    this.ids = await this.updateCurrent();
    setTimeout(async () => {
      let ids = await this.updateCurrent();
      const id = ids.find( providerId => !this.ids.includes(providerId));
      this.ids = ids;
      this.check();
      if ( id ) {
        this.docComplete({
          timestamp: Date.now(),
          cvId: id
        });
      }
      this.pulling();
    }, 5500); 
  }

  getStream() {
    return this.stream.init;
  }
}


module.exports = new FormSSE();