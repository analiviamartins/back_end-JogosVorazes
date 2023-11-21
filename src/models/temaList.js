export class vorazesList{
    constructor() {
      this.personagens = [];
    }
  
    getVorazes() {
      return this.personagens;
    }

    contador(){
      return this.personagens.length
    }

    getVorazesDistrict(distrito){
      return this.personagens.filter((personagem) => personagem.distrito.toLowerCase() === distrito.toLowerCase() )
    }

    getVorazesName(nome){
      return this.personagens.filter((personagem) => personagem.nome.toLowerCase() === nome.toLowerCase() )
    }
  
    getVorazesById(id) {
      return this.personagens.find((personagem) => personagem.id === id);
    }
  
    addVorazes(personagem) {
      this.personagens.push(personagem);
    }
  
    updateVorazes(id, nome, idade, distrito, genero, dano, defesa, descricao, imagem) {
      const personagem = this.getVorazesById(id);
  
      if (!personagem) {
        return null;
      }

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
  
    deleteVorazes(id) {
      this.personagens = this.personagens.filter((personagem) => personagem.id !== id);
    }
  }