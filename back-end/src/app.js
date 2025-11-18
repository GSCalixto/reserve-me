//Importando o servidor HTTP e o WebSocket, configurando a porta do servidor
import { httpServer, app } from "./http.js";
import "./webSocket.js";

import { selecionaRestaurante } from "./config/database.js";


//const con = global.connection;

app.get('/', async (req, res) => {
  try {
    res.json({
      
    });
  } catch (error) {
    console.error('Erro ao processar a requisição:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.get('/restaurantes', async (req, res) => {
  try {
    const restaurantes = await selecionaRestaurante();

    res.json(restaurantes);

  } catch (error) {
    console.error('Erro ao processar a requisição:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack); // Loga o erro completo para debug
  res.status(500).send('Ocorreu um erro interno no servidor!'); // Resposta genérica para o cliente
});

httpServer.listen(3003);