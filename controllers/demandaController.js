import demandaService from "../services/DemandaService.js";
import { ObjectId } from "mongodb";

//Listar todos os Demandas
const getAllDemandas = async (req, res) => {
    try{
        const demandas = await demandaService.getAll();
        res.status(200).json({ demandas : demandas }); // Cod. 200 (OK)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor. "}); // Cod. 500 (Internal Server Error)
    }
};

//Adicionar um Demanda
const createDemanda = async (req, res) => {
    try{
        const {dataInicio, dataFim, descricao, idFuncionario, categoria, status} = req.body;
        await demandaService.Create(dataInicio, dataFim, descricao, idFuncionario, categoria, status);
        res.sendStatus(201);// Cód. 201 (Created)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

//Deletar um Demanda
const deleteDemanda = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            demandaService.Delete(id)
            res.sendStatus(204) // Cód. 204 (No Content)
        }else{
            res.sendStatus(400) // Cód. 400 (Bad Request)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor.' })
    }
};

//Atualizar um Demanda
const updateDemanda = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const {dataInicio, dataFim, descricao, idFuncionario, categoria, status} = req.body;
            const demanda = await demandaService.Update(id, dataInicio, dataFim, descricao, idFuncionario, categoria, status);
            res.status(200).json({ demanda }); //Cód. 200 (OK)
        } else {
            res.sendStatus(400); //Cód. 400 (Bad request)
        }
    }catch (error) {
        console.log(error);
        res.sendStatus(500); //Cód. 500 (Internal Server Error)
    }
};

//Listar um único Demanda
const getOneDemanda = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id
            const demanda = await demandaService.getOne(id)
            if (!demanda) {
                res.sendStatus(404) //Cód. 404 (Not Found)
            } else {
                res.status(200).json({ demanda }) //Cód. 200 (OK)
            }
        } else {
            res.sendStatus(400) //Cód. 400 (Bad Request)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500) //Cód. 500 (Internal server error)
    }   
};


export default { getAllDemandas, createDemanda, deleteDemanda, updateDemanda, getOneDemanda };