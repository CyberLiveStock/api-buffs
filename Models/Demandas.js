import mongoose from "mongoose";

const demandaSchema  = new mongoose.Schema({
    dataInicio: Date,
    dataFim: Date,
    descricao: String,
    idFuncionario: String,
    categoria: String,
    status: String
})

const Demanda = mongoose.model('Demanda', demandaSchema)
export default Demanda