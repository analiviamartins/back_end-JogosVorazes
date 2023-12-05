export class VorazesList{
    constructor() {
      // Construtor da classe, inicializa o array personagens como vazio
      this.personagens = [];
    }
  
    // Retorna a lista completa de personagens
    getVorazes() {
      return this.personagens;
    }

    // Retorna o número de personagens na lista
    contador(){
      return this.personagens.length
    }

    // Retorna uma lista de personagens que pertencem a um distrito específico
    getVorazesDistrict(distrito){
      return this.personagens.filter((personagem) => personagem.distrito.toLowerCase() === distrito.toLowerCase() )
    }

    // Retorna uma lista de personagens que possuem um nome específico
    getVorazesName(nome){
      return this.personagens.filter((personagem) => personagem.nome.toLowerCase() === nome.toLowerCase() )
    }

    // Retorna uma lista de personagens que possuem uma profissão específico
    getVorazesProfi(profissao){
      return this.personagens.filter((personagem) => personagem.profissao.toLowerCase() === profissao.toLowerCase() )
    }
  
    // Retorna um personagem específico com base no seu id
    getVorazesById(id) {
      return this.personagens.find((personagem) => personagem.id === id);
    }
  
    // Adiciona um novo personagem à lista
    addVorazes(personagem) {
      this.personagens.push(personagem);
    }
  
    // Atualiza as informações de um personagem existente
    updateVorazes(nome, idade, distrito, genero, dano, defesa, descricao, imagem, id) {
      const personagem = this.getVorazesById(id);
  
      // Se o personagem não existe, retorna null
      if (!personagem) {
        return null;
      }

        // Atualiza as informações do personagem
        personagem.nome = nome;
        personagem.idade = idade;
        personagem.distrito = distrito;
        personagem.genero = genero;
        personagem.dano= dano;
        personagem.defesa= defesa;
        personagem.descricao = descricao;
        personagem.imagem = imagem;
      
  
      return personagem;
    }
  
    // Remove um personagem da lista com base no seu id
    deleteVorazes(id) {
      this.personagens = this.personagens.filter((personagem) => personagem.id !== id);
    }
  }