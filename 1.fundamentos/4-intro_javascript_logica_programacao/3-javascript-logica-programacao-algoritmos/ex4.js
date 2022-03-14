// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let base = [2, 3, 5, 7];
let isPrime = true;
let qtdPrime = 0;

for (currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
    for (currentDivisor = 0; currentDivisor < base.length; currentDivisor += 1) {
        if (currentNumber % base[currentDivisor] === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        qtdPrime += 1;
    }
}

console.log (qtdPrime);