//requisitar dados json ok
//criar o html pelo js tribuir os dados á estrutura


let livros = []

const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosAPI()

async function getBuscarLivrosAPI() {
    const res = await fetch(endPointAPI)
    livros = await res.json()

    return livros
}
console.log(livros)
Promise.all(livros).then(livros.forEach(e => { console.log(e.imagem, e.alt, e.titulo, e.preco, e.categoria) }))




//console.log(criarDivLivro("https://caelum-online-public.s3.amazonaws.com/2628-js/Vue.js.png", "testg", "autortteste", "55,89", "front" ))

function criarDivLivro(srcImg, altImg, titulo, autor, preco, categoria) {

    const elemntoDiv = document.createAttribute('div')
    elemntoDiv.classList.add("livro")
    
    const elemntoImg = document.createAttribute('img')
    elemntoImg.classList.add("livro_imagens")
    const srcAttributeImg = document.createAttribute("src")
    srcAttributeImg = srcImg
    elemntoImg.setAttributeNode(srcAttributeImg)
    const altAttributeIMG = document.createAttribute("alt")
    altAttributeIMG = altImg
    elemntoImg.setAttributeNode(altAttributeIMG)
    
    const elemntoTitulo = document.createAttribute('h2')
    elemntoTitulo.classList.add('livro_titulo')
    elemntoTitulo.innerText = titulo

    const elemntoDescricao = document.createAttribute('p')
    elemntoDescricao.classList.add('livro_descricao')
    elemntoDescricao.innerText = autor
    
    const elemntoPreco = document.createAttribute('p')
    elemntoDescricao.classList.add('livro_preco')
    const idAttributePreco = document.createAttribute('id')
    idAttributePreco = 'preco'
    elemntoPreco.setAttributeNode(idAttributePreco)
    elemntoDescricao.innerText = preco

    const elemntoGrupoTags = document.createAttribute('div')
    elemntoGrupoTags.classList.add("tags")

    const elemntoTag = document.createAttribute('span')
    elemntoTag.classList.add("tag")
    elemntoTag.innerText = categoria

    elemntoGrupoTags.append(elemntoTag)
    elemntoDiv.append(elemntoImg, elemntoTitulo, elemntoDescricao, elemntoPreco, elemntoGrupoTags)
    console.log(elemntoDiv)
}


/* <div class="livro">
      <img class="livro__imagens" src="imagens/Vue.js.png" alt="Capa do livro  Vue.js
          Construa aplicações incríveis" />
      <h2 class="livro__titulo">
        Vue.js
        Construa aplicações incríveis
      </h2>
      <p class="livro__descricao">Caio Incau</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
        <span class="tag">Back-end</span>
    </div>  */