import Bufalo from "./models/Bufalos.js";

class bufaloService {
    async getAll(){
        try{
            const bufalos = await Bufalo.find();
            return bufalos;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new bufaloService();