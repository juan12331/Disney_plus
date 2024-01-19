var entrar = document.getElementById('entrar');
var emailreal = 'email@falso.com';
var senhareal = '123455';
var sleepSetTimeout_ctrl;

function sleep(ms) {
    clearInterval(sleepSetTimeout_ctrl);
    return new Promise(resolve => sleepSetTimeout_ctrl = setTimeout(resolve, ms));
}

entrar.addEventListener('click', () => {
    let email = prompt('Digite seu email');
    let senha = prompt('Digite sua senha');

    if (emailreal === email && senhareal === senha){
        alert('Usuario e senha autenticados com sucesso')
        sleep(1000)
        window.location.href = "https://www.disneyplus.com/pt-br/identity/login?pinned=true"
    }
});