import criadouroService from "../services/criadouroService.js";
import { ObjectId } from "mongodb";

//Listar todos os Criadouros
const getAllCriadouros = async (req, res) => {
    try{
        const criadouros = await criadouroService.getAll();
        res.status(200).json({ criadouros: criadouros }); // Cod. 200 (OK)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor. "}); // Cod. 500 (Internal Server Error)
    }
};

//Adicionar um Criadouro
const createCriadouro = async (req, res) => {
    try{
        const {idProprietario, nome, rua, bairro, cidade, estado, numero} = req.body;
        await criadouroService.Create(idProprietario, nome, rua, bairro, cidade, estado, numero);
        res.sendStatus(201);// Cód. 201 (Created)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

//Deletar um Criadouro
const deleteCriadouro = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            criadouroService.Delete(id)
            res.sendStatus(204) // Cód. 204 (No Content)
        }else{
            res.sendStatus(400) // Cód. 400 (Bad Request)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor.' })
    }
};

//Atualizar um Criadouro
const updateCriadouro = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const {idProprietario, nome, rua, bairro, cidade, estado, numero} = req.body;
            const criadouro = await criadouroService.Update(id, idProprietario, nome, rua, bairro, cidade, estado, numero);
            res.status(200).json({ criadouro }); //Cód. 200 (OK)
        } else {
            res.sendStatus(400); //Cód. 400 (Bad request)
        }
    }catch (error) {
        console.log(error);
        res.sendStatus(500); //Cód. 500 (Internal Server Error)
    }
};

//Listar um único Criadouro
const getOneCriadouro = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id
            const criadouro = await criadouroService.getOne(id)
            if (!criadouro) {
                res.sendStatus(404) //Cód. 404 (Not Found)
            } else {
                res.status(200).json({ criadouro }) //Cód. 200 (OK)
            }
        } else {
            res.sendStatus(400) //Cód. 400 (Bad Request)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500) //Cód. 500 (Internal server error)
    }   
};


export default { getAllCriadouros, createCriadouro, deleteCriadouro, updateCriadouro, getOneCriadouro };