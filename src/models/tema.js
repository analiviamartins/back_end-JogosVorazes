// Importando a função uuidv4 do pacote 'uuid'
import { v4 as uuidv4 } from "uuid";

// Definindo a classe 'vorazes'
export class vorazes{
    constructor(nome, idade, distrito, genero, profissao, dano, defesa, descricao, imagem){
        // Atribuindo um ID único para cada instância da classe
        this.id= uuidv4();
        // Atribuindo os parâmetros recebidos ao construtor às propriedades da classe
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
    // Atribuindo os métodos da classe
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