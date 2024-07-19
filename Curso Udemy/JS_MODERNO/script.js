var x = 12
var y = 45
if (y > 10){
    var x = 5
    console.log(x)
}

console.log(x)
//let sobrescreve
// let a = 10
// let b = 15

// if( b > 10){
//     let a = 5
//     console.log(a)
// }
// console.log(a)
// const 
const name = "helysson"

function nameIndex(){
    const name = "joao"
    console.log(name)
}
nameIndex()
console.log(name)

// arrow functions
const soma = function(a, b){
    return a+ b
}

const arrowSoma = (a , b) => a + b

console.log(soma(10,2))

console.log(arrowSoma(5,5))

const greeting = (name) => {
    if(name){
        return `Hello, ${name}!`
    }else{
        return `Hello!`
    }
}
console.log(greeting())
console.log(greeting("Helysson"))

const user = {
    name: "Helysson",
    sayUserName(){
        setTimeout( function(){
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 1000)
    },
    sayUserNameArrow () {
        setTimeout(() => {
           console.log(this) 
           console.log(`Username: ${this.name}`) 
        }, 2000)
    } 
}

user.sayUserName()
user.sayUserNameArrow()

// filter - utilizado pra realizar o filtro de dados
 const arr = [1,2,3,4,5,6,7]

 const highNumbers = arr.filter((n) => {
    if(n >= 3){
        return n
    }
 })

 console.log(highNumbers)

 const users = [
    {name: "Helysson", available: true},
    {name: "Joao", available: false},
    {name: "Maria", available: true},
    {name: "josias", available: false},
    {name: "ana", available: false},
 ]

 const availableUsers = users.filter((user) => user.available == false)
 console.log(availableUsers)


// map = utilizado para modificar o array de origem
const products = [
    {name: "Camisa", price: 34, category: "Roupas"},
    {name: "Fogão", price: 100, category: "Eletro"},
    {name: "Chaleira", price: 55, category: "Eletro"},
    {name: "Calça Jeans", price: 120, category: "Roupas"},
    {name: "Bermuda", price: 20.55, category: "Roupas"}
]

products.map((products) => {
    if(products.category == "Roupas"){
        products.onSale = true
    }
})

console.log(products)


// template literals
const username = "helysson"
const age = 22

console.log(`Olá ${username}, vc tem ${age} anos.`)

// destructuring
const fruits = ["Maçã", "Banana", "Uva"]

const [f1, f2, f3] = fruits

console.log(f1)
console.log(f2)

console.log(f3)


const productsInfo = {
    name: "Teclado",
    price: 120.25,
    category: "Periferico",
    color: "Preta"
}

const {name:productName, price:productPrice, category:productCategory, color:productColor} = productsInfo

console.log(`O nome do produto é ${productName}, o seu valor é R$${productPrice} da cor ${productColor}.`)

// spread operator = utilizado para mesclar arrays ou objetos de apis
const fruits2 = ["Maçã", "Banana", "Uva"]
const fruits3 = ["Morango", "Abacaxi"]

const allFruits = [...fruits2, ...fruits3]
console.log(allFruits)

const a = [1,2,3]
const b = [4,5,6]

const c = [0,...a,...b,7]
const d = [...a,...a]
console.log(c)
console.log(d)


const carName = {name:"Gol"}
const carPrice = {price: 23.000}
const carColor = {color:"Azul"}

const car = {...carName, ...carPrice, ...carColor}

console.log(car)

// classes 
class Products {
    constructor(name, price){
        this.name = name
        this.price = price
    }
    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Products("Camisa gola V", 20)
console.log(shirt)
console.log(shirt.productWithDiscount(10))

// Herança

class ProductWithAttributes extends Products{
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }
    showColors(){
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color)
        });
    }
}

const hat = new ProductWithAttributes("Chapeu", 29.99, ["Preto", "verde", "Azul"])

console.log(hat)
console.log(hat.name)