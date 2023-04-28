
const botaoTagFrontEnd = document.querySelector("#btnFiltrarLivrosFront")
const botaoTagBackEnd = document.querySelector("#btnFiltrarLivrosBack")
const botaoTagDados = document.querySelector("#btnFiltrarLivrosDados")
let listateste = []

console.log(botaoTagFrontEnd)
botaoTagFrontEnd.addEventListener('click',(e) => {
    console.log(e.target.value) 
    filtrarTags(livros, e.target.value)
})

function filtrarTags(livros, tag) {
    console.log(livros)
    let livrosDesconto = aplicaDescontoLivros(livros)
    const livrosFiltrados = livrosDesconto.filter((livro) => {
        listateste.push(livro.categoria)
        console.log(listateste)
        return livro.categoria === tag
    })
    console.log(livrosFiltrados)
    removerLivrosHTML()
    adicionarLivros(livrosFiltrados)
   
}

function removerLivrosHTML() {
    let nodeRemovidos = elementoSecaoLivros.childNodes
    let constrole = nodeRemovidos.length
    //descobris como deletar pela nodelist foreach
    for ( let i = 2; i <= constrole; i++) {
        let elementosRemovidos = document.querySelector(".livro")
        elementosRemovidos.remove()
        
    }
}