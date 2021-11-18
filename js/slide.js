//VARIAVEIS BOTÃO DO SLIDE
const slide = document.querySelectorAll('.slide');
const btn = document.querySelectorAll('.btn');
//CONT DO SLIDE PARA DETECTAR QUAL SLIDE ESTA
let cont = 1;

slidefun(cont);

//TEMPO PARA CADA SLIDE PASSAR. 5 SEGUNDOS
let timer = setInterval(autoSlide, 5000);

	//FUNÇÃO PARA O SLIDE PASSAR SOZINHO
	function autoSlide() {

		cont += 1;
		slidefun(cont);

	}

	//SETAS
	function plusSlides(n) {

		cont += n;
		slidefun(cont);
		resetTimer();

	}

	//BOTÕES
	function currentSlide(n) {

		cont = n;
		slidefun(cont);
		resetTimer();

	}

	//FUNÇÃO PARA EVITAR DE PASSAR 4s E QUANDO CLICAR NESSE TEMPO NÃO PASSAR 2 SLIDES DE UMA VEZ
	function resetTimer() {

		clearInterval(timer);
		timer = setInterval(autoSlide, 5000);

	}

	//LOGICA
	function slidefun(n) {
		
		let i;

		for(i = 0;i<slide.length;i++){

			slide[i].style.display = "none";

		}

		for(i = 0;i < btn.length ; i++) {

			btn[i].className = btn[i].className.replace(' active', '');

		}

		if(n > slide.length){

			cont = 1;

		}

		if(n < 1){

			cont = slide.length;

		}

		slide[cont - 1].style.display = "block";
		btn[cont - 1].className += " active";
		
	}