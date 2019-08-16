const SSE = require('express-sse');
const _EVENTS_ = {
  UPDATED: 'UPDATED'
}
class FormSSE {
  constructor() {
    this.stream = new SSE([]);
    this.pulling();
  }

  docComplete(objectInfo) {
    this.stream.send(objectInfo, _EVENTS_.UPDATED);
  }

  pulling() {
    setTimeout( () => {
      //query a la base para verificar nuevos inserts
      this.docComplete({
        timestamp: Date.now(),
        cvId: "1"
      });
      this.pulling();
    }, 5500); 
  }

  getStream() {
    return this.stream.init;
  }
}


module.exports = new FormSSE();