// programação assincrona

//setTimeOut()
/* console.log("Ainda nao executou!")

setTimeout(function(){ // bem provavel para utilizar icones de loading
console.log("requisição assincrono!")
}, 2000)

console.log("Ainda nao executou!")

//setInterval()
console.log("ainda nao executou")

//setInterval(function(){ //será executado de tempos em tempos sem pa
//    console.log("Intevalo assincrono")
//}, 3000);

console.log("ainda nao executou")

// Promisses

const promessa = Promise.resolve(5 + 5)
console.log("algum codigo")

promessa.then(value => {
    console.log(`A soma é ${value}!`)
    return value
})
.then((value) => value - 1)
.then((value) => console.log(`agora é ${value}`))

console.log("outro codigo")

//falha na promisse

Promise.resolve(4 * "asd")
.then((n) =>{
    if(Number.isNaN(n)){
        throw new Error("Valores Invalidos!")
    }
})
.catch((err) => console.log(`Um erro ocorreu: ${err}`)) */

//rejeição

/* function checkNumber(n){
    return new Promise((resolve, reject) => {
        if(n> 10){
            resolve(`o numero é maior que 10!`)
        }else{
            reject(new Error("Numero muito baixo"))
        }
    })
}

 const a = checkNumber(20)
 const b = checkNumber(10)

 a.then((v)=>console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu: ${err}`))
 b.then((v)=>console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu: ${err}`))

// varias Promisses

const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(10)
    }, 1000)
})

const p2 = Promise.resolve(10  + 10)

const p3 = new Promise((resolve, reject) => {
    if(30 > 10){
        resolve(40)
    }else{
        reject(("Erro!"))
    }
})

Promise.all([p1,p2,p3]).then((values) => console.log(values))

 */
// async functions

async function somarComDelay(a, b){
    return a + b
}
somarComDelay(2, 5).then((value)=>{
    console.log(`o valor da soma é: ${value}`)
})

console.log("teste async")


//async await

function resolveComDelay(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resolveu a Promise")
        }, 2000)
    })
}

async function chamadaAsync(){
    console.log("Chamando a Promise, e esperando o resultado")
    const result = await resolveComDelay()
    console.log(`o resultado chegou: ${result}`)
}

chamadaAsync()


// generators

function* generator(){
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)