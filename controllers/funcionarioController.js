import funcionarioService from "../services/funcionarioService.js";
import { ObjectId } from "mongodb";

//Listar todos os Funcionarios
const getAllFuncionarios = async (req, res) => {
    try{
        const funcionarios = await funcionarioService.getAll();
        res.status(200).json({ funcionarios: funcionarios }); // Cod. 200 (OK)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor. "}); // Cod. 500 (Internal Server Error)
    }
};

//Adicionar um Funcionario
const createFuncionario = async (req, res) => {
    try{
        const {idCriadouro, nome, cpf, email, genero, descCargo, telefone, dataNasc, status, endereco, salario} = req.body;
        await funcionarioService.Create(idCriadouro, nome, cpf, email, genero, descCargo, telefone, dataNasc, status, endereco, salario);
        res.sendStatus(201);// Cód. 201 (Created)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

//Deletar um Funcionario
const deleteFuncionario = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            funcionarioService.Delete(id)
            res.sendStatus(204) // Cód. 204 (No Content)
        }else{
            res.sendStatus(400) // Cód. 400 (Bad Request)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor.' })
    }
};

//Atualizar um Funcionario
const updateFuncionario = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const {idCriadouro, nome, cpf, email, genero, descCargo, telefone, dataNasc, status, endereco, salario} = req.body;
            const funcionario = await funcionarioService.Update(id, idCriadouro, nome, cpf, email, genero, descCargo, telefone, dataNasc, status, endereco, salario);
            res.status(200).json({ funcionario }); //Cód. 200 (OK)
        } else {
            res.sendStatus(400); //Cód. 400 (Bad request)
        }
    }catch (error) {
        console.log(error);
        res.sendStatus(500); //Cód. 500 (Internal Server Error)
    }
};

//Listar um único Funcionario
const getOneFuncionario = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id
            const funcionario = await funcionarioService.getOne(id)
            if (!funcionario) {
                res.sendStatus(404) //Cód. 404 (Not Found)
            } else {
                res.status(200).json({ funcionario }) //Cód. 200 (OK)
            }
        } else {
            res.sendStatus(400) //Cód. 400 (Bad Request)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500) //Cód. 500 (Internal server error)
    }   
};

const inativarFuncionario = async (id) => {
    try {
        const resultado = await Funcionario.findByIdAndUpdate(
            id,
            { status: "Inativo" },
            { new: true } // Retorna o documento atualizado
        );
        return resultado; // Retorna o funcionário atualizado ou null se não encontrado
    } catch (error) {
        console.error("Erro ao inativar o funcionário:", error);
        throw error; // Repassa o erro para ser tratado no controller
    }
};


export default { getAllFuncionarios, createFuncionario, deleteFuncionario, updateFuncionario, getOneFuncionario, inativarFuncionario};