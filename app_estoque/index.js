const express = require('express')
const estoque = require('./estoque.js');
const app = express()


app.get("/adicionar/:id/:nome/:qtd", function(req, res){
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;

    res.json(estoque.adicionar_produto(id, nome, qtd));
});

app.get("/listar", function (req, res) {
    res.json(estoque.listar_produtos());
});

app.get("/editar/:id/:qtdAtual", function (req, res) {
    let id = req.params.id;
    let qtdAtual = req.params.qtdAtual;
    res.json(estoque.editar_produto(id, qtdAtual));
});

app.get("/remover/:id", function (req, res) {
    let id = req.params.id;
    res.json(estoque.remover_produto(id));
});

app.listen(8080, function () {
  console.log('Aplicação iniciada')
})
