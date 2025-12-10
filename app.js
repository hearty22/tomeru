import express from "express";
import cors from "cors";
import "dotenv/config";
import {connectDB} from "./src/config/database.js";
import "./src/models/index.js";
import  router  from "./src/routes/index.js";
import  cookieParser  from "cookie-parser";
const port = process.env.PORT;
const app = express();

app.use(cors(
  {
    origin: "*",
  }
));


app.use(cookieParser());

app.use(express.json());

app.use("/api",router);

app.listen(port, ()=>{
  connectDB();
  console.log(`servidor escuchando en el puerto ${port}`);

});
