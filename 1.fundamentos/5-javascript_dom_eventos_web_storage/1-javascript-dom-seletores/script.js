// Exercicio 1
function changeText() {
    document.getElementsByTagName('p')[1].innerHTML = "VAI TOMAR NO CU ESSE CURSO DE BOSTA."
}
changeText();

// Exercicio 2
function changeYellowToGreen() {
    let yellowToGreen = document.getElementsByClassName('main-content')[0];
    yellowToGreen.style.background = "rgb(76,164,109)";
}
changeYellowToGreen();

// Exercicio 3
function changeRedToWhite() {
    let redToWhite = document.getElementsByClassName('center-content')[0];
    redToWhite.style.background = "white";
}
changeRedToWhite();

// Exercicio 4
function textCorrector() {
    let title = document.getElementsByTagName('h1')[0];
    title.innerHTML = "Exercício 5.1 - JavaScript";
} 
textCorrector();

//Exercício 5
function upperCase() {
    let paragrafo = document.getElementsByTagName('p')[0];
    paragrafo.innerHTML = paragrafo.innerHTML.toUpperCase();
}
upperCase();