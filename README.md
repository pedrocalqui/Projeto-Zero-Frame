# Zero Frame 🛍️

> Plataforma de e-commerce moderna para venda de roupas, calçados e acessórios originais e multimarcas.

## 📋 Descrição

Zero Frame é um site de e-commerce dedicado à venda de roupas, calçados e acessórios originais e multimarcas. O projeto oferece uma experiência de compra online com navegação intuitiva, incluindo seções para produtos recomendados, originais da marca e multimarcas. Inclui páginas de login e registro para usuários, com suporte a tema claro e escuro.

## ✨ Funcionalidades

- **Navegação Intuitiva**: Menu principal com links para ORIGINAIS, MULTIMARCAS e SOBRE NÓS
- **Sistema de Busca**: Barra de pesquisa com filtros de produtos
- **Carrinho de Compras**: Gerenciamento completo do carrinho
- **Perfil do Usuário**: Acesso ao perfil com dropdown menu
- **Toggle de Tema**: Alternância entre modo claro e escuro com persistência localStorage
- **Carrossel de Categorias**: Navegação 3D por categorias (Calçados, Bermudas, Blusas, etc.)
- **Produtos Recomendados**: Seção destacando produtos em destaque
- **Slider de Imagens**: Navegação por imagens de produtos
- **Páginas de Autenticação**: Login e registro de usuários
- **Gestão de Endereços**: Adicionar e gerenciar endereços de entrega
- **Histórico de Pedidos**: Visualizar pedidos anteriores
- **Página de Suporte**: Formulário de contato e suporte
- **Responsividade**: Design adaptado para diferentes tamanhos de tela

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica do site
- **CSS3**: Estilização avançada com Custom Properties (variáveis CSS) e layout responsivo
- **JavaScript Vanilla**: Interatividade, toggle de tema, carrossel e validações
- **React 18**: Utilizado em componentes como o carrossel de categorias
- **Babel Standalone**: Para compilação de JSX no navegador
- **Font Awesome 7.0.1**: Ícones para navegação e botões
- **Google Fonts**: Fonte Montserrat (pesos 100-900) para tipografia

## 🎨 Sistema de Temas

O projeto implementa um sistema robusto de temas usando CSS Custom Properties:

### Variáveis CSS Principais:
- `--primary-color`: Cor primária da marca
- `--secondary-color`: Cor secundária
- `--accent-color`: Cor de destaque
- `--text-color`: Cor do texto
- `--page-font`: Fonte principal da página

### Modo Escuro:
- Ativado/desativado via toggle no header
- Estado persistido em `localStorage`
- Classe `modoescuro` aplicada no elemento `body`
- Transições suaves entre temas



## 🚀 Como Executar

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` em um navegador web para acessar a página principal
3. Para as páginas adicionais:
   - Login: `pages/login-page/login.html`
   - Registro: `pages/register-page/register.html`
   - Busca: `pages/search/search.html`
   - Carrinho: `pages/carrinho/carrinho.html`

**Não requer servidor backend** - É uma aplicação frontend pura que funciona localmente no navegador.

## 📁 Estrutura do Projeto

```
PIM-ZeroFrame/
├── index.html                          # Página principal com produtos recomendados
├── README.md                           # Este arquivo
├── style.css                           # Estilos globais e variáveis de tema
├── assets/
│   └── products/                       # Imagens dos produtos
├── componentes/                        # Componentes reutilizáveis
│   ├── theme-toggle.js                # Toggle entre tema claro/escuro
│   ├── carrossel-categorias/
│   │   ├── carrossel-categorias.js    # Carrossel 3D de categorias (React)
│   │   └── carrossel-categorias.css   # Estilos do carrossel
│   └── dropdown-menu/
│       ├── dropdown-menu.js           # Menu dropdown do usuário
│       └── dropdown-menu.css          # Estilos do dropdown
├── styles/                             # Estilos globais reutilizáveis
│   ├── header.css                     # Estilos do header/navegação
│   ├── footer.css                     # Estilos do footer
│   └── product-card.css               # Estilos dos cards de produtos
└── pages/                              # Páginas da aplicação
    ├── carrinho/
    │   ├── carrinho.html              # Página do carrinho de compras
    │   ├── carrinho.css               # Estilos do carrinho
    │   ├── carrinho.js                # Lógica do carrinho
    │   └── assets/
    │       └── products/              # Imagens dos produtos no carrinho
    ├── favoritos/
    │   ├── favoritos.html             # Página de produtos favoritos
    │   ├── favoritos.css              # Estilos da página
    │   └── assets/
    ├── login-page/
    │   ├── login.html                 # Página de login
    │   ├── login.css                  # Estilos da página de login
    │   └── assets/                    # Assets da página de login
    ├── meus-enderecos/
    │   ├── enderecos.html             # Página de gerenciamento de endereços
    │   ├── enderecos.css              # Estilos da página
    │   └── assets/
    ├── meus-pedidos/
    │   ├── pedidos.html               # Página de histórico de pedidos
    │   ├── pedidos.css                # Estilos da página
    │   └── assets/
    ├── produtos/
    │   ├── product.html               # Página de detalhes do produto
    │   ├── product.css                # Estilos da página
    │   ├── assets/                    # Assets da página
    │   └── slider/
    │       ├── slider.js              # Slider de imagens de produtos
    │       └── slider.css             # Estilos do slider
    ├── register-page/
    │   ├── register.html              # Página de registro
    │   ├── register.css               # Estilos da página
    │   └── assets/                    # Assets da página
    ├── search/
    │   ├── search.html                # Página de busca com filtros
    │   ├── search.css                 # Estilos da página
    │   ├── search.js                  # Lógica de busca
    │   └── assets/
    ├── sobre/
    │   ├── sobre.html                 # Página sobre nós
    │   ├── sobre.css                  # Estilos da página
    │   └── slider fundadores/
    │       ├── slider.js              # Slider de fundadores
    │       ├── slider.css             # Estilos do slider
    │       └── assets/                # Imagens dos fundadores
    └── suporte/
        ├── suporte.html               # Página de suporte/contato
        ├── suporte.css                # Estilos da página
        ├── suporte.js                 # Lógica do formulário de suporte
        └── assets/
