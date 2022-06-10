console.log("caca")
let numUno = document.getElementById("numeroUno").value;
let numDos = document.getElementById("numerodos").value;
let boton = document.querySelector("#operacion");
let escribir = document.getElementById('almacenarAqui');
//enviar valores de html  a js .value

function resultadoOperacion(datoUno, datoDos) {
    let numUno= datoUno;
    let numDos= datoDos;
  let resultadoOperacion = numUno + numDos;
  escribir.textContent = resultadoOperacion;

}

let ponerDatos = boton.addEventListener("click",resultadoOperacion(numUno,numDos))
