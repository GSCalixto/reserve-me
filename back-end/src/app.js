//Importando o servidor HTTP e o WebSocket, configurando a porta do servidor
import {httpServer} from "./http.js";
import "./webSocket.js";

httpServer.listen(3000, () => { console.log("Server is running on port 3000") });