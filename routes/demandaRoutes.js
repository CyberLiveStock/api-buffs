import express from 'express';
const demandaRoutes = express.Router()
import demandaController from '../controllers/demandaController.js';

//Endpoint: Listar todos os Demandas
demandaRoutes.get("/demandas", demandaController.getAllDemandas);

//Endpoint: Cadastrar novo Demanda
demandaRoutes.post("/demanda", demandaController.createDemanda);

//Endpoint: Deletar um Demanda
demandaRoutes.delete("/demanda/:id", demandaController.deleteDemanda);

//Endpoint: Atualizar um Demanda
demandaRoutes.put("/demanda/:id", demandaController.updateDemanda);

//Endpoint: Listar um Demanda especifico
demandaRoutes.get("/demanda/:id", demandaController.getOneDemanda);

//Endpoint: Listar 
demandaRoutes.get("/demandasGrafFunc", demandaController.getRendimento);

//Endpoint: Listar 
demandaRoutes.get("/demandasGrafCat", demandaController.getRendimentoCategoria);

export default demandaRoutes