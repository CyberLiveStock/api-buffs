import Reproducao from "../Models/Reproducoes.js"
import Bufalos from "../Models/Bufalos.js"


class reproducaoService {
    
    //Método para Consultar todos os Reproducoes da API
 async getAll() {
        try {
            const reproducoes = await Reproducao.find();
            const resultados = await Promise.all(reproducoes.map(async (reproducao) => {
                const mae = await Bufalos.findOne({ tagBufalo: reproducao.tagMae });// Compara as 'tag' e define como mãe
                const pai = await Bufalos.findOne({ tagBufalo: reproducao.tagPai }); // Compara as 'tag' e define como pai

                return {
                    ...reproducao.toObject(), // Converte o documento Mongoose para um objeto simples
                    mae: mae ? mae.toObject() : null, // Dados do búfalo mãe
                    pai: pai ? pai.toObject() : null  // Dados do búfalo pai
                };
            }));
            return resultados;
        } catch (error) {
            console.log(error);
        }
    }


    //Método para Cadastrar nova Reproducao na API
    async Create(idCriadouro, tagMae, tagPai, dataInseminacao, dataParto, status, dataAtua) {
        try {
            const newReproducao = new Reproducao({
                idCriadouro, tagMae, tagPai, dataInseminacao, dataParto, status, dataAtua
            })
            await newReproducao.save()
        } catch (error) {
            console.log(error)
        }
    }

    //Método para Deletar uma Reproducao da API
    async Delete(id) {
        try{
            await Reproducao.findByIdAndDelete(id);
            console.log(`reproducao com o ID: ${id} foi deletado.`)
        } catch (error) {
            console.log(error)
        }
    }

    //Método para Atualizar uma Reproducao da API
    async Update(id, idCriadouro, tagMae, tagPai, dataInseminacao, dataParto, status, dataAtua){
        try{
            const UpdateReproducao = await Reproducao.findByIdAndUpdate(
                id,
                {
                    idCriadouro, tagMae, tagPai, dataInseminacao, dataParto, status, dataAtua
                },
                { new: true }
            );
            console.log(`Dados do Reproducao do ID: ${id} alterados com sucesso!`)
            return UpdateReproducao;
        }catch(error){
            console.log(error);
        }
    }
    
    //Método para Listar um único Registro
    async getOne(id){
        try{
            const reproducao = await Reproducao.findOne({_id: id})
            return reproducao
        } catch (error) {
            console.log(error)
        }
    }
    
}  
export default new reproducaoService();