import express from "express"; //importação framework
const app = express();
import bufaloRoutes from "./routes/bufaloRoutes.js";
import mongoose from "./config/db-connection.js"; //importação Mongoose


//Configuração da Framework(express)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", bufaloRoutes)


// Definindo porta que a API vai rodar, no caso 4000
const port = 4000;
app.listen(port, (error) => {
    if(error) {
        console.log(error);
    }
    console.log(`API rodando em http://localhost:${port}.`);
})