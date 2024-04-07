//Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

//Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usuário clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
// O querySelectorAll busca todas as classes que tem um nome específico 
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

// ('click', () => {} quando clicar ele vai gerar alguma coisa)
botaoMostrarProjetos.addEventListener('click', () => {   
    mostrarMaisProjetos();
    esconderBotao();
});


function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}
