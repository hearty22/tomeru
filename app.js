import express from "express";
import cors from "cors";
import "dotenv/config";
import {connectDB} from "./src/config/database.js";
import "./src/models/index.js";
const port = process.env.PORT;
const app = express();
app.use(cors(
  {
    origin: "*",
  }
));
app.use(express.json());

app.listen(port, ()=>{
  connectDB();
  console.log(`servidor escuchando en el puerto ${port}`);

});
