import Demanda from "../Models/Demandas.js";

class demandaService {
    //Método para Consultar todos os Demandas da API
    async getAll() {
        try {
            const demandas = await Demanda.find().populate("idFuncionario", "nome").exec();
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
        try {
            await Demanda.findByIdAndDelete(id);
            console.log(`Demanda com o ID: ${id} foi deletado.`)
        } catch (error) {
            console.log(error)
        }
    }

    //Método para Atualizar um Demanda da API
    async Update(id, dataInicio, dataFim, descricao, idFuncionario, categoria, status) {
        try {
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
        } catch (error) {
            console.log(error);
        }
    }

    //Método para Listar um único Registro
    async getOne(id) {
        try {
            const demanda = await Demanda.findOne({ _id: id })
            return demanda
        } catch (error) {
            console.log(error)
        }
    }

    async calcularRendimento() {
        try {
            const demanda = await Demanda.aggregate([
                { $match: { status: 'Finalizada' } },
                {
                    $addFields: {
                        ano: { $year: "$dataFim" },
                        mes: { $month: "$dataFim" }
                    }
                },
                {
                    $group: {
                        _id: {
                            funcionario: "$idFuncionario",
                            ano: "$ano",
                            mes: "$mes"
                        },
                        totalDemandas: { $sum: 1 }
                    }
                },
                {
                    $lookup: {
                        from: 'funcionarios',
                        localField: '_id.funcionario', 
                        foreignField: '_id', 
                        as: 'funcionarioDetalhes'
                    }
                },
                {
                    $unwind: "$funcionarioDetalhes"
                },
                {
                    $sort: {
                        "_id.funcionario": 1,
                        "_id.ano": 1,
                        "_id.mes": 1
                    }
                }
            ]);
            return demanda.map(item => ({
                funcionario: item.funcionarioDetalhes.nome,
                ano: item._id.ano,
                mes: item._id.mes,
                totalDemandas: item.totalDemandas
            }));
        } catch (error) {
            console.error('Erro ao calcular rendimento:', error);
            throw new Error('Não foi possível calcular o rendimento.');
        }
    }

    async calcularCategoria() {
        try {
            const demanda = await Demanda.aggregate([
                { $match: { status: { $in: ['Finalizada', 'Em andamento', 'Em produção'] } } },
                {
                    $addFields: {
                        ano: { $year: "$dataFim" },
                        mes: { $month: "$dataFim" }
                    }
                },
                {
                    $group: {
                        _id: {
                            categoria: "$categoria",
                            ano: "$ano",
                            mes: "$mes"
                        },
                        totalDemandas: { $sum: 1 }
                    }
                },
                               {
                    $sort: {
                        "_id.categoria": 1,
                        "_id.ano": 1,
                        "_id.mes": 1
                    }
                }
            ]);
            return demanda.map(item => ({
                categoria: item._id.categoria,
                ano: item._id.ano,
                mes: item._id.mes,
                totalDemandas: item.totalDemandas
            }));
        } catch (error) {
            console.error('Erro ao calcular rendimentos categorias:', error);
            throw new Error('Não foi possível calcular o rendimento.');
        }
    }
}

export default new demandaService();