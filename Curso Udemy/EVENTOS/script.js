// adicionando eventos
const button = document.querySelector("#my-button")
button.addEventListener("click", () => {
    console.log("clicou!")
})
//removendo evento
const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("teste")
}

secondBtn.addEventListener("click", imprimirMensagem)

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
    console.log("evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

//arguemnto de evento

const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (e) => {
    console.log(e)
    console.log(e.offsetx)
    console.log(e.pointerType)
    console.log(e.target)
})

//propagação
const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("EVENTO 1")
})
btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("evento 2")
})
// remoção de eventos padrões
const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("nao alterou a pagina!")
})
// eventos de tecla do teclado

document.addEventListener("keyup", (e) => {
    console.log(`soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => {
    console.log(`soltou a tecla ${e.key}`)
})

// eventos de mouse
const mouse = document.querySelector("#mouse")

mouse.addEventListener("mousedown", () => {
    console.log('clicou com o mouse')
})
mouse.addEventListener("mouseup", () => {
    console.log('pressionou o click do mouse')
})
mouse.addEventListener("dblclick", () => { // dblclick = double click
    console.log('click duplo')
})

//movimento do mouse

// document.addEventListener("mousemove", (e) => {
//     console.log(`no eixo X: ${e.x}`)
//     console.log(`no eixo Y: ${e.y}`)
// })

// evento de scroll

window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 200) {
        console.log("passamos de 200px")
    }
})

// eventos de focus

const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => {
    console.log("entrou no input")
})
input.addEventListener("blur", (e) => {
    console.log("saiu do input")
})

// evento de carregamento

window.addEventListener("load", () => {
    console.log("A pagina carregou!")
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault()
    e.returnValue = ""
})

// debounce

const debounce = (f, delay) => {
    let timeout

    return (...arguments) => {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)
    }
}

window.addEventListener("mousemove", debounce(() => {
    console.log("executando a cada 400ms")
}, 400)
)