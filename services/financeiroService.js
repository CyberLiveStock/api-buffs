import Financeiro from "../Models/Financeiro.js";

class financeiroService {
    //Método para Consultar todos os Financeiros da API
    async getAll() {
        try {
            const financeiros = await Financeiro.find();
            return financeiros;
        } catch (error) {
            console.log(error);
        }
    }


    //Método para Cadastrar novo Financeiro na API
    async Create(data, categoria, descricao, beneficiario, valor, tipo, status, idFuncionario) {
        try {
            const newFinanceiro = new Financeiro({
                data, categoria, descricao, beneficiario, valor, tipo, status, idFuncionario
            })
            await newFinanceiro.save()
        } catch (error) {
            console.log(error)
        }
    }

    //Método para Deletar um Financeiro da API
    async Delete(id) {
        try {
            await Financeiro.findByIdAndDelete(id);
            console.log(`Financeiro com o ID: ${id} foi deletado.`)
        } catch (error) {
            console.log(error)
        }
    }

    //Método para Atualizar um Financeiro da API
    async Update(id, data, categoria, descricao, beneficiario, valor, tipo, status, idFuncionario) {
        try {
            const UpdateFinanceiro = await Financeiro.findByIdAndUpdate(
                id,
                {
                    data,
                    categoria,
                    descricao,
                    beneficiario,
                    valor,
                    tipo,
                    status,
                    idFuncionario
                },
                { new: true }
            );
            console.log(`Dados do Financeiro do ID: ${id} alterados com sucesso!`)
            return UpdateFinanceiro;
        } catch (error) {
            console.log(error);
        }
    }

    //Método para Listar um único Registro
    async getOne(id) {
        try {
            const financeiro = await Financeiro.findOne({ _id: id })
            return financeiro
        } catch (error) {
            console.log(error)
        }
    }

    async calcularCatFinanceiro() {
        try {
            const financeiro = await Financeiro.aggregate([
                { $match:  {
                    categoria: { $in: ['Sanitario', 'Funcionário', 'Zootecnico', 'Reprodução'] },
                    status: { $in: ['Pago'] }
                  } },
                {
                    $addFields: {
                        ano: { $year: "$data" },
                        mes: { $month: "$data" }
                    }
                },
                {
                    $group: {
                        _id: {
                            categoria: "$categoria",
                            ano: "$ano",
                            mes: "$mes",
                            status: "$status"  // Agrupando por status também
                        },
                        totalFinanceiros: { $sum: "$valor" }  // Somando o valor dos registros
                    }
                },
                {
                    $sort: {
                        "_id.categoria": 1,
                        "_id.ano": 1,
                        "_id.mes": 1,
                        "_id.status": 1  // Ordenando por status
                    }
                }
            ]);
    
            return financeiro.map(item => ({
                categoria: item._id.categoria,
                ano: item._id.ano,
                mes: item._id.mes,
                status: item._id.status,  // Incluindo o status no retorno
                totalFinanceiros: item.totalFinanceiros
            }));
        } catch (error) {
            console.error('Erro ao calcular rendimentos categorias:', error);
            throw new Error('Não foi possível calcular o rendimento.');
        }
    }
    

}
export default new financeiroService();