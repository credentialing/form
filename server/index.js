const express = require("express");
const cors = require('cors');
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('certs/key.pem');
var certificate = fs.readFileSync('certs/cert.pem');
const controller = require('./form.controller');
const sse = require('./form.sse');
const server = express();
const port = 8001;
require('./db.connection');
server.use(cors());
server.get('/health', (req, res) => res.send(200));
server.use('/doc/events', sse.getStream());
server.use('/doc', controller);

const credentials = {key: privateKey, cert: certificate, passphrase: '1234'};

const httpServer = http.createServer(server);
const httpsServer = https.createServer(credentials, server);

httpServer.listen(8001);
httpsServer.listen(443);
