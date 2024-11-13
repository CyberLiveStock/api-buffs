import express from 'express';
const financeiroRoutes = express.Router()
import financeiroController from '../controllers/financeiroController.js';

//Endpoint: Listar todos os financeiro
bufaloRoutes.get("/financeiros", financeiroController.getAllFinanceiros);

//Endpoint: Cadastrar novo financeiro
bufaloRoutes.post("/financeiro", financeiroController.createFinanceiro);

//Endpoint: Deletar um financeiro
bufaloRoutes.delete("/financeiro/:id", financeiroController.deleteFinanceiro);

//Endpoint: Atualizar um financeiro
bufaloRoutes.put("/financeiro/:id", financeiroController.updateFinanceiro);

//Endpoint: Listar um financeiro especifico
bufaloRoutes.get("/bufinanceirofalo/:id", financeiroController.getOneFinanceiro);


export default financeiroRoutes