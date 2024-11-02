import express from 'express';
const funcionarioRoutes = express.Router()
import funcionarioController from '../controllers/funcionarioController.js';

//Endpoint: Listar todos os Funcionarios
funcionarioRoutes.get("/funcionarios", funcionarioController.getAllFuncionarios);

//Endpoint: Cadastrar novo Funcionario
funcionarioRoutes.post("/funcionario", funcionarioController.createFuncionario);

//Endpoint: Deletar um Funcionario
funcionarioRoutes.delete("/funcionario/:id", funcionarioController.deleteFuncionario);

//Endpoint: Atualizar um Funcionario
funcionarioRoutes.put("/funcionario/:id", funcionarioController.updateFuncionario);

//Endpoint: Listar um Funcionario especifico
funcionarioRoutes.get("/funcionario/:id", funcionarioController.getOneFuncionario);


export default funcionarioRoutes