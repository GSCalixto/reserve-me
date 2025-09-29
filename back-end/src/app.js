//Instanciando servidor HTTP e websocket

import express from 'express';
const http = require("http");
const { Server } = require("socket.io")

const app = express();
const httpServer  = http.createServer(app);

const io = new Server( httpServer );

export {httpServer, io};