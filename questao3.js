function contarLetra(frase, letra) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === letra.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}

const fraseExemplo = "Esta é uma frase de exemplo.";
const letraProcurada = "a";
const quantidade = contarLetra(fraseExemplo, letraProcurada);

console.log(`A letra "${letraProcurada}" aparece ${quantidade} vezes na frase.`);