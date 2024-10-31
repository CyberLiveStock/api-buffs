import bufaloService from "../services/bufaloService.js";

const getAllBufalos = async (req, res) => {
    try{
        const bufalos = await bufaloService.getAll();
        res.status(200).json({ bufalos: bufalos }); //
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor. "});
    }
};

export default { getAllBufalos };