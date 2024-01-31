// require('dotenv').config({path:"./env"});
import dotenv from "dotenv";
import Connect_DB from "./db/DB_Index.js";
import app from "./app.js";

dotenv.config({
    path:"./env",
});


Connect_DB()
.then(()=>{
    app.on("err" , (errorr)=>{
        console.log("App getting error while listning :",errorr);
        throw errorr;
    })
    app.listen(process.env.PORT||3000 , ()=>{
        console.log(`Yout server is running at port:${process.env.PORT||3000}`);
    })
})
.catch((err)=>{
    console.log("DB connection faild try to reconnect!!!!" , err);
})


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