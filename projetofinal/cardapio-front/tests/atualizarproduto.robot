*** Settings ***
Library             SeleniumLibrary

*** Test Cases ***
Abrir o navegador e acessar o site do app
    Open Browser    url=http://localhost:5173/   browser=firefox
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


Clicar no botão de atualizar e abrir modal de atualização
    Click Element    id:atualizar

Preencher os campos para atualização
    Input Text    id:id    2
    Input Text    id:title    guaraná
    Input Text    id:price    6
    Input Text    id:image    https://io.convertiez.com.br/m/drogal/shop/products/images/8290148/medium/refrigerante-guarana-antarctica-lata-350ml_16825.png
Atualizar o produto    
    Click Element    id:postar

verificar se o produto foi atualizado
    Page Should Contain    guaraná


Clicar no botão de atualizar e abrir modal de atualização
    Click Element    id:atualizar

Preencher os campos para atualização
    Input Text    id:id    3
    Input Text    id:title    açaí
    Input Text    id:price    18
    Input Text    id:image    https://minhasaude.proteste.org.br/wp-content/uploads/2022/06/acai-com-frutas-granola.png
Atualizar o produto    
    Click Element    id:postar

verificar se o produto foi atualizado
    Page Should Contain    açaí
