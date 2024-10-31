import mongoose from "mongoose";

const proprietarioSchema  = new mongoose.Schema({
    nome: String,
    cnpj: Number,
    email: String,
    rua: String,  
    bairro: String,
    cidade: String,
    estado: String,
    numero: Number,
    telefone: Number,
    dataNasc: Date
})

const Proprietario = mongoose.model('Proprietario', proprietarioSchema)
export default Proprietario