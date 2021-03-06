//VARIAVEIS DO FOMULARIO
var nome = document.getElementById('cmpNome');
var sobrenome = document.getElementById('cmpSobrenome');
var telefone = document.getElementById('cmpTelefone');
var email = document.getElementById('cmpEmail');
var descricao = document.getElementById('cmpDescricao');
var formulario = document.getElementsByTagName('form')[0];

//FUNÇÃO EXECUTADO APOS CLICAR NO ENVIAR DO FOMULARIO
function enviar() {

    if(nome.value !== '' && sobrenome.value !== '' && telefone.value !== '' &&
      email.value !== '' && descricao.value !== ''){

        window.alert('Dados enviados!');

    }

    const verificar = [...document.querySelectorAll('.campo')];

    verificar.forEach(field =>{

        if(field.value === ''){

            formulario.classList.add('validar-campo');

        }

    });
    
    const formError = document.querySelector('.validar-campo');

    if(formError){

        formError.addEventListener('animationend',(event) =>{

            if(event.animationName === 'campo-vazio'){

                formError.classList.remove('validar-campo');

            }

        });

    }

}

//DETECÇÃO DO SCROOL NA SEÇÃO 2
window.addEventListener('scroll',reveal);

function reveal(){
    
    var revealsE = document.querySelectorAll('.esquerda');
    var revealsD = document.querySelectorAll('.direita');

    for(var i = 0 ; i < revealsE.length;i++){

        var windowheight = window.innerHeight;
        var revealtop = revealsE[i].getBoundingClientRect().top;

        if(revealtop < windowheight - 150){

            revealsE[i].classList.add('active');

        }

    }

    for(var i = 0 ; i < revealsD.length;i++){

        var windowheight = window.innerHeight;
        var revealtop = revealsD[i].getBoundingClientRect().top;

        if(revealtop < windowheight - 150){

            revealsD[i].classList.add('active');

        }

    }

}