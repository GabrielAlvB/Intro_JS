//cambniando el contenido

document.getElementById("titulo").innerHTML = "Este es otro texto";
//cambio de estilo
document.getElementById("boton").style.background="red";
//document.getElementById("boton").innerHTML ="red";

//agregar un elemento a la pagina
var nuevoParrafo=document.createElement("p");
nuevoParrafo.setAttribute("id","miNuevoParrafo.");
nuevoParrafo.innerHTML="este es mi nuevo parrafo";
document.body.appendChild(nuevoParrafo);

//eliminar un elemento de nuestra pagina
var parrafoAEliminar=document.getElementById("parrafoAEliminar");
parrafoAEliminar.parentNode.removeChild(parrafoAEliminar);