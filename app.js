let numUno= document.getElementById("numeroUno")

let numDos = document.getElementById('numeroDos')

let boton = document.getElementById("operacion")
let escribir =  document.getElementById("almacenarAqui")

function Operacion(num1, num2) {
     return num1+num2
}

//poner datos al click
boton.addEventListener("click",resultadoOperacion)


// boton.addEventListener("click", resultadoOperacion(numUno.value,numDos.value))

function resultadoOperacion() {
  console.log("sigoIntentando")
  let inputValuenumOne = parseInt(numUno.value)
  let inputValuenumTwo = parseInt(numDos.value)
  let resultado = Operacion(inputValuenumOne,inputValuenumTwo)

  escribir.value = resultado;
  console.log(escribir.value)

  // escribir.innerHTML = resultadoOperacion(numUno.value,numDos.value);
  // console.log(  document.getElementById("almacenarAqui").value = Date()
  // )
}



}