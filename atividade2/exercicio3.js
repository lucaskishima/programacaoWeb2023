var A = [
    [1, 3],
    [2, 5]
];

var B = [
    [2, 2],
    [0, 1]
];

function multiplicarMatrizes(A, B) {
    
    if (A[0].length !== B.length) {
        console.log("Não é possível calcular a multiplicação. O número de colunas da matriz A não é igual ao número de linhas da matriz B.");
        return null;
    }

    const C = [];
    for (let i = 0; i < A.length; i++) {
        C[i] = [];
        for (let j = 0; j < B[0].length; j++) {
            C[i][j] = 0;
        }
    }

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B[0].length; j++) {
            for (let k = 0; k < A[0].length; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return C;
}

var C = multiplicarMatrizes(A, B);

if (C !== null) {
    console.log("Matriz Resultante C:");
    for (let i = 0; i < C.length; i++) {
        console.log("| " + C[i].join(" ") + " |");
    }
}