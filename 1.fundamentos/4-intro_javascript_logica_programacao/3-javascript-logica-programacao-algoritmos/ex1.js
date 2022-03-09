// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo: 4! = 4*3*2*1 = 24.
// Crie um algoritmo que retorne o fatorial de 10.

// Passo 1: definir uma variável inicial para receber o valor do fatorial.
let fatorial = 1;

//Passo 2: definir uma variável para receber o valor do número natural.
let n = 10;

// Passo 3: criar um laço de repetição "for" para percorrer todos os números em ordem decrescente, começando por "n" (no caso 10) e terminando em 1 (exclui o zero).
for (i = n; i > 0; i -= 1) {
// Passo 4: o novo valor da variável fatorial é o acúmulo da multiplicação de um número pelo seu antecessor direto (n*(n-1)).
    fatorial *= i;
}

//Passo 5: imprimir solução no console.
console.log(fatorial);