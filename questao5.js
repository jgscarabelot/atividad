function gerarNumeroAleatorio(min, max) {
    return Math.random() * (max - min) + min;
}

const numeroAleatorio = gerarNumeroAleatorio(10, 20);
console.log(`Número aleatório entre 10 e 20: ${numeroAleatorio}`);