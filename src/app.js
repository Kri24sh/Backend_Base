import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';



const app = express();

app.use(cors({
origin:"*",
credentials:true
}));
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({limit:"16kb"}));
app.use(express.static("Public"));
app.use(cookieParser());

app.get("/" , (req,res)=>{
res.send('<h1>hello world</h1>');
})





export default app;