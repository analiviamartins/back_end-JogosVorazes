export class IntegrantesLista {
    constructor() {
        // Construtor da classe, inicializa o array integrantes como vazio
        this.integrantes = [];
    }

    // Retorna o número de integrantes na lista
    contador() {
        return this.integrantes.length;
    }

    // Adiciona um novo integrante à lista
    addIntegrante(integrante) {
        this.integrantes.push(integrante);
    }

    // Retorna um integrante específico com base no seu id
    getIntegranteById(id) {
        return this.integrantes.find((integrante) => integrante.id === id);
    }

    // Retorna a lista completa de integrantes
    getAllIntegrantes() {
        return this.integrantes;
    }

    // Remove um integrante da lista com base no seu id
    deleteIntegranteById(id) {
        this.integrantes = this.integrantes.filter((integrante) => integrante.id !== id);
    }

    // Atualiza as informações de um integrante existente
    updateIntegranteById(id, nome, idade, email, hobby, img) {
        const integrante = this.getIntegranteById(id);

        // Se o integrante não existe, retorna null
        if (!integrante) {
            return null;
        }

         // Atualiza as informações do integrante
        integrante.nome = nome;
        integrante.idade = idade;
        integrante.email = email;
        integrante.hobby = hobby;
        integrante.img = img;

        return integrante;
    }

    createIntegrante(integrantes) {
        this.integrantes.push(integrantes);
    }
}