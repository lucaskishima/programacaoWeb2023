*** Settings ***
Library             SeleniumLibrary

*** Test Cases ***
Abrir o navegador e acessar o site do app
    Open Browser    url=http://localhost:5173/   browser=firefox

Clicar no botão de deletar e abrir modal de confirmação
    Click Element    id:deletar

preencher o formulário de confirmação
    Input Text        id:deletar_elem  1

Deletar o produto
    Click Element    id:deletar

Clicar no botão de deletar e abrir modal de confirmação
    Click Element    id:deletar

preencher o formulário de confirmação
    Input Text        id:deletar_elem  2

Deletar o produto
    Click Element    id:deletar

Clicar no botão de deletar e abrir modal de confirmação
    Click Element    id:deletar

preencher o formulário de confirmação
    Input Text        id:deletar_elem  3

Deletar o produto
    Click Element    id:deletar

