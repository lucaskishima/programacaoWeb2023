let produtos = Array();


function adicionar_produto(id, nome, quantidade) {
    let produto = {
        id: id,
        nome: nome,
        quantidade: quantidade
    };
    produtos.push(produto);

    return produto;
}

function listar_produtos() {
    return produtos;
}

function editar_produto(id, quantidadeAtual) {
    let pEditado;
    produtos.forEach(p => {
        if(p.id == id){
            p.quantidade = quantidadeAtual;
        }
        pEditado = p;
    });
    return pEditado;
}

function remover_produto(id) {
    produtos = produtos.filter((p) => {
        return p.id != id
    })
    return {};
}

module.exports = {
    adicionar_produto,
    listar_produtos,
    editar_produto,
    remover_produto
}