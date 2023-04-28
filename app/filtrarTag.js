
const botaoTagFrontEnd = document.querySelector("#btnFiltrarLivrosFront")
const botaoTagBackEnd = document.querySelector("#btnFiltrarLivrosBack")
const botaoTagDados = document.querySelector("#btnFiltrarLivrosDados")
const botaoTagQuantidade = document.querySelector("#btnLivrosDisponiveis")

const botoes = document.querySelectorAll('.btn')
botoes.forEach((b) => b.addEventListener('click', (e) => {
    filtrarTags(livros, e)
} ))

// primeira versão dos botoes
// botaoTagFrontEnd.addEventListener('click',(e) => {
//     console.log(e.target.value) 
//     filtrarTags(livros, e.target.value)
// })

// botaoTagBackEnd.addEventListener('click',(e) => {
//     console.log(e.target.value) 
//     filtrarTags(livros, e.target.value)
// })

// botaoTagDados.addEventListener('click',(e) => {
//     console.log(e.target.value) 
//     filtrarTags(livros, e.target.value)
// })

// botaoTagQuantidade.addEventListener('click',(e) => {
//     console.log(e.target.value)     
//     filtrarTags(livros, e.target.value)
// })

function filtrarTags(livros, evento) {
    let tagCategoria = evento.target.value
    let livrosDesconto = aplicaDescontoLivros(livros)
    let listaLivrosAtualizada = livrosDesconto
    console.log(0, listaLivrosAtualizada)
    let textoBotoesTags = evento.target.innerText
    
    const livrosFiltrados = livrosDesconto.filter((livro) => {
        return livro.categoria === tagCategoria
    })
    removerLivrosHTML()
    adicionarLivros(livrosFiltrados) 
    listaLivrosAtualizada = livrosFiltrados
    console.log(1, listaLivrosAtualizada)
    
    if (textoBotoesTags === "LIVROS DISPONÍVEIS") {
        let livrosFiltradosQuantidade = livrosDesconto.filter((livro) => {
            return livro.quantidade > 0
        })
        removerLivrosHTML()
        adicionarLivros(livrosFiltradosQuantidade)
        listaLivrosAtualizada = livrosFiltradosQuantidade 
        console.log(2, listaLivrosAtualizada)
    }else if( textoBotoesTags === "ORDENAR POR PREÇO") {
        console.log(3, livros)
        organizarPreco(livrosDesconto)
    }
}

function removerLivrosHTML() {
    //forma de apagar e refazer todo filtro
    //elementoSecaoLivros.innerHTML = ""
    let listaElementosRemovidos = document.querySelectorAll(".livro")
    //let nodeRemovidos = elementoSecaoLivros.childNodes
    
    listaElementosRemovidos.forEach((livro) => {
        let elementoRemovido = document.querySelector(".livro")
        elementoRemovido.remove()
    })
}

//os filtros não está sendo agregador
function organizarPreco(livros) {
    let livrosFiltradosPreco = livros.sort((a,b) => a.preco - b.preco)
    removerLivrosHTML()
    adicionarLivros(livrosFiltradosPreco)
}