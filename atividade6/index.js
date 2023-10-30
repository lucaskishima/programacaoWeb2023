const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

//callback funtion como argumento
app.get("/", function (req, res) {
    res.render("index.html");
});

app.post("/dados", function (req, res) {
    let agendamento = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        email: req.body.email,
        sexo: req.body.sexo,
        data_agendamento: req.body.data_agendamento
    };

    let erro_form = false;

    if(agendamento.nome == ""){
        erro_form = true;
    }
    if(agendamento.endereco == ""){
        erro_form = true;
    }
    if(agendamento.telefone == ""){
        erro_form = true;
    }
    if(agendamento.email == ""){
        erro_form = true;
    }
    if(agendamento.sexo == ""){
        erro_form = true;
    }
    if(agendamento.data_agendamento == ""){
        erro_form = true;
    }

    res.render("dados.html", {agendamento, erro_form});

});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Aplicação rodando em http://localhost:${PORT}`);
});;