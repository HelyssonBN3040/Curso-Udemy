const animal ={
    name: "bob",
    latir: function() {
        console.log("au au")
    }
}
 console.log(animal.name)
 animal.latir()

//apredenddo metodos
 const pessoa ={
    nome: "Helysson",
    getNome: function (){
        return this.nome
    },
    setNome: function(novoNome){
        this.nome = novoNome;
    }
 }

 console.log(pessoa.nome)
 console.log(pessoa.getNome())
 pessoa.setNome("Joao")
 console.log(pessoa.getNome())


// prototype
 const text = "asd"
 console.log(Object.getPrototypeOf(text))

 const cachorro ={
    raca: null,
    patas: 4
 }

 const pastorAlemao = Object.create(cachorro)

 pastorAlemao.raca = "Pastor Alemão"

 console.log(pastorAlemao)
 console.log(pastorAlemao.patas)

 const bulldog = Object.create(cachorro)

 bulldog.raca = "bulldog"

 console.log(bulldog)

 //função com classe

 function criaCachorro (nome, raca){
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
 }

 const bob = criaCachorro("bob", "vira Lata")
 console.log(bob)

 const akira = criaCachorro("Akira", "Husky")
 console.log(akira)
 console.log(Object.getPrototypeOf(akira))

// funções como classes

function Cachorro( nome, raca){
    this.nome = nome
    this.raca = raca
}
 const husky = new Cachorro("ozzy", "Husky" )

console.log(husky)

//metodos na função

Cachorro.prototype.uivar = function(){
    console.log("Auuuuuuuuuu!")
}

husky.uivar()


// classes ES6

class CachorroClasse{
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }
}

const Fred = new CachorroClasse("Fred", "Labrador")

console.log(Fred)

// mais sobre calsses no ES6

class Caminhao {
    constructor(eixos, cor){
        this.eixos = eixos
        this.cor = cor
    }
    descreverCaminhao(){
        console.log(`Este Caminhão tem ${this.eixos} eixos e é da cor ${this.cor}!`)
    }
}

const scania  = new Caminhao(6, "Azul")
console.log(scania)
scania.descreverCaminhao()

Caminhao.motor = 4
const c2 = new Caminhao(4, "preta")

console.log(c2)
console.log(c2.motor)
Caminhao.prototype.motor = 4.0
console.log(c2.motor)

const CaminhaoNew = Object.getPrototypeOf(c2)

console.log(CaminhaoNew)

// override

class Humano {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade
    }
}
const helysson = new Humano("Helysson", 22)
console.log(helysson)
console.log(Humano.prototype.idade)

Humano.prototype.idade = "Não definida!"
console.log(helysson.idade)
console.log(Humano.prototype.idade)

//get e set

class Post {
    constructor(titulo, descricao, tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags - tags
    }
    get exibirTitulo(){
        return `Voce esta lendo ${this.titulo}`
    }
    set adicionarTags(tags){
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}
const myPost = new Post("algum post", "é um post sobre programação")

console.log(myPost)
console.log(myPost.exibirTitulo)
myPost.adicionarTags = "programação, javascript, js"
console.log(myPost)

// herança
class Mamifero {
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome){
        super(patas , patas) //super que faz herança da classe pai
        this.nome = nome
    }
}
const Shark = new Lobo(4, "Shark")
console.log(Shark)
console.log(Shark.patas)

// operador instaceof 
console.log(Shark instanceof Lobo)