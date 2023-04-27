function aplicaDescontoLivros(livros) {
    let desconto = 0.3
    let livrosPromocao = livros.map((livro)=> {
        return {...livro, preco: livro.preco - (livro.preco*desconto)}
    })
    return livrosPromocao
}