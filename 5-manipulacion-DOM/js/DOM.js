//cambniando el contenido

document.getElementById("titulo").innerHTML = "Este es otro texto";
document.getElementById("boton").style.background="red";
//document.getElementById("boton").innerHTML ="red";

var nuevoParrafo=document.createElement("p");
nuevoParrafo.setAttribute("id","miNuevoParrafo.");
nuevoParrafo.innerHTML="este es mi nuevo parrafo";
document.body.appendChild(nuevoParrafo);

