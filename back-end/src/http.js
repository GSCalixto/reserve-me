//Instanciando servidor HTTP e websocket

import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
app.use(bodyParser.json());

const httpServer = http.createServer(app);

const io = new Server(httpServer);

export { httpServer, io, app };