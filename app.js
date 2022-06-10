let numUno= document.getElementById("numeroUno")

let numDos = document.getElementById('numeroDos')

let boton = document.getElementById("operacion")
let escribir =  document.getElementById("almacenarAqui")

function Operacion(num1, num2) {
     return num1+num2
}

//poner datos al click
boton.addEventListener("click",resultadoOperacion)

function resultadoOperacion() {
  console.log("sigoIntentando")
  let inputValuenumOne = parseInt(numUno.value)
  let inputValuenumTwo = parseInt(numDos.value)
  let resultado = Operacion(inputValuenumOne,inputValuenumTwo)

  escribir.value = resultado;
  console.log(escribir.value)
}
/*copiando texto de caja y mostrado en una seccion lo que muestra el texto */
let inputValue = document.getElementById("inputTexto");
console.log("el valor recogido antes entrar en la funcion es:"+typeof inputValue )
let botonClickMe = document.getElementById("buttonText");
let ActulizandoWriting = document.getElementById("writeValueInput");

/**Reconociendo el click */
botonClickMe.addEventListener('click', actualizarEscritura)

function actualizarEscritura(){
  let valorRecogido = inputValue.value;  //dentro de la f(x) value, si declaro no la muestra
  console.log(typeof valorRecogido)//string
  console.log(valorRecogido)//imprime y funciona

  ActulizandoWriting.innerHTML = valorRecogido; 
}


/**error */
// const actualizarEscritura=()=>{
//   let valorRecogido = inputValue.value; 
//   ActulizandoWriting.innerHTML = valorRecogido; 
// } //Uncaught ReferenceError: Cannot access 'actualizarEscritura' before initialization  at app.js:31:40
