# Promise
Uma Promise no JavaScript é como um acordo entre você e uma tarefa que pode demorar um pouco, como esperar uma resposta da internet. Ela diz: "Eu vou te dar a resposta quando estiver pronta ou, se algo der errado, eu vou te dizer qual foi o problema." Você não precisa ficar esperando a resposta, você pode continuar fazendo outras coisas enquanto a tarefa está acontecendo.Isso torna possível que métodos assíncronos retornem valores de forma semelhante a métodos síncronos, adiando a entrega do valor para o futuro.

## Uma Promise pode estar em um dos três estados:

- Pending (Pendente): Estado inicial, a tarefa ainda não foi concluída ou rejeitada.
- Fulfilled (Concluída com Sucesso): Significa que a operação foi bem-sucedida, e um valor está disponível.
- Rejected (Rejeitada): Indica que ocorreu um erro durante a operação.

Quando uma Promise muda de estado, os handlers associados (usando then) são acionados, assegurando um tratamento organizado de tarefas assíncronas e tornando o código mais previsível.