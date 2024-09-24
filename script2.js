// Simulação de um BD
let usuarios = [
    { usuario: 'joão', senha: '123' }
];

let inputUsuario = document.getElementById('usuario');
let inputSenha = document.getElementById('senha');
let botaoLogin = document.getElementById('btnlogin');
let mensagem = document.getElementById('mensagem');

// Verificar as credenciais
function verificarCadastro() {
    let usuario = inputUsuario.value.trim();
    let senha = inputSenha.value.trim();
    let usuarioCadastro = usuarios.find(u => u.usuario === usuario && u.senha === senha);
    
    if (usuarioCadastro) {
        // Redirecionar a página
        window.location.href = 'bemvindos.html';
    } else {
        mensagem.textContent = 'Login ou senha errados';
    }
}

// Criando evento de verificação
botaoLogin.onclick = verificarCadastro;

// Adicionar o evento clicando no botão
inputSenha.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        verificarCadastro();
    }
});
