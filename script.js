function somar(){
    var numberA = document.querySelector('#numero-a').value;  
    var numberB = document.querySelector('#numero-b').value;
    var total = parseFloat(numberA) + parseFloat(numberB);
    var mostrarResultado = document.getElementById('resultado').value = total;
    mostrarResultado;     
    console.log(mostrarResultado);    

} 


function multiplicar(){
    var numberA = document.getElementById('numero-a').value;
    var numberB = document.getElementById('number-b').value;
    var total = parseInt(numberA * numberB).value = total;
    console.log(total);
}

// Quando clicar no botão calcular e div vai aparecer.

var btnCalcular = document.querySelector('.button__calc');
var container = document.querySelector('.show-or-hide');

btnCalcular.addEventListener('click', function(){

    if(container.style.display === 'block'){
        container.style.display = 'none';
    }else {
        container.style.display = 'block';
    }

});

// Quando limpar clicar no botao limprar o campo some

var btnLimpar = document.querySelector('.large-button');
var containerCalc = document.querySelector('.show-or-hide');

btnLimpar.addEventListener('click', function(){
    if(containerCalc.style.display = 'block'){
        containerCalc.style = 'none';
    }
});
