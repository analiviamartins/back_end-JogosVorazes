import { v4 as uuidv4 } from 'uuid';

export class Integrantes {
    constructor(nome, idade, email, hobby, img) {
        this.id = uuidv4();
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.hobby = hobby;
        this.img = img;
    }
}