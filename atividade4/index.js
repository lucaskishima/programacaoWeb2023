const express = require('express')
const calc = require('./calculadora.js');
const app = express()

app.get('/somar/:num1/:num2', function (request, response) {
  var num1 = request.params.num1
  var num2 = request.params.num2
  response.send(`${num1} + ${num2} = ${calc.somar(num1, num2)}`);
})

app.get('/subtrair/:num1/:num2', function (request, response) {
    var num1 = request.params.num1
    var num2 = request.params.num2
    response.send(`${num1} + ${num2} = ${calc.subtrair(num1, num2)}`);
})

app.get('/multiplicar/:num1/:num2', function (request, response) {
    var num1 = request.params.num1
    var num2 = request.params.num2
    response.send(`${num1} + ${num2} = ${calc.multiplicar(num1, num2)}`);
})

app.get('/dividir/:num1/:num2', function (request, response) {
    var num1 = request.params.num1
    var num2 = request.params.num2
    response.send(`${num1} + ${num2} = ${calc.dividir(num1, num2)}`);
})

app.listen(8080, function () {
  console.log('Aplicação iniciada')
})
