//definindo os eventos do WebSocket e tudo o que ele vai fazer
import { io } from "./http.js";

io.on("connection", (socket) => { console.log(socket.id); });