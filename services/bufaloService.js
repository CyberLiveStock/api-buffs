import Bufalo from "../Models/Bufalos.js";

class bufaloService {
    //Método para Consultar todos os Bufalos da API
    async getAll() {
        try {
            const bufalos = await Bufalo.find();
            return bufalos;
        } catch (error) {
            console.log(error);
        }
    }


    //Método para Cadastrar novo Bufalo na API
    async Create(tagBufalo, idCriadouro, nome, idade, peso, raca, sexo, dataNasc, zootecnico, sanitario) {
        try {
            const newBufalo = new Bufalo({
                tagBufalo, 
                idCriadouro, 
                nome, 
                idade, 
                peso, 
                raca, 
                sexo, 
                dataNasc, 
                zootecnico, 
                sanitario
            })
            await newBufalo.save()
        } catch (error) {
            console.log(error)
        }
    }

    //Método para Deletar um Bufalo da API
    async Delete(id) {
        try{
            await Bufalo.findByIdAndDelete(id);
            console.log(`Bufalo com o ID: ${id} foi deletado.`)
        } catch (error) {
            console.log(error)
        }
    }

    //Método para Atualizar um Bufalo da API
    async Update(id, tagBufalo, idCriadouro, nome, idade, peso, raca, sexo, dataNasc, zootecnico, sanitario){
        try{
            const UpdateBufalo = await Bufalo.findByIdAndUpdate(
                id,
                {
                    tagBufalo, 
                    idCriadouro, 
                    nome, 
                    idade, 
                    peso, 
                    raca, 
                    sexo, 
                    dataNasc, 
                    zootecnico, 
                    sanitario
                },
                { new: true }
            );
            console.log(`Dados do Bufalo do ID: ${id} alterados com sucesso!`)
            return UpdateBufalo;
        }catch(error){
            console.log(error);
        }
    }
    
    //Método para Listar um único Registro
    async getOne(id){
        try{
            const bufalo = await Bufalo.findOne({_id: id})
            return bufalo
        } catch (error) {
            console.log(error)
        }
    }
    
}  
export default new bufaloService();