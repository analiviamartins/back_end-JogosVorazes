import { Router } from "express";
import { 
    createEquipe,
    deleteEquipeById,
    getAllEquipe,
    getEquipeById,
    updateEquipeById } from "../controllers/equipe.controllers.js";

const rotasIntegrantes = Router();

rotasIntegrantes.get("/", getAllEquipe)

rotasIntegrantes.get("/:id", getEquipeById)

rotasIntegrantes.post("/", createEquipe)

rotasIntegrantes.put("/:id", updateEquipeById)

rotasIntegrantes.delete("/:id", deleteEquipeById)

export default rotasIntegrantes;