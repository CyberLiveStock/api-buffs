import express from 'express';
const proprietarioRoutes = express.Router()
import proprietarioController from '../controllers/proprietarioController.js';

//Endpoint: Listar todos os Proprietarios
proprietarioRoutes.get("/proprietarios", proprietarioController.getAllProprietarios);

//Endpoint: Cadastrar novo Proprietario
proprietarioRoutes.post("/proprietario", proprietarioController.createProprietario);

//Endpoint: Deletar um Proprietario
proprietarioRoutes.delete("/proprietario/:id", proprietarioController.deleteProprietario);

//Endpoint: Atualizar um Proprietario
proprietarioRoutes.put("/proprietario/:id", proprietarioController.updateProprietario);

//Endpoint: Listar um Proprietario especifico
proprietarioRoutes.get("/proprietario/:id", proprietarioController.getOneProprietario);


export default proprietarioRoutes