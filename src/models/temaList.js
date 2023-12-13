export class VorazesList{
    constructor() {
      // Construtor da classe, inicializa o array personagens como vazio
      this.personagens = [];
    }
  
    // Retorna a lista completa de personagens
    getVorazes(dados) {

      const { nome, distrito, profissao} = dados;

      if(nome || distrito || profissao){
        return this.getNomeDistritoProfissao( nome, distrito, profissao);
      }

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
    updateVorazes(id, nome, idade, distrito, genero, profissao, dano, defesa, descricao, imagem) {
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
        personagem.profissao = profissao;
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

    getNomeDistritoProfissao(nome, distrito, profissao){
    
      if(nome){
        nome = nome.toLowerCase();
      }
      if(distrito){
        distrito = distrito.toLowerCase();
      }
      if(profissao){
        profissao = profissao.toLowerCase();
      }

      //filtro composto.
      const filtro = this.personagens.filter((personagem)=>{
        const nomeCondicao = nome === undefined || personagem.nome.toLowerCase().includes(nome);
        const distritoCondicao = distrito === undefined || personagem.distrito.toLowerCase().includes(distrito);
        const profissaoCondicao = profissao === undefined || personagem.profissao.toLowerCase().includes(profissao);
        //outros igual aqui
        //mais de um coloca &&
        return nomeCondicao && distritoCondicao && profissaoCondicao;
      });

      return filtro;
    }
  }