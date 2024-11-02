import reproducoeService from "../services/reproducoeService.js"; 
import { ObjectId } from "mongodb";

//Listar todos as Reproducoes
const getAllReproducoes = async (req, res) => {
    try{
        const reproducoes = await reproducoeService.getAll();
        res.status(200).json({ reproducoes : reproducoes }); // Cod. 200 (OK)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor. "}); // Cod. 500 (Internal Server Error)
    }
};

//Adicionar uma Reproducao
const createReproducao = async (req, res) => {
    try{
        const {idCriadouro, tagMae, tagPai, dataInseminacao, dataParto, status, dataAtua} = req.body;
        await reproducoeService.Create(idCriadouro, tagMae, tagPai, dataInseminacao, dataParto, status, dataAtua);
        res.sendStatus(201);// Cód. 201 (Created)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

//Deletar uma Reproducao
const deleteReproducao = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            reproducoeService.Delete(id)
            res.sendStatus(204) // Cód. 204 (No Content)
        }else{
            res.sendStatus(400) // Cód. 400 (Bad Request)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor.' })
    }
};

//Atualizar uma Reproducao
const updateReproducao = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const {idCriadouro, tagMae, tagPai, dataInseminacao, dataParto, status, dataAtua} = req.body;
            const reproducao = await reproducoeService.Update(id, idCriadouro, tagMae, tagPai, dataInseminacao, dataParto, status, dataAtua);
            res.status(200).json({ reproducao }); //Cód. 200 (OK)
        } else {
            res.sendStatus(400); //Cód. 400 (Bad request)
        }
    }catch (error) {
        console.log(error);
        res.sendStatus(500); //Cód. 500 (Internal Server Error)
    }
};

//Listar uma única Reproducao
const getOneReproducao = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id
            const reproducao = await reproducoeService.getOne(id)
            if (!reproducao) {
                res.sendStatus(404) //Cód. 404 (Not Found)
            } else {
                res.status(200).json({ reproducao }) //Cód. 200 (OK)
            }
        } else {
            res.sendStatus(400) //Cód. 400 (Bad Request)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500) //Cód. 500 (Internal server error)
    }   
};


export default { getAllReproducoes, createReproducao, deleteReproducao, updateReproducao, getOneReproducao };