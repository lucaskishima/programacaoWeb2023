*** Settings ***
Library             SeleniumLibrary

*** Test Cases ***
Abrir o navegador e acessar o site do app
    Open Browser    url=http://localhost:5173/   browser=firefox

Clicar no botão de Cadastrar novo e abrir modal de criação
    Click Element    id:cadastrar

preencher os campos para cadastro.    
    Input Text    id:title    manga
    Input Text    id:price    5
    Input Text    id:image    https://www.quitandatomio.com.br/upload/1085343213-beneficios-da-manga-palmer-para-a-saude.jpg

Cadastrar o produto   
    Click Element    id:postar

verificar se o produto foi cadastrado
    Page Should Contain    manga

Clicar no botão de Cadastrar novo e abrir modal de criação
    Click Element    id:cadastrar

preencher os campos para cadastro.    
    Input Text    id:title    macarrão
    Input Text    id:price    25
    Input Text    id:image    https://renata.com.br/images/receitas/87/renata-imagem-receitas-macarrao-ao-molho-rustico-de-tomate-e-bacon-share.jpg

Cadastrar o produto   
    Click Element    id:postar

verificar se o produto foi cadastrado
    Page Should Contain    macarrão


Clicar no botão de Cadastrar novo e abrir modal de criação
    Click Element    id:cadastrar

preencher os campos para cadastro.    
    Input Text    id:title    Hamburger
    Input Text    id:price    35
    Input Text    id:image    https://supermercadosrondon.com.br/guiadecarnes/images/postagens/quer_fazer_hamburger_artesanal_perfeito_2019-05-14.jpg
Cadastrar o produto   
    Click Element    id:postar

verificar se o produto foi cadastrado
    Page Should Contain    Hamburger