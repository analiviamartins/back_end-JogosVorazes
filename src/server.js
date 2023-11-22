// Imports
import express from "express";
import { config } from "dotenv";
import rotas from "./routes/index.routes.js";

config();

//Porta do servidor
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(rotas)

//execução do servidor
app.listen(port, () =>
  console.log(`⚡ Server started on http://localhost:${port}`)
);