const botones = document.querySelectorAll('.button');
const inputs = document.querySelector('.inputs');
const signs = document.querySelectorAll('.digit');
const result = document.querySelector('.result');


let lista = [];
let arrayResult = [];

function equals(){
    let deleted = inputs.textContent.slice(0, -1);
    inputs.textContent = deleted;
    let operation = arrayResult.slice(-1)[0];

    lastNumber = Number(lista.join(''));
    arrayResult.push(lastNumber);
    num1 = arrayResult[0];
    num2 = arrayResult.slice(-1)[0];
    arrayResult = [];
    
    if(operation == "+"){
        let resultado = num1 + num2;
        result.textContent = resultado;
        arrayResult.push(resultado);
    }else if(operation == "-"){
        let resultado = num1 - num2;
        result.textContent = resultado;
        arrayResult.push(resultado);
    }else if(operation == 'x'){
        let resultado = num1 * num2;
        result.textContent = resultado;
        arrayResult.push(resultado);
    }else if(operation == "÷"){
        let resultado = num1 / num2;
        result.textContent = resultado;
        arrayResult.push(resultado);
    }
}

function moresOps(pushed){
    number = Number(lista.join(''));
    arrayResult.push(number);
    arrayResult.push(pushed);
    lista = [];
    
    console.log('arrayResult',arrayResult);
    console.log('lista', lista);
}

function checkOp(pushed){
    inputs.textContent += pushed;
    console.log(pushed);

    if(pushed == "+" || pushed == "-"||pushed =="x"||pushed =="÷" ){
        if((pushed != lista.slice(-1)[0]) && (arrayResult.length >= 2) && (lista.length == 1)){
            equals();
            moresOps(pushed)
            inputs.textContent += pushed
        }else if(pushed !== lista.slice(-1)[0]){
            moresOps(pushed);

        }
    }else if(pushed == "C"){
        inputs.textContent = '';
        result.textContent = '';
        lista = [];
        arrayResult = [];
    }else if(pushed =="del"|| pushed == "+/-"|| pushed == "%" ){
        return;
    }else if(pushed == "="){
        equals()
    }else{
        lista.push(pushed)
        console.log(lista)
    }
}

botones.forEach(boton => boton.addEventListener('click', ()=>{
    let pushed = boton.textContent;
    if(lista.length == 0){
        if(pushed =="="||pushed =="+"||pushed =="÷"||pushed =="del"||pushed =="+/-"||pushed =="x"||pushed =="%"){
            return;
        }else{
            checkOp(pushed);
        }
    }else{
        checkOp(pushed)
    }
   
}));


    

    /*
     if(pushed =="="||pushed =="+"||pushed =="÷"||pushed =="del"||pushed =="+/-"||pushed =="x"||pushed =="%"||pushed =="C"){
        if(lista.length==0){
            return;
        }
    }else{
        checkOp(pushed);
    }




    number = Number(lista.join(''));
        result.textContent = number;
        arrayResult.push(number);
        arrayResult.push(pushed);
        console.log(arrayResult)
        lista = [];
        console.log(lista)
    */

    /*
function sumaSign(pushed){
    inputs.textContent += pushed;
            console.log(pushed)
            number = Number(lista.join(''));
            result.textContent = number;
            arrayResult.push(number);
            arrayResult.push('+');
            console.log(arrayResult)
            lista = [];
            
            console.log(lista)
}
*/

/*
function multiplySing(pushed){
    inputs.textContent += pushed;
    console.log(pushed);
    number = Number(lista.join(''));
    result.textContent = number;
    
    console.log(arrayResult)
    lista = [];
    console.log(lista)
}
*/