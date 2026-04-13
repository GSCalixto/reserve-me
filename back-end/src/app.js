//Importando o servidor HTTP e o WebSocket, configurando a porta do servidor
import { httpServer, app } from "./http.js";
import "./webSocket.js";

import { selecionaRestaurante, cadastraRestaurante, deletarRestaurante, atualizarRestaurante } from "./config/database.js";


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

app.post('/cadastrar_restaurante', async (req, res) => { 
  try {
    const { name, email_address } = req.body;
    console.log(req.body);
    const novoRestaurante = await cadastraRestaurante(name, email_address);
    res.status(201).json(novoRestaurante);
  } catch (error) {
    console.error('Erro ao cadastrar restaurante:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.delete('/deletar_restaurante/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const restauranteDeletado = await deletarRestaurante(id);
    if (restauranteDeletado) {
      res.json({ message: 'Restaurante deletado com sucesso', restaurante: restauranteDeletado });
    } else {
      res.status(404).json({ error: 'Restaurante não encontrado' });
    };
    // Lógica para deletar o restaurante com o ID especificado
  } catch (error) {
    console.error('Erro ao deletar restaurante:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.put('/atualizar_restaurante/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email_address } = req.body;
    const restauranteAtualizado = await atualizarRestaurante(id, name, email_address);
    if (restauranteAtualizado) {
      res.json({ message: 'Restaurante atualizado com sucesso', restaurante: restauranteAtualizado });
    } else {
      res.status(404).json({ error: 'Restaurante não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao atualizar restaurante:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});


app.use((err, req, res, next) => {
  console.error(err.stack); // Loga o erro completo para debug
  res.status(500).send('Ocorreu um erro interno no servidor!'); // Resposta genérica para o cliente
});

httpServer.listen(3003);