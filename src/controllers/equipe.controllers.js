//importando as classes e o DATA
import { Integrantes } from "../models/equipe.js";
import membros  from "../data/equipe.js";
import { IntegrantesLista } from "../models/equipeList.js";

//instância da classe
const integrantesLista = new IntegrantesLista();

//Laço de repetição para manter os membros criados
membros.forEach((integrante) => integrantesLista.addIntegrante(new Integrantes(integrante.nome, integrante.idade, integrante.email, integrante.hobby, integrante.img)));

//validação de imagem
function verificarImg(img) {
    if (img.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

export const getAllEquipe = (req, res) => {

    // Chama a função getAllIntegrantes da lista de integrantes e armazena o resultado na variável integrante
    const integrante = integrantesLista.getAllIntegrantes();

    // Se não houver integrante, retorna uma mensagem de erro
    if (!integrante) {
        return res.status(404).send({ message: "Integrante não encontrados!", status: "Not Fould" });
    }

    // Se houver integrante, retorna uma mensagem de sucesso
    return res.status(200).send({ message: "Integrante encontrados com sucesso!", equipe: integrante, status: "OK" });
}

export const getEquipeById = (req, res) => {
    const { id } = req.params;

    // Busca o membro da equipe com o id fornecido na lista de membros da equipe
    const integrante = integrantesLista.getIntegranteById(id);

    // Verifica se o membro da equipe foi encontrado
    if (!integrante) {

        // Se o membro da equipe não foi encontrado, retorna uma mensagem de erro
        return res.status(404).send({ message: `Integrante com id ${id} não encontrado!`, status: "Not Fould" });
    }
    // Se o membro da equipe foi encontrado, retorna uma resposta com status 200 e os detalhes do membro da equipe
    return res.status(200).send({ message: `Integrante com id ${id} encontrado com sucesso!`, equipe: integrante, status: "OK" });
}

export const createEquipe = (req, res) => {

    // Extrai os dados da classe
    const { nome, idade, email, hobby, img } = req.body;

    // Cria uma nova instância de integrante com os dados extraídos
    const integrante = new Integrantes(nome, idade, email, hobby, img);

    // Inicializa uma variável de erro e um contador
    let erro = "Dados invalidos:"
    let contador = 0;

    // Verifica se o nome tem entre 3 e 50 caracteres
    if (nome.length < 3 || nome.length > 50) {
        erro += " Nome deve conter no mínimo 3 e no máximo 50 caracteres!";
        contador++;
    }

    // Verifica se todos os campos foram preenchidos
    if (!nome || !idade || !email || !hobby || !img) {
        erro += " Complete todos os campos!";
        contador++;
    }

    // Verifica se a imagem é um link válido
    if (!verificarImg(img)) {
        erro += " A imagem deve ser um link válido!";
        contador++;
    }

    // Verifica se a idade é um número inteiro positivo
    if (idade === "" || typeof (idade) !== 'number' || idade <= 0 || Number.isInteger(idade) === false) {
        erro += " A idade está errada!";
        contador++;
    }

     // Se não houve erros, adiciona o novo membro à lista e retorna criado
    if (contador == 0) {
     integrantesLista.addIntegrante(integrante);
        res.status(201).send(integrante)
    } else {
        // Se houve erros, retorna um status 400 (bad request) com a mensagem de erro
        res.status(400).send({ message: erro, status: "Bad Request", contador });
    }
}

export const deleteEquipeById = (req, res) => {
    const { id } = req.params;

     // Buscando o item na lista integrantesLista usando o ID
    const equipe = integrantesLista.getIntegranteById(id);

    // Verificando se o item existe
    if (!equipe) {
         // Se o item não existir, retornar uma resposta com status 400 e uma mensagem de erro
        return res.status(404).send({ message: `Integrante com id ${id} não encontrado!`, status: "Not Fould" });
    }

    // Se o item existir, deletá-lo da lista
    integrantesLista.deleteIntegranteById(id);

    // Retornar uma resposta com status 200 e o item deletado
    return res.status(200).send({ message: `Integrante com id ${id} deletado com sucesso!`, status: "OK" });
}

export const updateEquipeById = (req, res) => {

    // Desestrutura o objeto 'req.params' para obter o 'id' do personagem
    const { id } = req.params;

    // Desestrutura o objeto 'req.body' para obter os detalhes do personagem
    const { nome, idade, email, hobby, img } = req.body;

    // Verifica se todos os campos necessários estão presentes
    if (!nome || !idade || !email || !hobby || !img) {
        return res.status(400).send({ message: "Dados inválidos!", status: "Bad Request" });
    }

    // Verifica se a imagem fornecida é válida
    if (!verificarImg(img)) {
        return res.status(400).send({ message: "Imagem inválida!", status: "Bad Request" });
    }

    // Tenta atualizar o membro da equipe com os novos detalhes
    const equipe = integrantesLista.updateIntegranteById(id, nome, idade, email, hobby, img);

    // Se o membro da equipe não puder ser encontrado, retorna um erro 404
    if (!equipe) {
        return res.status(404).send({ message: `Integrante com id ${id} não encontrado!`, status: "Not Fould" });
    }

    // Se tudo correr bem, retorna uma mensagem de sucesso e os detalhes atualizados do membro da equipe
    return res.status(200).send({ message: `Integrante com id ${id} atualizado com sucesso!`, equipe: equipe, status: "OK" });
}