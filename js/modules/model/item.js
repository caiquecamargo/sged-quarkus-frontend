export default class Item {
  constructor(item) {
    if (item === undefined) {
      this.id = 0;
      this.nome = "";
      this.restricoes = "";
      this.src = "";
      this.tipo = "";
    } else {
      this.id = item.id;
      this.nome = item.nome;
      this.restricoes = item.restricoes;
      this.src = item.restricoes;
      this.tipo = item.tipo;
    }
  }

  setId(id) {
    this.id = id;
  }

  get getNome() {
    return this.nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  get getRestricoes() {
    return this.restricoes;
  }

  setRestricoes(restricoes) {
    this.restricoes = restricoes;
  }

  get getSrc() {
    return this.src;
  }

  setSrc(src) {
    this.src = src;
  }

  get getTipo() {
    return this.tipo
  }

  setTipo(tipo) {
    this.tipo = tipo.replace("application/", "");
  }

  get toObject() {
    return {
      id: this.id,
      nome: this.nome,
      restricoes: this.restricoes,
      src: this.src,
      tipo: this.tipo
    }
  }
}