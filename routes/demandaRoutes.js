import express from 'express';
const demandaRoutes = express.Router()
import demandaController from '../controllers/demandaController.js';

//Endpoint: Listar todos os Demandas
<<<<<<< HEAD
demandaRoutes.get("/demandas", demandaController.getAllDemandas);
=======
demandaRoutes.get("/demandas",  demandaController.getAllDemandas);

>>>>>>> 11c3460901b9b1306bff4ca9cafb5a6f85dc456f
//Endpoint: Cadastrar novo Demanda
demandaRoutes.post("/demanda", demandaController.createDemanda);

//Endpoint: Deletar um Demanda
demandaRoutes.delete("/demanda/:id", demandaController.deleteDemanda);

//Endpoint: Atualizar um Demanda
demandaRoutes.put("/demanda/:id", demandaController.updateDemanda);

//Endpoint: Listar um Demanda especifico
demandaRoutes.get("/demanda/:id", demandaController.getOneDemanda);


export default demandaRoutes