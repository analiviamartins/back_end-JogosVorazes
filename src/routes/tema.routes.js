//importa o módulo Router e as funções de controle para o tema;
import {
    buscarAllVorazes,
    buscarVorazesId,
    criarVorazes,
    editarVorazes,
    deletarVorazes,
} from "../controllers/tma.controllers.js"

//cria-se uma instância do Router
const rotasVorazes = Router();

//define-se as rotas para o tema. Cada rota é associada a uma função de controle específica.
rotasVorazes.get("/", buscarAllVorazes)
rotasVorazes.get("/:id", buscarVorazesId)
rotasVorazes.post("/", criarVorazes)
rotasVorazes.put("/:id", editarVorazes)
rotasVorazes.delete("/:id", deletarVorazes)

export default rotasVorazes;