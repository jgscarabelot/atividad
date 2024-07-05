class Despesa {
    constructor(descricao, valor, data) {
        this.descricao = descricao;
        this.valor = valor;
        this.data = data;
    }
}

const minhaDespesa = new Despesa("Almoço", 25.50, "2024-07-05");
console.log(minhaDespesa);