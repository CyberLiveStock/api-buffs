import mongoose from "mongoose";

const criadouroSchema  = new mongoose.Schema({
    idProprietario: String, //ATENÇÃO: ALTERAR PARA PEGAR O OBJECTID DE Proprietario
    nome: String,
    rua: String,  
    bairro: String,
    cidade: String,
    estado: String,
    numero: Number,
})

const Criadouro = mongoose.model('Criadouro', criadouroSchema)
export default Criadouro