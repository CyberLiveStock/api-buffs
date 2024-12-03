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
    async Create(tagBufalo, idCriadouro, nome, idade, raca, sexo, dataNasc, destinoFinal, zootecnico, sanitario) {
        try {
            const newBufalo = new Bufalo({
                tagBufalo, 
                idCriadouro, 
                nome, 
                idade,  
                raca, 
                sexo, 
                dataNasc,
                destinoFinal,
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
    async Update(
        id,
        tagBufalo,
        idCriadouro,
        nome,
        idade,
        raca,
        sexo,
        dataNasc,
        destinoFinal,
        zootecnico,
        sanitario
    ) {
        try {
            // Busca o búfalo existente
            const bufaloExistente = await Bufalo.findById(id);
    
            if (!bufaloExistente) {
                throw new Error(`Búfalo com ID ${id} não encontrado`);
            }
    
            // Adiciona os dados atuais ao histórico, se existirem
            if (bufaloExistente.zootecnico?.length > 0) {
                bufaloExistente.historicoZootecnico = [
                    ...(bufaloExistente.historicoZootecnico || []),
                    ...bufaloExistente.zootecnico
                ];
            }
    
            if (bufaloExistente.sanitario?.length > 0) {
                bufaloExistente.historicoSanitario = [
                    ...(bufaloExistente.historicoSanitario || []),
                    ...bufaloExistente.sanitario
                ];
            }
    
            // Atualiza os campos (somente os valores fornecidos)
            bufaloExistente.tagBufalo = tagBufalo ?? bufaloExistente.tagBufalo;
            bufaloExistente.idCriadouro = idCriadouro ?? bufaloExistente.idCriadouro;
            bufaloExistente.nome = nome ?? bufaloExistente.nome;
            bufaloExistente.idade = idade ?? bufaloExistente.idade;
            bufaloExistente.raca = raca ?? bufaloExistente.raca;
            bufaloExistente.sexo = sexo ?? bufaloExistente.sexo;
            bufaloExistente.dataNasc = dataNasc ?? bufaloExistente.dataNasc;
            bufaloExistente.destinoFinal = destinoFinal ?? bufaloExistente.destinoFinal;
            bufaloExistente.zootecnico = zootecnico ?? bufaloExistente.zootecnico;
            bufaloExistente.sanitario = sanitario ?? bufaloExistente.sanitario;
    
            // Salva as alterações no banco de dados
            await bufaloExistente.save();
    
            console.log(`Dados do Búfalo com ID ${id} alterados e histórico atualizado com sucesso!`);
            return bufaloExistente;
        } catch (error) {
            console.error(`Erro ao atualizar o Búfalo: ${error.message}`);
            throw error; // Propaga o erro para o controller
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