import mongoose from "mongoose";

const reproducaoSchema  = new mongoose.Schema({
    idCriadouro: String, //ATENÇÃO: ALTERAR PARA PEGAR O OBJECTID DE Criadouro
    tagMae: Number,
    tagPai: Number,
    dataInseminacao: Date,
    dataParto: Date,
    status: String,
    dataAtua: Date //DATA EM QUE ESSE DOCUMENTO VAI SER ATUALIZADO
})

const Reproducao = mongoose.model('Reproducao', reproducaoSchema)
export default Reproducao