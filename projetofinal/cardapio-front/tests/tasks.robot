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

Clicar no botão de atualizar e abrir modal de atualização
    Click Element    id:atualizar

Preencher os campos para atualização
    Input Text    id:id    1
    Input Text    id:title    banana
    Input Text    id:price    10
    Input Text    id:image    https://upload.wikimedia.org/wikipedia/commons/a/af/Bananas_%28Alabama_Extension%29.jpg

Atualizar o produto    
    Click Element    id:postar

verificar se o produto foi atualizado
    Page Should Contain    banana

Clicar no botão de deletar e abrir modal de confirmação
    Click Element    id:deletar

preencher o formulário de confirmação
    Input Text        id:deletar_elem  1

Deletar o produto
    Click Element    id:deletar