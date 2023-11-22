//importa o módulo Router do Express e dois módulos de rotas: rotasVorazes e rotasIntegrantes 
import { Router } from "express";
import rotasVorazes from "./tema.routes.js"
import rotasIntegrantes from "./equipe.routes.js"

//Em seguida, cria uma nova instância do Router 
const rotas= Router();

//módulos de rotas importados para definir subcaminhos dentro da instância do Router 
rotas.use("/vorazes", rotasVorazes);
rotas.use("/equipe", rotasIntegrantes)

//define uma rota GET na raiz ("/") que retorna uma mensagem de sucesso 
rotas.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor ok" });
  });

export default rotas;