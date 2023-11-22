// Importando a função uuidv4 do pacote 'uuid'
import { v4 as uuidv4 } from 'uuid';

// Definindo a classe 'Integrantes'
export class Integrantes {
    constructor(nome, idade, email, hobby, img) {
        // Atribuindo um ID único para cada instância da classe
        this.id = uuidv4();
        // Atribuindo os parâmetros recebidos ao construtor às propriedades da classe
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.hobby = hobby;
        this.img = img;
    }
}
