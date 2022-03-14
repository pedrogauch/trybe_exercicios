// Exercicio 1
function changeText(element, text) {
    document.getElementsByTagName(element)[1].innerHTML = text;
}
changeText('p', "HOJE PERDI 6H DO MEU DIA");

// Exercicio 2
function changeYellowToGreen(nomeDiv, cor) {
    const yellowToGreen = document.getElementsByClassName(nomeDiv)[0];
    yellowToGreen.style.background = cor;
}
changeYellowToGreen('main-content', 'green');

// Exercicio 3
function changeRedToWhite(element, color) {
    let redToWhite = document.getElementsByClassName(element)[0];
    redToWhite.style.background = color;
}
changeRedToWhite('center-content', 'white');

// Exercicio 4
function textCorrector(element, text) {
    let title = document.getElementsByTagName(element)[0];
    title.innerHTML = text;
} 
textCorrector('h1', 'Exercício 5.1 - JavaScript');

//Exercício 5
function upperCase(element) {
    let paragrafo = document.getElementsByTagName('p')[0];
    paragrafo.innerHTML = paragrafo.innerHTML.toUpperCase();
}
upperCase('p');

//Exercicio 6
function showParagraphs() {
    let paragraphs = document.getElementsByTagName('p');
    for (i = 0; i < paragraphs.length; i += 1) {
        console.log(paragraphs[i].innerHTML);
    }
}
showParagraphs();