class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        const imc = this.peso / (this.altura ** 2);
        return imc.toFixed(2);
    }
}

const pessoa1 = new Pessoa("João", 75, 1.8);
const imcJoao = pessoa1.calcularIMC();
console.log(`${pessoa1.nome} tem um IMC de ${imcJoao}.`);