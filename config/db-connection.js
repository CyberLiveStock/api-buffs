import mongoose from "mongoose"; //Importação Mongoose
import dotenv from 'dotenv';    //Importação dotenv
dotenv.config();

//Conectando aplicação com MongoDB Atlas (nuvem)
mongoose.connect(process.env.MONGODB_URI); //Puxando o arquivo .env que tem a URI com <user> e <senha> do banco
const connection = mongoose.connection;

//Falha ao Conectar com o banco
connection.on("error", () => {
    console.log("Erro ao concectar com o mongoDB Atlas")
});

//Sucesso em Conectar com o banco
connection.on("open", () => {
    console.log("Conectando ao mongoDB Atlas com sucesso!")
});

export default mongoose;