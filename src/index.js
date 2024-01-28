// require('dotenv').config({path:"./env"});
import dotenv from "dotenv";
import Connect_DB from "./db/DB_Index.js";

dotenv.config({
    path:"./env",
});


Connect_DB();


// /*
// const app = express();

// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}` / `${Db_name}`);

//         app.on("error" , (error)=>{
//             console.log("errr" , error);
//             throw error;
//         })

//         app.listen(process.env.PORT , ()=>{
//             console.log("your server is listning on port :" process.env.PORT);
//         })
//     } catch (error) {
//         consol.log("Error in connection :", error);
//         throw error
//     }

// })()
// */