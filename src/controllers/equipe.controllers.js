import { Integrantes } from "../models/equipe.js";
import membros  from "../data/equipe.js";
import { IntegrantesLista } from "../models/equipeList.js";

const integrantesLista = new IntegrantesLista();
membros.forEach((integrante) => integrantesLista.addIntegrante(new Integrantes(integrante.nome, integrante.idade, integrante.email, integrante.hobby, integrante.img)));

function verificarImg(img) {
    if (img.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

export const getAllEquipe = (req, res) => {
    const integrante = integrantesLista.getAllIntegrantes();

    if (!integrante) {
        return res.status(404).send({ message: "Integrante não encontrados!", status: "Not Fould" });
    }
    return res.status(200).send({ message: "Integrante encontrados com sucesso!", equipe: integrante, status: "OK" });
}

export const getEquipeById = (req, res) => {
    const { id } = req.params;

    const integrante = integrantesLista.getIntegranteById(id);

    if (!integrante) {
        return res.status(404).send({ message: `Integrante com id ${id} não encontrado!`, status: "Not Fould" });
    }
    return res.status(200).send({ message: `Integrante com id ${id} encontrado com sucesso!`, equipe: integrante, status: "OK" });
}

export const createEquipe = (req, res) => {
    const { nome, idade, email, hobby, img } = req.body;
    const integrante = new Integrantes(nome, idade, email, hobby, img);
    let erro = "Dados invalidos:"
    let contador = 0;

    if (nome.length < 3 || nome.length > 50) {
        erro += " Nome deve conter no mínimo 3 e no máximo 50 caracteres!";
        contador++;
    }

    if (!nome || !idade || !email || !hobby || !img) {
        erro += " Complete todos os campos!";
        contador++;
    }

    if (!verificarImg(img)) {
        erro += " A imagem deve ser um link válido!";
        contador++;
    }

    if (idade === "" || typeof (idade) !== 'number' || idade <= 0 || Number.isInteger(idade) === false) {
        erro += " A idade está errada!";
        contador++;
    }

    if (contador == 0) {
     integrantesLista.addIntegrante(integrante);
        res.status(201).send(integrante)
    } else {
        res.status(400).send({ message: erro, status: "Bad Request", contador });
    }
}

export const deleteEquipeById = (req, res) => {
    const { id } = req.params;
    const equipe = integrantesLista.getIntegranteById(id);

    if (!equipe) {
        return res.status(404).send({ message: `Integrante com id ${id} não encontrado!`, status: "Not Fould" });
    }

 integrantesLista.deleteIntegranteById(id);

    return res.status(200).send({ message: `Integrante com id ${id} deletado com sucesso!`, status: "OK" });
}

export const updateEquipeById = (req, res) => {
    const { id } = req.params;
    const { nome, idade, email, hobby, img } = req.body;

    if (!nome || !idade || !email || !hobby || !img) {
        return res.status(400).send({ message: "Dados inválidos!", status: "Bad Request" });
    }

    if (!verificarImg(img)) {
        return res.status(400).send({ message: "Imagem inválida!", status: "Bad Request" });
    }

    const equipe = integrantesLista.updateIntegranteById(id, nome, idade, email, hobby, img);

    if (!equipe) {
        return res.status(404).send({ message: `Integrante com id ${id} não encontrado!`, status: "Not Fould" });
    }

    return res.status(200).send({ message: `Integrante com id ${id} atualizado com sucesso!`, equipe: equipe, status: "OK" });
}