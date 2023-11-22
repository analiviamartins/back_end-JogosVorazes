//importa o módulo Router e as funções de controle para a equipe
import { Router } from "express";
import { 
    createEquipe,
    deleteEquipeById,
    getAllEquipe,
    getEquipeById,
    updateEquipeById } from "../controllers/equipe.controllers.js";


//cria-se uma instância do Router
const rotasIntegrantes = Router();


//define-se as rotas para a equipe. Cada rota é associada a uma função de controle específica.
rotasIntegrantes.get("/", getAllEquipe)

rotasIntegrantes.get("/:id", getEquipeById)

rotasIntegrantes.post("/", createEquipe)

rotasIntegrantes.put("/:id", updateEquipeById)

rotasIntegrantes.delete("/:id", deleteEquipeById)

export default rotasIntegrantes;