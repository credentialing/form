const SSE = require('express-sse');
const dbConnection = require('./db.connection');
const _EVENTS_ = {
  UPDATED: 'UPDATED',
  PING: 'PING'
}
class FormSSE {
  constructor() {
    this.stream = new SSE([]);
    this.check();
    setTimeout( _ => this.pulling(), 4000);
    this.ping();
    setInterval( _ => this.ping(), 15000);

  }

  async updateCurrent() {
    const statement = `select ProviderID from CredentialCheck`;
    const credentials = await dbConnection.query(statement);
    return credentials.map( c => c.ProviderID);
  }

  check() {
    this.lastCheck = Date.now();
  }
  ping() {
    this.stream.send({}, _EVENTS_.PING);
  }

  docComplete(objectInfo) {
    this.stream.send(objectInfo, _EVENTS_.UPDATED);
  }

  async pulling() {

    this.ids = await this.updateCurrent();
    setTimeout(async () => {
      console.log('Running notification process');
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