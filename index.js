import express from "express"; //importação framework
const app = express();
import mongoose from "./config/db-connection.js"; //importação Mongoose
import bufaloRoutes from "./routes/bufaloRoutes.js"; //importação dos Endpoints "Bufalos"
import criadouroRoutes from "./routes/criadouroRoutes.js"; //importação dos Endpoints "Criadouros"
import funcionarioRoutes from "./routes/funcionarioRoutes.js"; //importação dos Endpoints "Funcionarios"
import proprietarioRoutes from "./routes/proprietarioRoutes.js"; //importação dos Endpoints "Proprietaios"
import reproducaoRoutes from "./routes/reproducaoRoutes.js";


//Configuração da Framework(express)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", bufaloRoutes)
app.use("/", criadouroRoutes)
app.use("/", funcionarioRoutes)
app.use("/", proprietarioRoutes)
app.use("/", reproducaoRoutes)


// Definindo porta que a API vai rodar, no caso 4000
const port = 4000;
app.listen(port, (error) => {
    if(error) {
        console.log(error);
    }
    console.log(`API rodando em http://localhost:${port}.`);
})