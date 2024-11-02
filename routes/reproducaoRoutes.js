import express from 'express';
const reproducaoRoutes = express.Router()
import reproducaoController from '../controllers/reproducaoController.js';

//Endpoint: Listar todos os Proprietarios
reproducaoRoutes.get("/reproducoes", reproducaoController.getAllReproducoes);

//Endpoint: Cadastrar novo Proprietario
reproducaoRoutes.post("/reproducao", reproducaoController.createReproducao);

//Endpoint: Deletar um Proprietario
reproducaoRoutes.delete("/reproducao/:id", reproducaoController.deleteReproducao);

//Endpoint: Atualizar um Proprietario
reproducaoRoutes.put("/reproducao/:id", reproducaoController.updateReproducao);

//Endpoint: Listar um Proprietario especifico
reproducaoRoutes.get("/reproducao/:id", reproducaoController.getOneReproducao);


export default reproducaoRoutes