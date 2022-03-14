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