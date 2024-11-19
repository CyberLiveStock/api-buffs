import mongoose from "mongoose";

const reproducaoSchema  = new mongoose.Schema({
    idCriadouro: { type: mongoose.Schema.Types.ObjectId, ref: "Criadouros" }, 
    tagMae: { type: mongoose.Schema.Types.ObjectId, ref: "Bufalos" },
    tagPai: { type: mongoose.Schema.Types.ObjectId, ref: "Bufalos" },
    dataInseminacao: Date,
    dataParto: Date,
    status: String,
    dataAtua: Date //DATA EM QUE ESSE DOCUMENTO VAI SER ATUALIZADO
})

const Reproducao = mongoose.model('Reproducao', reproducaoSchema)
export default Reproducao