"use strict";
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers);
numbers.pop();
console.log(numbers);
let nomes = ["Helysson", "Mabyle"];
nomes.push("Adriano");
console.log(nomes);
// 2 - outra syntax array
const num = [100, 200];
num.push(3);
console.log(num);
// 3 - any
const arri = [1, "test", true, [], { nome: "Helysson" }];
console.log(arri);
arri.push([1, 2, 3]);
console.log(arri);
// 4 - funções em Typescript
function minhaFuncao(nome) {
    console.log(nome);
}
minhaFuncao("Helysson");
function minhaFuncao2(a, b) {
    console.log(a + b);
}
minhaFuncao2(1, 2);
// retorno de função em conjunto
function minhaFuncao3(name) {
    return `Olá ${name}`;
}
console.log(minhaFuncao3("Matheus"));
// 6 - funções anonimas em typescript
setTimeout(function () {
    const salary = 1000;
    // console.log(parseFloat(salary))
    console.log(salary);
}, 2000);
//  7 - tipos de Objetos
function passCoordinates(coord) {
    console.log("Coordenada - x: " + coord.x);
    console.log("Coordenada - Y: " + coord.y);
}
const objCoord = { x: 329, y: 210 };
// pegando da variavel
passCoordinates(objCoord);
// inserindo o valor
passCoordinates({ x: 210, y: 321 });
const pessoaObjt = { nome: "Helysoon", sobrenome: "Cavalcante" };
console.log(pessoaObjt);
// 8 - props opcionais
// usando a ? deixa como opcional inserir o valor
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    // para ão ficar undefined
    if (c) {
        console.log("C: " + c);
    }
    console.log(" ");
}
showNumbers(1, 2, 3);
showNumbers(1, 3);
// showNumbers(1) //2-3 argumentos eram esperados, mas 1 foi obtido
// 9 - validações de props
function advancedGreeting(firstname, lastname) {
    if (lastname !== undefined) {
        return `Olá, ${firstname} ${lastname}, tudo bem com vc?`;
    }
    return `Olá, ${firstname}, tudo bem com vc?`;
}
console.log(advancedGreeting("Helysson", "Cavalcante"));
console.log(advancedGreeting("Helysson"));
//  10 - union types --- união de tipos
function showBalance(balance) {
    console.log("Seu saldo é: " + balance);
}
showBalance(500);
showBalance("300");
const arr2 = ["Helysson", 3, true];
console.log(arr2);
function nameAge(nome, age) {
    return `Olá ${nome}, vc tem ${age} anos!`;
}
console.log(nameAge("Helysson", 23));
console.log(nameAge("Mabyle", "21"));
//  11 - avaçando com union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return "Usuario não aprovado";
    }
    return `A função do usuario é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(100);
showId("200");
function showCoords(obj) {
    console.log(`X: ${obj.x}, Y: ${obj.y},Z: ${obj.z}`);
}
const showPonits = {
    x: 10,
    y: 23,
    z: 34
};
showCoords(showPonits);
const funcPerson = (per) => {
    console.log(`Olá ${per.name}, vc tem ${per.age} anos!`);
};
const personCarac = { name: "Helysson", age: 23 };
funcPerson(personCarac);
const somePerson = { name: "Helysson", age: 12 };
console.log(somePerson);
const somePerson2 = { name: "Helysson" };
console.log(somePerson2);
// 15 - literal types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("center");
showDirection("right");
showDirection("top");
//  16 - non null assertion operators
const p = document.getElementById("some-pe");
console.log(p.innerText);
// 17 - bigint
let n;
// n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(10000n + n);
// 18 - symbol
let symbolA = Symbol("a");
let symbolB = Symbol("b");
console.log(typeof symbolA);
console.log(symbolA === symbolB);
