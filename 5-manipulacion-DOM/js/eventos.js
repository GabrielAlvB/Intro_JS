//evento con boton 
document.getElementById("miBoton").addEventListener("click",
    function(){
        alert("Hiciste click xD");
        document.getElementById("miBoton").style.background="red";
    }
)

//evento de cambio a una etiqueta input
document.getElementById("inputText").addEventListener("change",
function(){
    alert("El valor ha cambiado");
}
)

//evento de teclado en un input
document.getElementById("inputText2").addEventListener("keyup",
function(){
    alert("Presionaste la tecla: "+ event.key);
}
)

// evento de carga de una imagen
document.getElementById("imagen1").addEventListener("load",
function(){
    alert("Se cargo la imagen");
}
)
