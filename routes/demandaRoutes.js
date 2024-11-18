import express from 'express';
const demandaRoutes = express.Router()
import demandaController from '../controllers/demandaController.js';
import Demanda from "../Models/Demandas.js";

//Endpoint: Listar todos os Demandas
demandaRoutes.get("/demandas", async (req, res) => {
    try {
        const demandas = await Demanda.find().populate("idFuncionario", "nome").exec();
        res.status(200).json({ demandas }); // Retorna as demandas dentro de um objeto
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
//Endpoint: Cadastrar novo Demanda
demandaRoutes.post("/demanda", demandaController.createDemanda);

//Endpoint: Deletar um Demanda
demandaRoutes.delete("/demanda/:id", demandaController.deleteDemanda);

//Endpoint: Atualizar um Demanda
demandaRoutes.put("/demanda/:id", demandaController.updateDemanda);

//Endpoint: Listar um Demanda especifico
demandaRoutes.get("/demanda/:id", demandaController.getOneDemanda);


export default demandaRoutes