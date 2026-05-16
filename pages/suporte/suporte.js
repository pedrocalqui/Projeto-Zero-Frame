/*
  ====================================
  PÁGINA DE SUPORTE - FORMULÁRIO
  ====================================
  
  Gerencia o formulário de suporte/contato
  Valida dados, previne envios inválidos, e simula envio para backend
  Exibe mensagens de sucesso/erro ao usuário
*/

// Event: Executado quando a página termina de carregar
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário de suporte
    const suporteForm = document.getElementById('suporteForm');

    // Se o formulário existe, adiciona o listener de envio
    if (suporteForm) {
        suporteForm.addEventListener('submit', handleFormSubmit);
    }

    // Aplica o tema de acordo com as preferências do usuário
    applyTheme();
});

/*
  Função que processa o envio do formulário
  @param e: evento do formulário
*/
function handleFormSubmit(e) {
    // Previne o comportamento padrão de envio
    e.preventDefault();

    // Recupera e limpa os valores do formulário
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const categoria = document.getElementById('categoria').value;
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const termos = document.getElementById('termos').checked;

    // Validação: verifica se campos obrigatórios estão preenchidos
    if (!nome || !email || !categoria || !assunto || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Validação: verifica se o usuário aceitou os termos
    if (!termos) {
        alert('Por favor, concorde em receber respostas por email.');
        return;
    }

    // Validação: valida o formato do email
    if (!isValidEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    // Prepara os dados para envio
    const formData = {
        nome: nome,
        email: email,
        telefone: telefone,
        categoria: categoria,
        assunto: assunto,
        mensagem: mensagem,
        data: new Date().toLocaleString('pt-BR')
    };

    // Envia o formulário (simulado ou para backend real)
    enviarFormulario(formData);
}

/*
  Valida se o email tem um formato válido
  @param email: string do email a validar
  @return: true se válido, false se inválido
*/
function isValidEmail(email) {
    // Regex que valida emails básicos
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/*
  Função que envia o formulário (simulado)
  @param formData: objeto com os dados do formulário
*/
function enviarFormulario(formData) {
    // Seleciona o botão de envio
    const btn = document.querySelector('.suporte-submit-btn');
    // Salva o texto original do botão
    const btnText = btn.innerHTML;
    // Muda para estado de carregamento
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
    btn.disabled = true;

    // Log para debug
    console.log('Dados do formulário:', formData);

    // COMENTÁRIO: Aqui você pode descomentar o código abaixo para enviar dados reais para um servidor
    // e remover a simulação setTimeout
    /*
    fetch('/api/suporte/enviar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.sucesso) {
            mostrarSucesso();
            document.getElementById('suporteForm').reset();
        } else {
            mostrarErro('Erro ao enviar. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        mostrarErro('Erro ao enviar. Tente novamente.');
    })
    .finally(() => {
        btn.innerHTML = btnText;
        btn.disabled = false;
    });
    */

    // Simulação: finge que enviou após 1.5 segundos
    setTimeout(() => {
        mostrarSucesso();
        document.getElementById('suporteForm').reset();
        btn.innerHTML = btnText;
        btn.disabled = false;
    }, 1500);
}

/*
  Exibe mensagem de sucesso na página
  Desaparece automaticamente após 5 segundos
*/
function mostrarSucesso() {
    // Seleciona o container do suporte
    const container = document.querySelector('.suporte-container');
    // Cria novo elemento para a mensagem
    const mensagem = document.createElement('div');
    mensagem.className = 'sucesso-mensagem';
    // Conteúdo HTML da mensagem
    mensagem.innerHTML = `
        <div class="sucesso-conteudo">
            <i class="fa-solid fa-check-circle"></i>
            <h3>Mensagem enviada com sucesso!</h3>
            <p>Obrigado por entrar em contato. Responderemos em breve.</p>
        </div>
    `;
    
    // Adiciona a mensagem ao topo do container
    container.prepend(mensagem);

    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        mensagem.remove();
    }, 5000);
}

/*
  Exibe mensagem de erro
  @param texto: mensagem de erro a exibir
*/
function mostrarErro(texto) {
    alert(texto);
}

/*
  Aplica o tema de acordo com as preferências armazenadas
*/
function applyTheme() {
    // Verifica se o modo escuro está ativo
    const isDarkMode = document.body.classList.contains('modoescuro');
    
    if (isDarkMode) {
        document.body.classList.add('modoescuro');
    }
}

/*
  Listener para quando o tema é alternado por outro script
*/
document.addEventListener('modoescuro-toggle', function(e) {
    if (e.detail.isDarkMode) {
        document.body.classList.add('modoescuro');
    } else {
        document.body.classList.remove('modoescuro');
    }
});

// ====================================
// ESTILOS DINÂMICOS PARA MENSAGEM DE SUCESSO
// ====================================

// Cria um elemento style para os estilos de sucesso
const estiloSucesso = document.createElement('style');
estiloSucesso.innerHTML = `
    /* Container da mensagem de sucesso */
    .sucesso-mensagem {
        background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
        color: white;
        padding: 1.5rem;
        border-radius: 0.5rem;
        margin-bottom: 2rem;
        box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
        animation: slideInDown 0.5s ease-out;
    }

    /* Conteúdo interno da mensagem */
    .sucesso-conteudo {
        display: flex;
        align-items: center;
        gap: 1rem;
        text-align: center;
        justify-content: center;
        flex-direction: column;
    }

    /* Ícone de sucesso */
    .sucesso-mensagem i {
        font-size: 2rem;
        color: white;
    }

    /* Título da mensagem */
    .sucesso-mensagem h3 {
        margin: 0;
        font-size: 1.2rem;
    }

    /* Texto da mensagem */
    .sucesso-mensagem p {
        margin: 0.5rem 0 0 0;
        font-size: 0.95rem;
        opacity: 0.95;
    }

    /* Animação de deslize para baixo */
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

// Adiciona os estilos ao head do documento
document.head.appendChild(estiloSucesso);
