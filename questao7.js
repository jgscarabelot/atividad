function contarPalavrasUnicas(frase) {
    const palavras = frase.toLowerCase().split(/\s+/);
    const palavrasUnicas = new Set(palavras);
    
    return palavrasUnicas.size;
}

const minhaFrase = "Esta é uma frase de exemplo com algumas palavras repetidas e outras únicas.";
const numeroPalavrasUnicas = contarPalavrasUnicas(minhaFrase);

console.log(`Número de palavras únicas na frase: ${numeroPalavrasUnicas}`);