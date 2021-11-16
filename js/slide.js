var intervalo = 3;

function imagem1() {
    
    document.getElementById('imagem-slide').src = 'img/1.png';
    setTimeout('imagem2()',intervalo * 1000);

}

function imagem2() {
    
    document.getElementById('imagem-slide').src = 'img/2.png';
    setTimeout('imagem3()',intervalo * 1000);

}

function imagem3() {
    
    document.getElementById('imagem-slide').src = 'img/3.png';
    setTimeout('imagem4()',intervalo * 1000);

}

function imagem4() {
    
    document.getElementById('imagem-slide').src = 'img/4.png';
    setTimeout('imagem5()',intervalo * 1000);

}

function imagem5() {
    
    document.getElementById('imagem-slide').src = 'img/5.png';
    setTimeout('imagem6()',intervalo * 1000);

}

function imagem6() {
    
    document.getElementById('imagem-slide').src = 'img/6.png';
    setTimeout('imagem1()',intervalo * 1000);

}