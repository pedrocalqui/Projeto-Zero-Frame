/*
  ====================================
  PÁGINA DE BUSCA - SEARCH
  ====================================
  
  Script que processa a busca de produtos
  Recupera o parâmetro de query da URL e exibe na página
*/

// Recupera os parâmetros da URL (ex: ?q=Originais)
const params = new URLSearchParams(window.location.search);

// Extrai o valor do parâmetro "q" (query/busca)
const search = params.get("q");

// Seleciona o elemento do título da página
const title = document.querySelector(".search-title");

// Altera o título para exibir o termo pesquisado 
title.textContent = `Resultados para "${search}"`;
