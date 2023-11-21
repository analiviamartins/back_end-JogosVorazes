import { Router } from "express";
import rotasVorazes from "./tema.routes.js"


const rotas= Router();

rotas.use("/vorazes", rotasVorazes);


rotas.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor ok" });
  });

export default rotas;