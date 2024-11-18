import mongoose from "mongoose";

const demandaSchema  = new mongoose.Schema({
    dataInicio: Date,
    dataFim: Date,
    descricao: String,
    idFuncionario: { type: mongoose.Schema.Types.ObjectId, ref: "Funcionario" },
    categoria: String,
    status: String
})

const Demanda = mongoose.model('Demanda', demandaSchema)
export default Demanda