```

## 🧩 Componentes Principais

### Theme Toggle (`componentes/theme-toggle.js`)
- Alterna entre modo claro e escuro
- Salva preferência em `localStorage`
- Aplica classe `modoescuro` ao elemento `body`

### Carrossel de Categorias (`componentes/carrossel-categorias/`)
- Implementado em React
- Efeito 3D com `transform: rotateY()`
- Auto-play com intervalo de 4 segundos
- Pausa ao passar o mouse
- Navegação manual com próximo/anterior

### Dropdown Menu (`componentes/dropdown-menu/`)
- Menu do perfil do usuário
- Fecha ao clicar fora
- Fecha ao pressionar ESC
- Fecha ao selecionar um item

### Slider de Produtos (`pages/produtos/slider/` e `pages/sobre/slider fundadores/`)
- Navegação entre imagens
- Loop circular (primeira ↔ última)
- Botões próximo/anterior
```

## 📋 Páginas da Aplicação

| Página | Caminho | Descrição |
|--------|---------|-----------|
| **Início** | `/index.html` | Página principal com produtos recomendados e carrosseis |
| **Login** | `/pages/login-page/login.html` | Autenticação de usuários |
| **Registro** | `/pages/register-page/register.html` | Cadastro de novos usuários |
| **Busca** | `/pages/search/search.html` | Resultados de busca com filtros |
| **Carrinho** | `/pages/carrinho/carrinho.html` | Gerenciamento de itens no carrinho |
| **Favoritos** | `/pages/favoritos/favoritos.html` | Produtos salvos pelo usuário |
| **Produtos** | `/pages/produtos/product.html` | Detalhes completos de um produto |
| **Endereços** | `/pages/meus-enderecos/enderecos.html` | Gerenciamento de endereços de entrega |
| **Pedidos** | `/pages/meus-pedidos/pedidos.html` | Histórico de pedidos do usuário |
| **Sobre** | `/pages/sobre/sobre.html` | Informações sobre a empresa com slider de fundadores |
| **Suporte** | `/pages/suporte/suporte.html` | Formulário de contato e suporte |

## 🔍 Padrões de Código

### Validação de Formulários
- Validação de email com regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Verificação de campos obrigatórios
- Feedback visual de erros
- Simples e sem dependências externas

### Estrutura de Event Listeners
- Eventos de clique para botões e ícones
- Eventos de hover para carrosseis
- Eventos de teclado (ESC para fechar menus)
- Propagação de eventos controlada com `stopPropagation()`

### Padrão de Tema
- Armazenamento de preferência em `localStorage`
- Classes CSS para aplicar estilos do tema
- Transições suaves entre temas

## 📚 Documentação do Código

**Todo o código está devidamente comentado** com explicações em português sobre:
- Propósito de cada função e seção
- Parâmetros e valores de retorno
- Eventos e listeners
- Variáveis CSS e seus significados
- Estrutura de HTML e componentes

Os comentários foram adicionados sem modificar nenhuma funcionalidade existente.

## 🎯 Funcionalidades por Página

### Index (Página Principal)
- Carrossel de categorias em 3D
- Produtos recomendados
- Seções de originais e multimarcas
- Header com navegação e busca
- Footer com informações da empresa

### Login & Registro
- Formulários com validação
- Links entre páginas de login/registro
- Recuperação de senha
- Integração com tema claro/escuro

### Busca
- Filtros por categoria
- Filtros por preço
- Filtros por marcas
- Exibição de resultados em grid

### Carrinho
- Adicionar/remover itens
- Alterar quantidade
- Calcular total
- Resumo de pedido

### Produtos
- Galeria de imagens com slider
- Descrição detalhada
- Preço e desconto
- Botão adicionar ao carrinho
- Opções de tamanho/cor

### Pedidos & Endereços
- Listagem de pedidos anteriores
- Histórico de endereços
- Opção de adicionar novo endereço

### Suporte
- Formulário de contato
- Validação de email
- Mensagens de sucesso/erro

## 🌟 Destaques Técnicos

- ✅ **Sem backend** - Funciona completamente no navegador
- ✅ **Responsivo** - Adaptado para diferentes tamanhos de tela
- ✅ **Modo Escuro** - Implementação completa com CSS variables
- ✅ **Performance** - Carregamento rápido sem dependências pesadas
- ✅ **Acessibilidade** - Código semântico e bem estruturado
- ✅ **Comentado** - Todo código documentado em português

## 📝 Notas de Desenvolvimento

- Todos os arquivos CSS e JavaScript estão comentados
- Estrutura bem organizada em componentes reutilizáveis
- Padrões consistentes em toda a aplicação
- Fácil de estender e manter

## Como Executar

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` em um navegador web moderno (Chrome, Firefox, etc.).
3. O site será carregado e você poderá navegar pelas seções.

## Contato

Para dúvidas ou sugestões, entre em contato através do email: murilocruzro@gmail.com

---

**Versão**: 1.0.0  
**Data da última atualização**: 6 de maio de 2026  
**Status**: ✅ Completo e documentado