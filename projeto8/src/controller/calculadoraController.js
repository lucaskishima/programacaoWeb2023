const calculadora = require('../calculadora/calculadora');

function indexCalculadora(req, res) {
    res.render('index.html');
}

function calcular(req, res) {
    const { operacao, n1, n2 } = req.body;

    let resultado;

    switch (operacao) {
        case 'somar':
            resultado = calculadora.somar(parseFloat(n1), parseFloat(n2));
            break;
        case 'subtrair':
            resultado = calculadora.subtrair(parseFloat(n1), parseFloat(n2));
            break;
        case 'multiplicar':
            resultado = calculadora.multiplicar(parseFloat(n1), parseFloat(n2));
            break;
        case 'dividir':
            resultado = calculadora.dividir(parseFloat(n1), parseFloat(n2));
            break;
        default:
            return res.status(400).send('Operação inválida');
    }

    const htmlResponse = `
        <h2>Resultado da operação ${operacao}:</h2>
        <p>${resultado}</p>
        <a href="/">
            <button>Voltar para a Calculadora</button>
        </a>
    `;

    res.send(htmlResponse);
}

module.exports = {
    indexCalculadora,
    calcular
};
