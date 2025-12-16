import express from "express";
import cors from "cors";
import "dotenv/config";
import {connectDB} from "./src/config/database.js";
import "./src/models/index.js";
import  router  from "./src/routes/index.js";
import  cookieParser  from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT;
const app = express();

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(cors(
  {
    origin: "http://localhost:3000",
  }
));


app.use(cookieParser());

app.use(express.json());

app.use("/api",router);

app.listen(port, ()=>{
  connectDB();
  console.log(`servidor escuchando en el puerto ${port}`);

});
