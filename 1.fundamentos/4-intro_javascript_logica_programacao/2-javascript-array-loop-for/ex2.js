let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    // Aqui, a variável sum recebe e "agrupa", ou soma, os valores encontrados na array numbers 
    sum += numbers[index];
}

console.log(sum);