const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];


// escreva toObject abaixo

// Lógica do ex1.js para transformar multiplas arrays numa única array que contem todas as infos originais.
const cars = [palio, shelbyCobra, chiron];
console.log(cars);

// Função 1 que transforma o array fornecido em objeto.
const toObject = (carro, marca, ano) => ({
    carro,
    marca,
    ano,
});

// Mapeia o array cars e aplica a Função 1 (acima) em cada elemento do array (...car).
const carsObj = cars.map((car) => toObject(...car));
console.log(carsObj);
