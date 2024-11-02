import Criadouro from "../Models/Criadouros.js";

class criadouroService {
    //Método para Consultar todos os Criadouros da API
    async getAll() {
        try {
            const criadouros = await Criadouro.find();
            return criadouros;
        } catch (error) {
            console.log(error);
        }
    }


    //Método para Cadastrar novo Criadouro na API
    async Create(idProprietario, nome, rua, bairro, cidade, estado, numero) {
        try {
            const newCriadouro = new Criadouro({
                idProprietario, 
                nome, 
                rua, 
                bairro, 
                cidade, 
                estado, 
                numero
            })
            await newCriadouro.save()
        } catch (error) {
            console.log(error)
        }
    }

    //Método para Deletar um Criadouro da API
    async Delete(id) {
        try{
            await Criadouro.findByIdAndDelete(id);
            console.log(`Criadouro com o ID: ${id} foi deletado.`)
        } catch (error) {
            console.log(error)
        }
    }

    //Método para Atualizar um Criadouro da API
    async Update(id, idProprietario, nome, rua, bairro, cidade, estado, numero){
        try{
            const UpdateCriadouro = await Criadouro.findByIdAndUpdate(
                id,
                {
                    idProprietario, nome, rua, bairro, cidade, estado, numero
                },
                { new: true }
            );
            console.log(`Dados do Criadouro do ID: ${id} alterados com sucesso!`)
            return UpdateCriadouro;
        }catch(error){
            console.log(error);
        }
    }
    
    //Método para Listar um único Registro
    async getOne(id){
        try{
            const criadouro = await Criadouro.findOne({_id: id})
            return criadouro
        } catch (error) {
            console.log(error)
        }
    }
    
}  
export default new criadouroService();