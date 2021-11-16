var intervalo = 2;

function imagem1() {
    
    document.getElementById('imagem-slide').src = 'img/1.jpg';
    setTimeout('imagem2()',intervalo * 1000);

}

function imagem2() {
    
    document.getElementById('imagem-slide').src = 'img/2.jpg';
    setTimeout('imagem3()',intervalo * 1000);

}

function imagem3() {
    
    document.getElementById('imagem-slide').src = 'img/3.jpg';
    setTimeout('imagem4()',intervalo * 1000);

}

function imagem4() {
    
    document.getElementById('imagem-slide').src = 'img/4.jpg';
    setTimeout('imagem5()',intervalo * 1000);

}

function imagem5() {
    
    document.getElementById('imagem-slide').src = 'img/5.jpg';
    setTimeout('imagem6()',intervalo * 1000);

}

function imagem6() {
    
    document.getElementById('imagem-slide').src = 'img/6.jpg';
    setTimeout('imagem1()',intervalo * 1000);

}