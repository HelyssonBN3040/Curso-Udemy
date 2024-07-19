let numbers: number[] = [1, 2, 3]

numbers.push(5)
console.log(numbers)

numbers.pop()
console.log(numbers)


let nomes: string[] = ["Helysson", "Mabyle"]

nomes.push("Adriano")

console.log(nomes)

// 2 - outra syntax array

const num: Array<number> = [100, 200]
num.push(3)
console.log(num)


// 3 - any

const arri: any = [1, "test", true, [], { nome: "Helysson" }]
console.log(arri)

arri.push([1, 2, 3])
console.log(arri)


// 4 - funções em Typescript

function minhaFuncao(nome: string) {
    console.log(nome)
}
minhaFuncao("Helysson")

function minhaFuncao2(a: number, b: number) {
    console.log(a + b)
}
minhaFuncao2(1, 2)

// retorno de função em conjunto
function minhaFuncao3(name: string): string {
    return `Olá ${name}`
}
console.log(minhaFuncao3("Matheus"))


// 6 - funções anonimas em typescript

setTimeout(function () {
    const salary: number = 1000
    // console.log(parseFloat(salary))
    console.log(salary)
}, 2000)


//  7 - tipos de Objetos
function passCoordinates(coord: { x: number, y: number }) {
    console.log("Coordenada - x: " + coord.x)
    console.log("Coordenada - Y: " + coord.y)
}

const objCoord = { x: 329, y: 210 }

// pegando da variavel
passCoordinates(objCoord)

// inserindo o valor
passCoordinates({ x: 210, y: 321 })

const pessoaObjt: { nome: string, sobrenome: string } = { nome: "Helysoon", sobrenome: "Cavalcante" }

console.log(pessoaObjt)


// 8 - props opcionais

// usando a ? deixa como opcional inserir o valor
function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    // para ão ficar undefined
    if (c) {
        console.log("C: " + c)
    }
    console.log(" ")
}

showNumbers(1, 2, 3)
showNumbers(1, 3)
// showNumbers(1) //2-3 argumentos eram esperados, mas 1 foi obtido


// 9 - validações de props

function advancedGreeting(firstname: string, lastname?: string) {
    if (lastname !== undefined) {
        return `Olá, ${firstname} ${lastname}, tudo bem com vc?`
    }

    return `Olá, ${firstname}, tudo bem com vc?`
}

console.log(advancedGreeting("Helysson", "Cavalcante"))
console.log(advancedGreeting("Helysson"))

//  10 - union types --- união de tipos

function showBalance(balance: string | number) {
    console.log("Seu saldo é: " + balance)
}

showBalance(500)
showBalance("300")

const arr2: Array<number | string | boolean> = ["Helysson", 3, true]

console.log(arr2)

function nameAge(nome: string, age: string | number) {
    return `Olá ${nome}, vc tem ${age} anos!`
}

console.log(nameAge("Helysson", 23))
console.log(nameAge("Mabyle", "21"))


//  11 - avaçando com union types

function showUserRole(role: boolean | string) {
    if (typeof role === 'boolean') {
        return "Usuario não aprovado"
    }
    return `A função do usuario é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

//12 - type alias
type ID = string | number
function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}

showId(100)
showId("200")


// 13 - introdução a interfaces
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x}, Y: ${obj.y},Z: ${obj.z}`)
}
const showPonits: Point = {
    x: 10,
    y: 23,
    z: 34
}

showCoords(showPonits)

// 14 - interface x type alias

interface Person {
    name: string
}

interface Person {
    age?: number
}

const funcPerson = (per: Person) => {
    console.log(`Olá ${per.name}, vc tem ${per.age} anos!`)
}

const personCarac: Person = { name: "Helysson", age: 23 }

funcPerson(personCarac)

const somePerson: Person = { name: "Helysson", age: 12 }
console.log(somePerson)

const somePerson2: Person = { name: "Helysson" }
console.log(somePerson2)

// 15 - literal types
let test: "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "top" | "right" | "center") {
    console.log(`A direção é: ${direction}`)
}

showDirection("center")
showDirection("right")
showDirection("top")


//  16 - non null assertion operators

const p = document.getElementById("some-pe")

console.log(p!.innerText)


// 17 - bigint

let n: bigint

// n = 1
n = 1000n
console.log(n)

console.log(typeof n)

console.log(10000n + n)

// 18 - symbol

let symbolA:symbol = Symbol("a")
let symbolB = Symbol("b")

console.log(typeof symbolA)
console.log(symbolA === symbolB)












