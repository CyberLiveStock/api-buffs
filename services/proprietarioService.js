import Proprietario from "../Models/Proprietarios.js";

class proprietarioService {
    //Método para Consultar todos os Proprietarios da API
    async getAll() {
        try {
            const proprietarios = await Proprietario.find();
            return proprietarios;
        } catch (error) {
            console.log(error);
        }
    }


    //Método para Cadastrar novo Proprietario na API
    async Create(nome, cnpj, email, telefone, dataNasc, endereco) {
        try {
            const newProprietario = new Proprietario({
                nome, cnpj, email, telefone, dataNasc, endereco
            })
            await newProprietario.save()
        } catch (error) {
            console.log(error)
        }
    }

    //Método para Deletar um Proprietario da API
    async Delete(id) {
        try{
            await Proprietario.findByIdAndDelete(id);
            console.log(`proprietario com o ID: ${id} foi deletado.`)
        } catch (error) {
            console.log(error)
        }
    }

    //Método para Atualizar um Proprietario da API
    async Update(id, nome, cnpj, email, telefone, dataNasc, endereco){
        try{
            const UpdateProprietario = await Proprietario.findByIdAndUpdate(
                id,
                {
                    nome, cnpj, email, telefone, dataNasc, endereco
                },
                { new: true }
            );
            console.log(`Dados do Proprietario do ID: ${id} alterados com sucesso!`)
            return UpdateProprietario;
        }catch(error){
            console.log(error);
        }
    }
    
    //Método para Listar um único Registro
    async getOne(id){
        try{
            const proprietario = await Proprietario.findOne({_id: id})
            return proprietario
        } catch (error) {
            console.log(error)
        }
    }
    
}  
export default new proprietarioService();