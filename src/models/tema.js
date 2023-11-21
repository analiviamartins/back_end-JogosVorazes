import { v4 as uuidv4 } from "uuid";

export class vorazes{
    constructor(nome, idade, distrito, genero, profissao, dano, defesa, descricao, imagem){
        this.id= uuidv4();
        this.nome= nome;
        this.idade= idade;
        this.distrito= distrito;
        this.genero= genero;
        this.profissao= profissao
        this.dano= dano;
        this.defesa= defesa;
        this.descricao= descricao ;
        this.imagem = this.url_valid(imagem);
    }

    geradorId() {
       return uuidv4();
    }
    url_valid(imagem){
        if(imagem.match(/\.(jpeg|jpg|gif|png)$/) !=null){
            return "imagem válida"
        }else{
            return "imagem inválida"
        }
    }
}