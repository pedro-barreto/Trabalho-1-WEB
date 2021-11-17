var intervalo = 3;

function imagem1() {
    
    document.getElementById('imagem-slide').src = 'img/slide/1.jpg';
    setTimeout('imagem2()',intervalo * 1000);

}

function imagem2() {
    
    document.getElementById('imagem-slide').src = 'img/slide/2.jpg';
    setTimeout('imagem3()',intervalo * 1000);

}

function imagem3() {
    
    document.getElementById('imagem-slide').src = 'img/slide/3.jpg';
    setTimeout('imagem1()',intervalo * 1000);

}