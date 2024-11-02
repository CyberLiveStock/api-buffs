import mongoose from "mongoose";

const descEndProp = new mongoose.Schema({
    rua: String,  
    bairro: String,
    cidade: String,
    estado: String,
    numero: Number
})

const proprietarioSchema  = new mongoose.Schema({
    nome: String,
    cnpj: Number,
    email: String,
    telefone: Number,
    dataNasc: Date,
    endereco: [descEndProp]
})

const Proprietario = mongoose.model('Proprietario', proprietarioSchema)
export default Proprietario