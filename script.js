// passos para na hora que escolher a opcao fazer o calculo
function opc(){

    let select = document.querySelector('#escolherOpcao');

    let value = select.options[select.selectedIndex].value;
    console.log(value);


    // somar
    if (value == 's') {
        console.log('Estou somando.')
        somar();
        console.log(somar());
    }
    
    // Subtrair
    if (value == 'sub') {
        console.log('Estou subtraindo.')
        subtrair();
        console.log(subtrair());
    }
    

    // Multiplicar
    if (value == 'm') {
        console.log('Estou multiplicando.')
        multiplicar();
        console.log(multiplicar());
    }


    // Dividir
    if (value == 'd') {
        console.log('Estou multiplicando.')
        dividir();
        console.log(dividir());
    }

}

// somar

function somar(){
   
    var numberA = document.querySelector('#numero-a').value;  
    var numberB = document.querySelector('#numero-b').value;
    var total = parseFloat(numberA) + parseFloat(numberB);
    var mostrarResultado = document.getElementById('resultado').value = total;
    mostrarResultado;     
    console.log('total=',numberA,'+',numberB,'=', mostrarResultado);  
} 


// subtrair

function subtrair(){
    var numberA = document.querySelector('#numero-a').value;
    var numberB = document.querySelector('#numero-b').value;
    var total = parseFloat(numberA) - parseFloat(numberB);
    var mostrarResultado = document.querySelector('#resultado').value = total;
    mostrarResultado;
    console.log('total=',numberA,'-',numberB,'=', mostrarResultado);  
}

// multiplicar

function multiplicar(){
    var numberA = document.querySelector('#numero-a').value;
    var numberB = document.querySelector('#numero-b').value;
    var total = parseFloat(numberA) * parseFloat(numberB);
    var mostrarResultado = document.querySelector('#resultado').value = total;
    mostrarResultado;
    console.log('total=',numberA,'*',numberB,'=', mostrarResultado); 
}

function dividir(){
    var numberA = document.querySelector('#numero-a').value;
    var numberB = document.querySelector('#numero-b').value;
    var total = parseFloat(numberA) / parseFloat(numberB);
    var mostrarResultado = document.querySelector('#resultado').value = total;
    mostrarResultado;
    console.log('total=',numberA,'/',numberB,'=', mostrarResultado);  
}


// Quando clicar no botão calcular a div vai aparecer.

var btnCalcular = document.querySelector('.button__calc');
var container = document.querySelector('.show-or-hide');

btnCalcular.addEventListener('click', function(){

    if(container.style.display === 'block'){
        container.style.display = 'none';
    }else {
        container.style.display = 'block';
    }

});

// Quando clicar no botao limpar o campo some

var btnLimpar = document.querySelector('.large-button');
var containerCalc = document.querySelector('.show-or-hide');

btnLimpar.addEventListener('click', function(){
    if(containerCalc.style.display = 'block'){
        containerCalc.style = 'none';
    }
});