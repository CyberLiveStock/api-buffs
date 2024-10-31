import express from 'express';
const bufaloRoutes = express.Router()
import bufaloController from '../controllers/bufaloController.js';

//Endpoint: Listar todos os Bufalos
bufaloRoutes.get("/bufalos", bufaloController.getAllBufalos);

//Endpoint: Cadastrar novo Bufalo
bufaloRoutes.post("/bufalo", bufaloController.createBufalo);

//Endpoint: Deletar um Bufalo
bufaloRoutes.delete("/bufalo/:id", bufaloController.deleteBufalo);

//Endpoint: Atualizar um Bufalo
bufaloRoutes.put("/bufalo/:id", bufaloController.updateBufalo);

//Endpoint: Listar um Bufalo especifico
bufaloRoutes.get("/bufalo/:id", bufaloController.getOneBufalo);


export default bufaloRoutes