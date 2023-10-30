
function imprimirMatriz(m) {
    for (var i = 0; i < m.length; i++) {
        var linha = "| ";
        for (var j = 0; j < m[i].length; j++) {
            linha += m[i][j] + " ";
        }
        linha += "|";
        console.log(linha);
    }
}

var A = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log("Matriz A:");
imprimirMatriz(A);

function calcularTransposta(matriz) {
    var transposta = [];
    for (var i = 0; i < matriz[0].length; i++) {
        transposta[i] = [];
        for (var j = 0; j < matriz.length; j++) {
            transposta[i][j] = matriz[j][i];
        }
    }
    return transposta;
}

console.log("Matriz Transposta de A:");
imprimirMatriz(calcularTransposta(A));