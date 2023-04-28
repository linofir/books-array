
const botaoTagFrontEnd = document.querySelector("#btnFiltrarLivrosFront")
const botaoTagBackEnd = document.querySelector("#btnFiltrarLivrosBack")
const botaoTagDados = document.querySelector("#btnFiltrarLivrosDados")

botaoTagFrontEnd.addEventListener('click',(e) => {
    console.log(e.target.value) 
    filtrarTags(livros, e.target.value)
})

botaoTagBackEnd.addEventListener('click',(e) => {
    console.log(e.target.value) 
    filtrarTags(livros, e.target.value)
})

botaoTagDados.addEventListener('click',(e) => {
    console.log(e.target.value) 
    filtrarTags(livros, e.target.value)
})
function filtrarTags(livros, tag) {
    let livrosDesconto = aplicaDescontoLivros(livros)
    const livrosFiltrados = livrosDesconto.filter((livro) => {
        return livro.categoria === tag
    })
    removerLivrosHTML()
    adicionarLivros(livrosFiltrados) 
}

function removerLivrosHTML() {
    let listaElementosRemovidos = document.querySelectorAll(".livro")
    let nodeRemovidos = elementoSecaoLivros.childNodes
    let constrole = nodeRemovidos.length
    //descobris como deletar pela nodelist foreach
    listaElementosRemovidos.forEach((livro) => {
        let elementoRemovido = document.querySelector(".livro")
        elementoRemovido.remove()
    })
    // for ( let i = 2; i <= constrole; i++) {
    //     let elementoRemovido = document.querySelector(".livro")
    //     elementoRemovido.remove()
    // }
}