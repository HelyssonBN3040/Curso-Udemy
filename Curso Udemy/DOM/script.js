// mover pelo dom
console.log(document.body)
console.log(document.body.childNodes[1]) //array de elementos
console.log(document.body.childNodes[1].childNodes) //array de elementos
console.log(document.body.childNodes[1].childNodes[1].textContent) //array de elementos

//selecionar elementos expecificos
//getElementByTagName(),getElementById(), querySelector()

// SELECIONANDO POR TAG
const listItems = document.getElementsByTagName("li")
console.log(listItems)

//SELECIONANDO POR ID
const title = document.getElementById("title")
console.log(title)

//SELECIONANDO ELEMENTOS POR CLASSE
const products = document.getElementsByClassName("product")
console.log(products)

//SELECIONANDO OS ELEMENTOS POR CSS
const productsQuery = document.querySelectorAll(".product")
console.log(productsQuery)

const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)

// insert before
const p = document.createElement("p")
console.log(p)
const header = title.parentElement
console.log(header)
header.insertBefore(p, title)

// appendchild

const navLinks = document.querySelector("nav ul")
const li = document.createElement("li")
li.textContent = "ultimo link"

navLinks.appendChild(li)

// replaceChild

const h2 = document.createElement("h2")
h2.textContent = "Meu novo Titulo"
header.replaceChild(h2, title)

//createTextNode
const myText = document.createTextNode("Agora vamos colocar mais um titulo")
const h3 = document.createElement("h3")
h3.appendChild(myText)
mainContainer.appendChild(h3)

const text = document.getElementById("text")

function adicionarTexto() {
    setTimeout(() => {
        text.textContent = "Novo Texto"
        text.style.color ="white"
        text.style.backgroundColor ="green"
    }, 1000)
}
function removerTexto() {
    text.textContent = ""
}
//trabalhando com atributos 
const firstLink = navLinks.querySelector("a")
firstLink.setAttribute("href", "https://www.google.com")
console.log(firstLink)
console.log(firstLink.getAttribute("href"))
firstLink.setAttribute("target", "_blank")

//alterando altura e largura
const footer = document.querySelector("footer")
console.log(footer.offsetHeight)
console.log(footer.offsetWidth)

// posição do elemento
const product1 = products[0]
console.log(product1.getBoundingClientRect())

// ALTERANDO ESTILOS COM JS
//body.style.backgroundColor = "red"
mainContainer.style.color = "red"
//mainContainer.style.backgroundColor = "red"

//alterando estilos de varios elementos
for(const li of listItems){
    li.style.color ="green"
}