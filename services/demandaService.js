import Demanda from "../Models/Demandas.js";

class demandaService {
    //Método para Consultar todos os Demandas da API
    async getAll() {
        try {
            const demandas = await Demanda.find();
            return demandas;
        } catch (error) {
            console.log(error);
        }
    }


    //Método para Cadastrar nova Demanda na API
    async Create(dataInicio, dataFim, descricao, idFuncionario, categoria, status) {
        try {
            const newDemanda = new Demanda({
                dataInicio, 
                dataFim, 
                descricao, 
                idFuncionario, 
                categoria, 
                status
            })
            await newDemanda.save()
        } catch (error) {
            console.log(error)
        }
    }

    //Método para Deletar um Demanda da API
    async Delete(id) {
        try{
            await Demanda.findByIdAndDelete(id);
            console.log(`Demanda com o ID: ${id} foi deletado.`)
        } catch (error) {
            console.log(error)
        }
    }

    //Método para Atualizar um Demanda da API
    async Update(id, dataInicio, dataFim, descricao, idFuncionario, categoria, status){
        try{
            const UpdateDemanda = await Demanda.findByIdAndUpdate(
                id,
                {
                    dataInicio, 
                    dataFim, 
                    descricao, 
                    idFuncionario, 
                    categoria, 
                    status
                },
                { new: true }
            );
            console.log(`Dados do Demanda do ID: ${id} alterados com sucesso!`)
            return UpdateDemanda;
        }catch(error){
            console.log(error);
        }
    }
    
    //Método para Listar um único Registro
    async getOne(id){
        try{
            const demanda = await Demanda.findOne({_id: id})
            return demanda
        } catch (error) {
            console.log(error)
        }
    }
    
}  
export default new demandaService();