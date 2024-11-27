import mongoose from "mongoose";

const descEndSchema = new mongoose.Schema({
    rua: String,  
    bairro: String,
    cidade: String,
    estado: String,
    numero: Number,
})

const funcionarioSchema  = new mongoose.Schema({
    idCriadouro: String, //ATENÇÃO: ALTERAR PARA PEGAR O OBJECTID DE Criadouro
    nome: String,
    cpf: String,
    email: String,
    genero: String, 
    descCargo: String,
    telefone: String,
    dataNasc: Date,
    status: String,
    salario: Number,
    endereco: [descEndSchema] //Documento aninhado de Endereço
})


const Funcionario = mongoose.model('Funcionario', funcionarioSchema)
export default Funcionario