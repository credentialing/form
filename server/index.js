const express = require("https-localhost")
const cors = require('cors')
const controller = require('./form.controller');
const sse = require('./form.sse');
const server = express();
const port = 8001;
server.use(cors());
server.get('/health', (req, res) => res.send(200));
server.use('/doc/events', sse.getStream());
server.use('/doc', controller);
server.serve('../app')
server.listen(port, (err, response)=> {
  console.log('server online', err, response);
});
