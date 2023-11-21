export class IntegrantesLista {
    constructor() {
        this.integrantes = [];
    }

    contador() {
        return this.integrantes.length;
    }

    addIntegrante(integrante) {
        this.integrantes.push(integrante);
    }

    getIntegranteById(id) {
        return this.integrantes.find((integrante) => integrante.id === id);
    }

    getAllIntegrantes() {
        return this.integrantes;
    }

    deleteIntegranteById(id) {
        this.integrantes = this.integrantes.filter((integrante) => integrante.id !== id);
    }

    updateIntegranteById(id, nome, idade, email, hobby, img) {
        const integrante = this.getIntegranteById(id);

        if (!integrante) {
            return null;
        }
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