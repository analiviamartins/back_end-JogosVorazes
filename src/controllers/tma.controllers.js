import { vorazes } from "../models/tema.js"
import { vorazesList } from "../models/temaList.js"

const VorazesList = new vorazesList();

function url_valid(imagem) {
    if (imagem.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true
    } else {
        return false
    }
}

export const buscarAllVorazes = (req, res) => {
    let vorazes = VorazesList.getVorazes();

    const { distrito } = req.query
    if(distrito){
        vorazes = VorazesList.getVorazesById(distrito);
        return res.status(200).send({
            tipo: vorazes.length, vorazes
        });
    }else{
        vorazes = VorazesList.getVorazes();
    }

    const voraze = VorazesList.getVorazes();
    if (voraze) {
        return res.status(200).send(
            {
                message: `o número de personagens cadastrados é ${VorazesList.contador()}`,
                voraze
            }
        );
    }
    return res.status(200).json({
        message: "Nenhum personagen cadastrado"
    });
};

export const buscarVorazesId = (req, res) => {
    const { id } = req.params;
    const vorazes = VorazesList.getVorazesById(id);

    if (!vorazes) {
        return res.status(404).send({ message: "personagem não encontrado!" });
    }
    return res.send(vorazes);
};

export const criarVorazes = (req, res) => {
    const { nome, idade, distrito, genero, dano,defesa, descricao, imagem } = req.body
    const voraze = new vorazes(nome, idade, distrito, genero, dano,defesa, descricao, imagem);
    let error = "dados inválidos:"
    let contador = 0;

    if (nome.length < 3 || nome.length > 50) {
        error += " nome deve conter no mínimo 3 e no máximo 50 caracteres"
        contador++
    }

    if (idade === "" || typeof(idade) !== 'number' || idade <= 0 || Number.isInteger(idade) === false) {
        error += " A idade está errada"
        contador++
    }
    if (distrito.length > 30 || distrito == "") {
        error += "O distrito deve ter menos de 30 linhas"
        contador++
    }
    if (genero.length < 8|| genero == "") {
        error += "O gênero deve ter no mínino 8 caracteres"
        contador++
    }
    if (dano < 0 || dano > 100) {
        error += " Personagem deve conter no mínimo 0 e no máximo 100 pontos de dano"
        contador++
    }
    if (defesa < 0 || defesa > 100) {
        error += " Personagem deve conter no mínimo 0 e no máximo 100 pontos de defesa"
        contador++
    }
    if (descricao < 10 || descricao > 500) {
        error += "Descrição deve conter no mínimo 10 e no máximo 500 caracteres"
    }
     
    if (!url_valid(imagem)) {
        error += " A imagem deve ser um link valido"
        contador++
    }

    if (contador == 0) {
        VorazesList.addVorazes(voraze)
        res.status(201).send(voraze)
    } else {
        res.status(400).send({ message: error, status: "Bad Request", contador })
    }


    return res.status(201).send(voraze)
}

export const editarVorazes = (req, res) => {
    const { id } = req.params
    const {  nome, idade, distrito, genero, dano,defesa, descricao, imagem  } = req.body

    const voraze = VorazesList.updateVorazes(id, nome, idade, distrito, genero, dano,defesa, descricao, imagem);

    if (!voraze) {
        return res.status(400).send({
            message: "Personagem não encontrado",
            origem: "controller"
        })
    }
    VorazesList.getVorazesById(id, nome, idade, distrito, genero, dano,defesa, descricao, imagem );
    return res.status(200).send(voraze)
}


export const deletarVorazes= (req, res) => {
    const { id } = req.params
    const voraze = VorazesList.getVorazesById(id);

    if (!voraze) {
        return res.status(400).send({
            message: "Personagem não encontrado",
            origem: "controller"
        })
    }
    VorazesList.deleteVorazes(id);

    return res.status(200).send(voraze)
}