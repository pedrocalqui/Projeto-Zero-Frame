/*
  ====================================
  MENU DROPDOWN DE USUÁRIO
  ====================================
  
  Controla o menu dropdown que aparece ao clicar no ícone de usuário
  Oferece várias formas de fechar o menu (clique externo, ESC, clique em item)
*/

// Seleciona o menu dropdown do DOM
let dropdownMenu = document.getElementById("dropdownMenu");

// Seleciona o botão/ícone do usuário do DOM
let userIcon = document.getElementById("userMenuIcon");

/*
  Evento: ao clicar no ícone de usuário, alterna o menu entre aberto e fechado
  e.stopPropagation() previne que o clique propague para outros listeners
*/
userIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    // Alterna a classe 'open-menu' que controla a exibição do dropdown
    dropdownMenu.classList.toggle("open-menu");
    // Alterna a classe 'active-dropdown' para mudar estilo do ícone
    userIcon.classList.toggle("active-dropdown");
})

/*
  Evento: ao clicar fora do menu, o fecha
  Valida se o clique foi fora tanto do menu quanto do ícone
*/
document.addEventListener("click", (e) => {
    // Verifica se o clique não foi no menu e não foi no ícone
    const outsideClick = !dropdownMenu.contains(e.target) && !userIcon.contains(e.target);

    // Se foi clique externo, remove as classes que abrem o menu
    if (outsideClick) {
        dropdownMenu.classList.remove("open-menu");
        userIcon.classList.remove("active-dropdown");
    }
})

/*
  Evento: ao pressionar a tecla ESC, fecha o menu
  Permite ao usuário sair do menu com o teclado
*/
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        dropdownMenu.classList.remove("open-menu");
        userIcon.classList.remove("active-dropdown");
    }
})

/*
  Evento: ao clicar em um item do menu, o fecha
  Converte a navegação em uma ação "um clique" - clica em um item e o menu fecha
*/
dropdownMenu.addEventListener("click", () => {
    dropdownMenu.classList.remove("open-menu");
    userIcon.classList.remove("active-dropdown");
})