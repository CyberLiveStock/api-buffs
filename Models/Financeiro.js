import mongoose from "mongoose";

const financieroSchema  = new mongoose.Schema({
    data: Date,
    categoria: String,
    descricao: String,
    beneficiario: String,
    valor: Float,
    tipo: String,
    status: String,
    idFuncionario: String
})


const Financeiro = mongoose.model('Financeiro', financieroSchema)
export default Financeiro