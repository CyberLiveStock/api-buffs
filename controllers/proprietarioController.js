import proprietarioService from "../services/proprietarioService.js";
import { ObjectId } from "mongodb";

//Listar todos os Proprietario
const getAllProprietarios = async (req, res) => {
    try{
        const proprietarios = await proprietarioService.getAll();
        res.status(200).json({ proprietarios : proprietarios }); // Cod. 200 (OK)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor. "}); // Cod. 500 (Internal Server Error)
    }
};

//Adicionar um Proprietario
const createProprietario = async (req, res) => {
    try{
        const {nome, cnpj, email, telefone, dataNasc, endereco} = req.body;
        await proprietarioService.Create(nome, cnpj, email, telefone, dataNasc, endereco);
        res.sendStatus(201);// Cód. 201 (Created)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

//Deletar um Proprietario
const deleteProprietario = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            proprietarioService.Delete(id)
            res.sendStatus(204) // Cód. 204 (No Content)
        }else{
            res.sendStatus(400) // Cód. 400 (Bad Request)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor.' })
    }
};

//Atualizar um Proprietario
const updateProprietario = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const {nome, cnpj, email, telefone, dataNasc, endereco} = req.body;
            const proprietario = await proprietarioService.Update(id, nome, cnpj, email, telefone, dataNasc, endereco);
            res.status(200).json({ proprietario }); //Cód. 200 (OK)
        } else {
            res.sendStatus(400); //Cód. 400 (Bad request)
        }
    }catch (error) {
        console.log(error);
        res.sendStatus(500); //Cód. 500 (Internal Server Error)
    }
};

//Listar um único Proprietario
const getOneProprietario = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id
            const proprietario = await proprietarioService.getOne(id)
            if (!proprietario) {
                res.sendStatus(404) //Cód. 404 (Not Found)
            } else {
                res.status(200).json({ proprietario }) //Cód. 200 (OK)
            }
        } else {
            res.sendStatus(400) //Cód. 400 (Bad Request)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500) //Cód. 500 (Internal server error)
    }   
};


export default { getAllProprietarios, createProprietario, deleteProprietario, updateProprietario, getOneProprietario };