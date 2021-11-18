const slide = document.querySelectorAll('.slide');
const btn = document.querySelectorAll('.btn');
let cont = 1;

slidefun(cont);

let timer = setInterval(autoSlide, 5000);

	function autoSlide() {

		cont += 1;
		slidefun(cont);

	}

	function plusSlides(n) {

		cont += n;
		slidefun(cont);
		resetTimer();

	}

	function currentSlide(n) {

		cont = n;
		slidefun(cont);
		resetTimer();

	}

	function resetTimer() {

		clearInterval(timer);
		timer = setInterval(autoSlide, 5000);

	}

	function slidefun(n) {
		
		let i;

		for(i = 0;i<slide.length;i++){

			slide[i].style.display = "none";

		}

		for(i = 0;i < btn.length ; i++) {

			btn[i].className = btn[i].className.replace('active', '');

		}

		if(n > slide.length){

			cont = 1;

		}

		if(n < 1){

			cont = slide.length;

		}

		slide[cont - 1].style.display = "block";
		btn[cont - 1].className += "active";
		
	}