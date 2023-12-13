//importando as classes
import { vorazes } from "../models/tema.js"
import personagens  from "../data/personagens.js";
import { VorazesList } from "../models/temaList.js"

//instância da classe
const vorazesList = new VorazesList();
//Laço de repetição para manter os membros criados
personagens.forEach((peronagem) => {
    vorazesList.addVorazes(new vorazes(peronagem.nome, peronagem.idade, peronagem.distrito, peronagem.genero, peronagem.profissao, peronagem.dano, peronagem.defesa, peronagem.descricao, peronagem.imagem))
});

//validação de imagem
function url_valid(imagem) {
    if (imagem.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true
    } else {
        return false
    }
}

//Exporta uma função que pega todos os personagens
export const buscarAllVorazes = (req, res) => {
    const { nome, distrito, profissao } = req.query;

    const dados = {
        nome,
        distrito,
        profissao
    }

    const array = vorazesList.getVorazes(dados);


    return res.status(200).send({
        total: array.length,
        vorazes: array
    })

};

// Função que busca um Vorazes pelo ID
export const buscarVorazesId = (req, res) => {
    const { id } = req.params;
    console.log('get:', id);
   // Busca o Vorazes com o ID especificado
    const vorazes = vorazesList.getVorazesById(id);

    // Verifica se o Vorazes foi encontrado
    if (!vorazes) {
        // Se o Vorazes não foi encontrado, retorna um erro 404 com uma mensagem de "personagem não encontrado"
        return res.status(404).send({ message: "personagem não encontrado!" });
    }
    // Se o Vorazes foi encontrado, retorna as informações do Vorazes
    return res.send(vorazes);
};

// Importa a função que cria os personagens
export const criarVorazes = (req, res) => {

    // Extrai os dados da classe
    const {nome, idade, distrito, genero, profissao, dano, defesa, descricao, imagem} = req.body

    // Cria uma nova instância de Voraze com os dados extraídos
    const voraze = new vorazes(nome, idade, distrito, genero, profissao, dano, defesa, descricao, imagem);

    // Inicializa uma variável de erro e um contador
    let error = "dados inválidos:"
    let contador = 0;

    // Verifica se o nome tem entre 3 e 50 caracteres
    if (nome.length < 3 || nome.length > 50) {
        error += " nome deve conter no mínimo 3 e no máximo 50 caracteres"
        contador++
    }

    if (idade < 0) {
        error += "A idade não pode ser negativa";
      } else if (!Number.isInteger(idade)) {
        error += "A idade deve ser um número inteiro";
      } 

    // Verifica se o distrito tem menos de 15 caracteres
    if (distrito.length > 15 || distrito == "") {
        error += "O distrito deve ter menos de 15 caracteres"
        contador++
    }

    // Verifica se o gênero tem pelo menos 8 caracteres
    if (genero.length < 8|| genero == "") {
        error += "O gênero deve ter no mínino 8 caracteres"
        contador++
    }

    // Verifica se o dano está entre 0 e 100
    if (dano < 0 || dano > 100) {
        error += " Personagem deve conter no mínimo 0 e no máximo 100 pontos de dano"
        contador++
    }

    // Verifica se a defesa está entre 0 e 100
    if (defesa < 0 || defesa > 100) {
        error += " Personagem deve conter no mínimo 0 e no máximo 100 pontos de defesa"
        contador++
    }

    // Verifica se a descrição tem entre 10 e 300 caracteres
    if (descricao < 10 || descricao > 300) {
        error += "Descrição deve conter no mínimo 10 e no máximo 300 caracteres"
    }
    
    // Verifica se a imagem é um link válido
    if (!url_valid(imagem)) {
        error += " A imagem deve ser um link valido"
        contador++
    }

    // Se não houver erros, adiciona a Voraze à lista e envia uma resposta de sucesso
    if (contador == 0) {
        vorazesList.addVorazes(voraze)
        res.status(201).send(voraze)
    } else {
        // Se houver erros, envia uma resposta de erro com a mensagem de erro
        res.status(400).send({ message: error, status: "Bad Request", contador })
    }

    // Envia uma resposta de sucesso com a Voraze criada
    return res.status(201).send(voraze)
}

// Exporta a função que edita os personagens
export const editarVorazes = (req, res) => {

    // Desestrutura o objeto 'req.params' para obter o 'id' do personagem
    const { id } = req.params;

    // Desestrutura o objeto 'req.body' para obter os detalhes do personagem
    const { nome, idade, distrito, genero, profissao, dano, defesa, descricao, imagem} = req.body;

    // Verifica se todos os campos necessários estão presentes
    if (!nome || !idade || !distrito || !genero || !profissao || !dano || !defesa ||!descricao ||!imagem) {
        return res.status(400).send({ message: "Dados inválidos!", status: "Bad Request" });
    }

    // Tenta atualizar o membro da equipe com os novos detalhes
    const voraze = vorazesList.getVorazesById(id, nome, idade, distrito, genero, profissao, dano, defesa, descricao, imagem);

    // Se o membro da equipe não puder ser encontrado, retorna um erro 404
    if (!voraze) {
        return res.status(404).send({ message: `Integrante com id ${id} não encontrado!`, status: "Not Fould" });
    }

    vorazesList.updateVorazes(id, nome, idade, distrito, genero, profissao, dano, defesa, descricao, imagem);

    // Se tudo correr bem, retorna uma mensagem de sucesso e os detalhes atualizados do membro da equipe
    return res.status(200).send({ message: `Integrante com id ${id} atualizado com sucesso!`, voraze: voraze, status: "OK" });
}

// Exportando a função que deleta os personagens
export const deletarVorazes= (req, res) => {
    const { id } = req.params;
    console.log('delete:', id);

    // Buscando o item na lista vorazesList usando o ID
    const voraze = vorazesList.getVorazesById(id);

    // Verificando se o item existe
    if (!voraze) {
        // Se o item não existir, retornar uma resposta com status 400 e uma mensagem de erro
        return res.status(400).send({
             message: `Integrante com id ${id} não encontrado!`, status: "Not Fould"
        })
    }
     // Se o item existir, deletá-lo da lista
    vorazesList.deleteVorazes(id);

    // Retornar uma resposta com status 200 e o item deletado
    return res.status(200).send(voraze)
}