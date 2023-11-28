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

    // Inicializa a variável vorazes com a lista de todos personagens
    let vorazes = vorazesList.getVorazes();

    // Se 'distrito' for fornecido, busca pelo distrito de cada personagem e retorna o resultado
    const { distrito } = req.query
    if(distrito){
        vorazes = vorazesList.getVorazesById(distrito);
        return res.status(200).send({
            tipo: vorazes.length, vorazes
        });
    }else{
        // Se 'distrito' não for fornecido, busca por todos os personagens
        vorazes = vorazesList.getVorazes();
    }

    // Se 'nome' for fornecido, busca pelo nome de cada personagem e retorna o resultado
    const { nome } = req.query
    if(nome){
        vorazes = vorazesList.getVorazesById(nome);
        return res.status(200).send({
            tipo: vorazes.length, vorazes
        });
    }else{
        // Se 'nome' não for fornecido, busca por todos os personagens
        vorazes = vorazesList.getVorazes();
    }

    // Se 'profissão' for fornecido, busca pela profissão de cada personagem e retorna o resultado
    const { profissao } = req.query
    if(profissao){
        vorazes = vorazesList.getVorazesById(profissao);
        return res.status(200).send({
            tipo: vorazes.length, vorazes
        });
    }else{
        // Se 'profissão' não for fornecido, busca por todos os personagens
        vorazes = vorazesList.getVorazes();
    }

    // Se houver Vorazes, retorna a lista de Vorazes e a quantidade de Vorazes
    const voraze = vorazesList.getVorazes();
    if (voraze) {
        return res.status(200).send(
            {
                message: `o número de personagens cadastrados é ${vorazesList.contador()}`,
                voraze
            }
        );
    }
    // Se não houver Vorazes, retorna uma mensagem indicando que não há personagens cadastrados
    return res.status(200).json({
        message: "Nenhum personagen cadastrado"
    });
};

// Função que busca um Vorazes pelo ID
export const buscarVorazesId = (req, res) => {
    const { id } = req.params;
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

    // Verifica se a idade é um número inteiro positivo
    if (idade === "" || typeof(idade) !== 'number' || idade <= 0 || Number.isInteger(idade) === false) {
        error += " A idade está errada"
        contador++
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
    const { id } = req.params

    // Desestrutura o objeto 'req.body' para obter os detalhes do personagem
    const {  nome, idade, distrito, genero, profissao, dano, defesa, descricao, imagem } = req.body

    // Chama a função 'updateVorazes' da lista 'vorazesList' para atualizar os detalhes do personagem
    const voraze = vorazesList.updateVorazes(id, nome, idade, distrito, genero, profissao, dano, defesa, descricao, imagem);

    // Se a função 'updateVorazes' retornar 'null' ou 'undefined', significa que o personagem não foi encontrado
    if (!voraze) {
        return res.status(400).send({
            message: "Personagem não encontrado",
            origem: "controller"
        })
    }

    // Chama a função 'getVorazesById' para obter os detalhes atualizados do personagem
    vorazesList.getVorazesById(id, nome, idade, distrito, genero, profissao, dano, defesa, descricao, imagem);
    // Retorna uma resposta com status 200 e os detalhes atualizados do personagem
    return res.status(200).send(voraze)
}

// Exportando a função que deleta os personagens
export const deletarVorazes= (req, res) => {
    const { id } = req.params

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