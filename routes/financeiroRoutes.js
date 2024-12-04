import express from 'express';
const financeiroRoutes = express.Router()
import financeiroController from '../controllers/financeiroController.js';

//Endpoint: Listar todos os financeiro
financeiroRoutes.get("/financeiros", financeiroController.getAllFinanceiros);

//Endpoint: Cadastrar novo financeiro
financeiroRoutes.post("/financeiro", financeiroController.createFinanceiro);

//Endpoint: Deletar um financeiro
financeiroRoutes.delete("/financeiro/:id", financeiroController.deleteFinanceiro);

//Endpoint: Atualizar um financeiro
financeiroRoutes.put("/financeiro/:id", financeiroController.updateFinanceiro);

//Endpoint: Listar um financeiro especifico
financeiroRoutes.get("/financeiro/:id", financeiroController.getOneFinanceiro);

//Endpoint: 
financeiroRoutes.get("/financeiroCat", financeiroController.getCatFinanceiro);


export default financeiroRoutes