const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];


// escreva toObject abaixo

const cars = [palio, shelbyCobra, chiron];
console.log(cars);

const toObject = (carro, marca, ano) => ({
    carro,
    marca,
    ano,
});
const carsObj = cars.map((car) => toObject(...car));
console.log(carsObj);
