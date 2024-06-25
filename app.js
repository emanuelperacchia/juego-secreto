let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximoIntentos = 3;
function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}
function reinicio(){
    document.getElementById('reiniciar').removeAttribute('disabled');
}
function verificarIntento(){
let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //get element retorna el objeto completo, para usar su valor tenemos que especificar que elemento queremos usar. en este caso el valor capturado 
//comparacion estricta de tipode elemento y contenido
if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
  document.getElementById('reiniciar').removeAttribute('disabled');

} else{ 
    if(numeroDeUsuario > numeroSecreto){
    asignarTextoElemento('p', 'El número secreto es menor');
}else {
    asignarTextoElemento('p', 'El numero es mayor');
}
intentos++;
limpiarCaja();
}

    if (intentos > maximoIntentos) {
        asignarTextoElemento('p', 'Has alcanzado el numero maximo de intentos');
        reiniciarJuego();
        listaNumerosSorteados = [];
    }
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; 
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
//si ya sorteamos todos los numeros
if(listaNumerosSorteados.length === numeroMaximo){
asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
}else{
    //si el numero generado esta incluido en la lista
if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
} else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}}
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un número entre el 1 y el ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();    
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja, indicar mensaje de inicio, generar numero aleatorio, Deshabilitar el boton de nuevo juego, inicialisar intentos
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();

