//Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let bigWord = array[0];
// let smallWord = array[0];

// Alg_1: encontrar a maior palavra. 

// Cria-se uma estrutura de repetição que percorre 'array'. (Determina-se a variável index iniciando em 0; index percorre todos elementos da array; incremento em 1 unidade):
for (let index = 0; index < array.length; index += 1) {
    // Cria-se a lógica de verificação da maior palavra. Cada palavra da array é comparada com a subsequente. O teste é: a palavra atual (array[index]) é maior do que a anterior? Sim: grava a palavra na variavel bigWord. Não: corre o index.
    if (array[index].length > bigWord.length) {
    bigWord = array[index];
    }
}

console.log(bigWord);