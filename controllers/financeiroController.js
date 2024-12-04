import financeiroService from "../services/financeiroService.js";
import { ObjectId } from "mongodb";

//Listar todos os Financeiros
const getAllFinanceiros = async (req, res) => {
    try{
        const financeiros = await financeiroService.getAll();
        res.status(200).json({ financeiros:financeiros }); // Cod. 200 (OK)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor. "}); // Cod. 500 (Internal Server Error)
    }
};

//Adicionar um Financeiro
const createFinanceiro = async (req, res) => {
    try{
        const {data, categoria, descricao, beneficiario, valor, tipo, status, idFuncionario} = req.body;
        await financeiroService.Create(data, categoria, descricao, beneficiario, valor, tipo, status, idFuncionario);
        res.sendStatus(201);// Cód. 201 (Created)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

//Deletar um Financeiro
const deleteFinanceiro = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            financeiroService.Delete(id)
            res.sendStatus(204) // Cód. 204 (No Content)
        }else{
            res.sendStatus(400) // Cód. 400 (Bad Request)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor.' })
    }
};

//Atualizar um Financeiro
const updateFinanceiro = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const {data, categoria, descricao, beneficiario, valor, tipo, status, idFuncionario} = req.body;
            const financeiro = await financeiroService.Update(id, data, categoria, descricao, beneficiario, valor, tipo, status, idFuncionario);
            res.status(200).json({ financeiro }); //Cód. 200 (OK)
        } else {
            res.sendStatus(400); //Cód. 400 (Bad request)
        }
    }catch (error) {
        console.log(error);
        res.sendStatus(500); //Cód. 500 (Internal Server Error)
    }
};

//Listar um único Financeiro
const getOneFinanceiro = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id
            const financeiro = await financeiroService.getOne(id)
            if (!financeiro) {
                res.sendStatus(404) //Cód. 404 (Not Found)
            } else {
                res.status(200).json({ financeiro }) //Cód. 200 (OK)
            }
        } else {
            res.sendStatus(400) //Cód. 400 (Bad Request)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500) //Cód. 500 (Internal server error)
    }   
};

const getCatFinanceiro = async (req, res) => {
    try {
        const financeiro = await financeiroService.calcularCatFinanceiro();
        res.status(200).json(financeiro);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export default { getAllFinanceiros, createFinanceiro, deleteFinanceiro, updateFinanceiro, getOneFinanceiro, getCatFinanceiro };