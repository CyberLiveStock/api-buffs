import Funcionario from "../Models/Funcionarios.js";

class funcionarioService {
    //Método para Consultar todos os Funcionarios da API
    async getAll() {
        try {
            const funcionarios = await Funcionario.find();
            return funcionarios;
        } catch (error) {
            console.log(error);
        }
    }


    //Método para Cadastrar novo Funcionario na API
    async Create(idCriadouro, nome, cpf, email, genero, descCargo, telefone, dataNasc, status, endereco) {
        try {
            const newFuncionario = new Funcionario({
                idCriadouro, nome, cpf, email, genero, descCargo, telefone, dataNasc, status, endereco
            })
            await newFuncionario.save()
        } catch (error) {
            console.log(error)
        }
    }

    //Método para Deletar um Funcionario da API
    async Delete(id) {
        try{
            await Funcionario.findByIdAndDelete(id);
            console.log(`Funcionario com o ID: ${id} foi deletado.`)
        } catch (error) {
            console.log(error)
        }
    }

    //Método para Atualizar um Funcionario da API
    async Update(id, idCriadouro, nome, cpf, email, genero, descCargo, telefone, dataNasc, status, endereco){
        try{
            const UpdateFuncionario = await Funcionario.findByIdAndUpdate(
                id,
                {
                    idCriadouro, nome, cpf, email, genero, descCargo, telefone, dataNasc, status, endereco
                },
                { new: true }
            );
            console.log(`Dados do Funcionario do ID: ${id} alterados com sucesso!`)
            return UpdateFuncionario;
        }catch(error){
            console.log(error);
        }
    }
    
    //Método para Listar um único Registro
    async getOne(id){
        try{
            const funcionario = await Funcionario.findOne({_id: id})
            return funcionario
        } catch (error) {
            console.log(error)
        }
    }
    
}  
export default new funcionarioService();