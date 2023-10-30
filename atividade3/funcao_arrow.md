# Arrow Function:

Uma expressão de Arrow Function é uma forma mais concisa de definir funções em JavaScript, similar às lambdas em outras linguagens de programação. Elas consistem em argumentos à esquerda da seta (=>) e uma expressão à direita, resultando em uma função de execução única. No entanto, elas não devem ser usadas como métodos de classe ou construtores. Uma característica notável é o comportamento "this lexical" que evita as complexidades de escopo relacionadas ao this em funções tradicionais.
# Sintaxe:

- (param1, param2, …, paramN) => { statements }
- (parametroUnico) => { statements }
- parametroUnico => { statements }
- () => { statements }

Essa sintaxe concisa torna as Arrow Functions ideais para funções curtas e expressivas em JavaScript, proporcionando uma maneira eficaz de lidar com tarefas comuns, como mapeamento, filtragem e redução de arrays. No entanto, é importante lembrar que elas não são adequadas para todos os cenários, especialmente quando se lida com funções mais complexas ou construtoras de objetos.