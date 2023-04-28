//requisitar dados json ok
//criar o html pelo js tribuir os dados á estrutura
// criar funcionalidade de desconto
// criar funcionalidade de filtro


let livros = []
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosAPI()

async function getBuscarLivrosAPI() {
    const res = await fetch(endPointAPI)
    livros = await res.json() 
    
    //versão 2
    
    let livrosDesconto = aplicaDescontoLivros(livros)
    adicionarLivros(livrosDesconto)

    // versão 1
    //livros.forEach(e => { criarDivLivro(e.imagem, e.alt, e.titulo, e.preco, e.categoria) })
}

// function criarDivLivro(srcImg, altImg, titulo, autor, preco, categoria) {

//     const elementoDiv = document.createElement('div')
//     elementoDiv.classList.add("livro")
    
//     const elementoImg = document.createElement('img')
//     elementoImg.classList.add("livro_imagens")
//     let srcAttributeImg = document.createAttribute("src")
//     srcAttributeImg.value = srcImg
//     elementoImg.setAttributeNode(srcAttributeImg)
//     let altAttributeIMG = document.createAttribute("alt")
//     altAttributeIMG.value = altImg
//     elementoImg.setAttributeNode(altAttributeIMG)
    
//     const elementoTitulo = document.createElement('h2')
//     elementoTitulo.classList.add('livro_titulo')
//     elementoTitulo.innerText = titulo

//     const elementoDescricao = document.createElement('p')
//     elementoDescricao.classList.add('livro_descricao')
//     elementoDescricao.innerText = autor
    
//     const elementoPreco = document.createElement('p')
//     elementoPreco.classList.add('livro_preco')
//     let idAttributePreco = document.createAttribute('id')
//     idAttributePreco.value = preco
//     elementoPreco.setAttributeNode(idAttributePreco)
//     elementoPreco.innerText = preco

//     const elemntoGrupoTags = document.createElement('div')
//     elemntoGrupoTags.classList.add("tags")

//     const elementoTag = document.createElement('span')
//     elementoTag.classList.add("tag")
//     elementoTag.innerText = categoria

//     elemntoGrupoTags.append(elementoTag)
//     elementoDiv.append(elementoImg, elementoTitulo, elementoPreco, elementoPreco, elemntoGrupoTags)
    
//     let elementoSecaoLivros = document.getElementById("livros")
//     elementoSecaoLivros.append(elementoDiv)
   
// }