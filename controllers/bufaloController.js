import bufaloService from "../services/bufaloService.js";
import { ObjectId } from "mongodb";

//Listar todos os Bufalos
const getAllBufalos = async (req, res) => {
    try{
        const bufalos = await bufaloService.getAll();
        res.status(200).json({ bufalos: bufalos }); // Cod. 200 (OK)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor. "}); // Cod. 500 (Internal Server Error)
    }
};

//Adicionar um Bufalo
const createBufalo = async (req, res) => {
    try{
        const {tagBufalo, idCriadouro, nome, idade, raca, sexo, dataNasc, destinoFinal, zootecnico, sanitario} = req.body;
        await bufaloService.Create(tagBufalo, idCriadouro, nome, idade, raca, sexo, dataNasc, destinoFinal, zootecnico, sanitario);
        res.sendStatus(201);// Cód. 201 (Created)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

//Deletar um Bufalo
const deleteBufalo = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            bufaloService.Delete(id)
            res.sendStatus(204) // Cód. 204 (No Content)
        }else{
            res.sendStatus(400) // Cód. 400 (Bad Request)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor.' })
    }
};

//Atualizar um Bufalo
const updateBufalo = async (req, res) => {
    try {
        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: "ID inválido" }); // Cód. 400 (Bad request)
        }

        const {
            tagBufalo,
            idCriadouro,
            nome,
            idade,
            raca,
            sexo,
            dataNasc,
            destinoFinal,
            zootecnico,
            sanitario
        } = req.body;

        const bufalo = await bufaloService.Update(
            id,
            tagBufalo,
            idCriadouro,
            nome,
            idade,
            raca,
            sexo,
            dataNasc,
            destinoFinal,
            zootecnico,
            sanitario
        );

        res.status(200).json({
            message: "Búfalo atualizado com sucesso!",
            bufalo
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || "Erro interno do servidor" }); // Cód. 500 (Internal Server Error)
    }
};

//Listar um único Bufalo
const getOneBufalo = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id
            const bufalo = await bufaloService.getOne(id)
            if (!bufalo) {
                res.sendStatus(404) //Cód. 404 (Not Found)
            } else {
                res.status(200).json({ bufalo }) //Cód. 200 (OK)
            }
        } else {
            res.sendStatus(400) //Cód. 400 (Bad Request)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500) //Cód. 500 (Internal server error)
    }   
};


export default { getAllBufalos, createBufalo, deleteBufalo, updateBufalo, getOneBufalo };