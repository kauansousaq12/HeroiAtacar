// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      // Determina o ataque com base no tipo do herói
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque genérico";
      }
  
      // Exibe a mensagem do ataque
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias de heróis
  const mago = new Heroi("Merlin", 50, "mago");
  const guerreiro = new Heroi("Aragorn", 35, "guerreiro");
  const monge = new Heroi("Bruce Lee", 32, "monge");
  const ninja = new Heroi("Hanzo", 28, "ninja");
  
  // Chamando o método atacar para cada herói
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();
  