function somarElementos(array) {
    return array.reduce((soma, elemento) => soma + elemento, 0);
}

const meuArray = [1, 2, 3, 4, 5];
const resultado = somarElementos(meuArray);
console.log(`A soma dos elementos é: ${resultado}`);