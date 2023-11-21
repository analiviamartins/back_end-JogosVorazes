import { Equipe } from "../models/equipe/equipe.js";
import { EquipeLista } from "../models/equipe/equipeLista.js";

const equipeLista = new EquipeLista();

function verificarImg(img) {
    if (img.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

export const getAllEquipe = (req, res) => {
    const equipe = equipeLista.getAllEquipe();

    if (!animal) {
        return res.status(404).send({ message: "Integrante não encontrados!", status: "Not Fould" });
    }
    return res.status(200).send({ message: "Integrante encontrados com sucesso!", equipe: equipe, status: "OK" });
}

export const getEquipeById = (req, res) => {
    const { id } = req.params;

    const equipe = equipeLista.getEquipeById(id);

    if (!equipe) {
        return res.status(404).send({ message: `Integrante com id ${id} não encontrado!`, status: "Not Fould" });
    }
    return res.status(200).send({ message: `Integrante com id ${id} encontrado com sucesso!`, equipe: equipe, status: "OK" });
}

export const createEquipe = (req, res) => {
    const { nome, idade, email, hobby, img } = req.body;

    if (!nome || !idade || !email || !hobby || !img) {
        return res.status(400).send({ message: "Dados inválidos!", status: "Bad Request" });
    }

    if (!verificarImg(img)) {
        return res.status(400).send({ message: "Imagem inválida!", status: "Bad Request" });
    }

    const equipe = new Equipe(nome, idade, email, hobby, img);

    equipeLista.addEquipe(equipe);

    return res.status(201).send({ message: "Integrante criado com sucesso!", equipe: equipe, status: "Created" });
}

export const deleteEquipeById = (req, res) => {
    const { id } = req.params;
    const equipe = equipeLista.getEquipeById(id);

    if (!equipe) {
        return res.status(404).send({ message: `Integrante com id ${id} não encontrado!`, status: "Not Fould" });
    }

    equipeLista.deleteEquipeById(id);

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

    const equipe = equipeLista.updateEquipeById(id, nome, idade, email, hobby, img);

    if (!equipe) {
        return res.status(404).send({ message: `Integrante com id ${id} não encontrado!`, status: "Not Fould" });
    }

    return res.status(200).send({ message: `Integrante com id ${id} atualizado com sucesso!`, equipe: equipe, status: "OK" });
}