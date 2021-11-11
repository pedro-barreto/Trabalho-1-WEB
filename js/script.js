var nome = document.getElementById('cmpNome');
var sobrenome = document.getElementById('cmpSobrenome');
var telefone = document.getElementById('cmpTelefone');
var email = document.getElementById('cmpEmail');
var descricao = document.getElementById('cmpDescricao');
var formulario = document.getElementsByTagName('form')[0];

function enviar() {

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