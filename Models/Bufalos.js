import mongoose from "mongoose";

// Documento Aninhado Zootecnico
const zootecnicoSchema = new mongoose.Schema({
    peso: Number,
    comprimentoCorporal: Number,
    circuferenciaCorporal: Number,
    alturaCernelha: Number,
    suplementacao: String,
    tipoRacao: String,
    tipoPastagem: String,
    dataAtual: Date //Data em que as atualização dos dados foram feitas
})

// Documento Aninhado Sanitario
const sanitarioSchema = new mongoose.Schema({
    tipoSanitario: String,
    nomeTratamento: String,
    loteMedicamento: String,
    dataAplicacao: Date,
    dataRetorno: Date,
    idFunionario: String  //ATENÇÃO: ALTERAR PARA PEGAR O OBJECTID DE FUNCIONARIO
})

const bufaloSchema = new mongoose.Schema({
    tagBufalo: Number,
    idCriadouro: Number,
    nome: String,
    idade: Number,
    raca: String,
    sexo: String,
    dataNasc: Date,
    destinoFinal: String,
    zootecnico: [zootecnicoSchema],
    sanitario: [sanitarioSchema],
    historicoZootecnico: [zootecnicoSchema],
    historicoSanitario: [sanitarioSchema]
})

const Bufalo = mongoose.model('Bufalo', bufaloSchema)
export default Bufalo