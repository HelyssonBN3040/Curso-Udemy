console.log("hello world!")
num = 1.5
console.log(num)
console.log(typeof num)
console.log(1+(4*(2/2)))

sobrenome = "Cavalcante"
//console.log(nome +" "+ sobrenome)

//interpolação 
//console.log(`Olá, ${nome}, vc tem ${11+11} anos!`)
//const value = prompt("digite um numero: ")
//console.log(value)
//const nome = prompt("Digite o seu nome: ")
//const idade = prompt("Digite a sua idade: ")
//if(idade >= 18){
//    console.log(`Olá, ${nome} vc é maior de idade, e vc pode passar!`)
//}else{
//    console.log(`olá, ${nome}, vc tem ${idade} anos, vc não pode passar`)
//}

const lista = [1,2,3,4,5,6]

console.log(Math.max(1,4,67,34,1234,45,3654))
console.log(typeof lista)

//objeto
const pessoa ={
    name: "helysson",
    age:22
}


const users = ["Helysson", "Mabyle", "Adriano", "João", "Pedro"]

for (let i = 0; i< users.length; i++){
    console.log(`Listando usuarios ${users[i]}`)
}

const p = document.createElement("h1")

//trim()    
const trimTest = "  testando \n";
console.log(trimTest)
console.log(trimTest.trim())
console.log(trimTest.length)
console.log(trimTest.trim().length)

//padstart

 const testePadstart = "1"
 const newNumber = testePadstart.padStart(4, "0")
 console.log(testePadstart)
 console.log(newNumber)
 const TestePadend = newNumber.padEnd(10, "0")
 console.log(TestePadend)

 //metodo split

 const frase = "o rato roeu a roupa do rei de roma"

 const arrayFrase = frase.split(" ")
 console.log(arrayFrase)


// METODO JOIN 
const uniao = arrayFrase.join(" ")
console.log(uniao)

const newLista = ["mouse", "teclado", "monitor"]

const newFrase = `lista do que comprar: ${newLista.join(", ")}`

console.log(newFrase)

//repeat 

const newPalavra = "frase \n"

console.log(newPalavra.repeat(5))

//rest operator

const somaInfinita= (...args) =>{
    let total = 0
    for(let i = 0; i< args.length; i++){
        total += args[i]
    }
    return total
}

console.log(somaInfinita(1,2,4,5,6,3))

//for of
const somaInfinita2 = (...args) => {
    let total = 0
    for(num of args){
        total += num
    }
    return total
}
console.log(somaInfinita2(3,122,4,5))

//json
const myJson = '{"name": "Helysson", "age":31, "skills":["php", "js", "python"]}'

const myObject = JSON.parse(myJson)

console.log(myObject)
console.log(myObject.name)
console.log(typeof  myObject)