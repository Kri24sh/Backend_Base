import mongoose from "mongoose";
import { Db_name } from '../constant.js';


const Connect_DB =  async () => {
    try {
        const connection_instance  = await mongoose.connect(`mongodb+srv://krishvaswani2220:LEbeAN12@cluster0.2yzlqj1.mongodb.net/${Db_name}`);
        console.log("DB is connected!!");
    } catch (error) {
        console.log("Error in connection not working :", error);
        throw error;
    }

}

export default Connect_DB;