import { Router } from "express";
import {
    buscarAllVorazes,
    buscarVorazesId,
    criarVorazes,
    editarVorazes,
    deletarVorazes,
} from "../controllers/tma.controllers.js"

const rotasVorazes = Router();

rotasVorazes.get("/", buscarAllVorazes)
rotasVorazes.get("/:id", buscarVorazesId)
rotasVorazes.post("/", criarVorazes)
rotasVorazes.put("/:id", editarVorazes)
rotasVorazes.delete("/:id", deletarVorazes)

export default rotasVorazes;