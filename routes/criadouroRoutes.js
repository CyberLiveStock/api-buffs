import express from 'express';
const criadouroRoutes = express.Router()
import criadouroController from '../controllers/criadouroController.js';

//Endpoint: Listar todos os Criadouro
criadouroRoutes.get("/criadouros", criadouroController.getAllCriadouros);

//Endpoint: Cadastrar novo Criadouro
criadouroRoutes.post("/criadouro", criadouroController.createCriadouro);

//Endpoint: Deletar um Criadouro
criadouroRoutes.delete("/criadouro/:id", criadouroController.deleteCriadouro);

//Endpoint: Atualizar um Criadouro
criadouroRoutes.put("/criadouro/:id", criadouroController.updateCriadouro);

//Endpoint: Listar um Criadouro especifico
criadouroRoutes.get("/criadouro/:id", criadouroController.getOneCriadouro);


export default criadouroRoutes