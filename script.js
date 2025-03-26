let signUp = document.querySelector('#signUp')
let text = document.querySelector('.signUp')
let register = document.querySelector('.register')
let title = document.querySelector('#title')
let elements = document.querySelector('.elements')
let titleCreate = document.querySelector("#titleCreate")
let inputText = document.querySelector('#inputText')
let forgot = document.querySelector('#forgot')
let forReg = document.querySelector('#forReg')
let nameCad = document.querySelector('#nameCad')
let signIn = document.querySelector('.signIn')

let isLoginMode = true;
signIn.addEventListener('click', function(){
    if (isLoginMode == true) {
        moverProLado();
    } else {
        voltar();
    }
    isLoginMode = !isLoginMode;
});
function moverProLado(){
    nameCad.innerHTML = "ENTRAR"
    forReg.innerHTML = 'ou use email para registro'
    forgot.style.display = 'none'
    titleCreate.innerHTML = "Criar Conta"
    inputText.style.display = "block"
    signUp.style.left = '0%'
    text.innerHTML = 'CADASTRAR'
    signUp.style.borderRadius = "10px 100px 100px 10px"
    register.style.right = '0%'
    title.innerHTML = 'Bem Vindo de Volta!'
}
function voltar(){
    nameCad.innerHTML = "CADASTRAR"
    forReg.innerHTML = 'ou use email e senha'
    forgot.style.display = 'block'
    titleCreate.innerHTML = "Entrar"
    inputText.style.display = "none"
    signUp.style.left = '50%'
    text.innerHTML = 'ENTRAR'
    signUp.style.borderRadius = "100px 10px 10px 100px"
    register.style.right = '50%'
    title.innerHTML = 'Ola, Amigo!'
}
