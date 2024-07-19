//strict
"use strict";
//opa = "teste";

// try catch


try {
    const soma = x + y
}
catch (error){
    console.log(`Error no programa: ${error}`)
}   

// finally
try {
    const value = checkNumber("asd");
    if(!value){
        throw new Error("Valores Invalidos!")
    }
}catch(error){
    console.log(`opa, aconteceu algum erro: ${error}`)
}finally{
    console.log("o codigo foi executado!")
}

// assertions

function checkArray(arr){
    if (arr.length === 0){
        throw new Error("o array precisa ter elementos")
    }else{
        console.log(`o array  tem ${arr.length} elementos`)
    }
}
checkArray([1,2,4])