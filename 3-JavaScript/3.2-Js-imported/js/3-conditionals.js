console.log("====Conditionals======");

/*
condicionales bifurcaciones que existen en la logica de
nuestro codigo
*/

var video="CHAMPIONS";
var clickInMenu=true;

if(video=='CHAMPIONS'){
    console.log("VER VIDEO CHAMPIONS");
}

if(video=='MIRANDA'){
    console.log("VER MIRANDA");
}

if(clickInMenu==true){
    console.log("mostrar menu");
}

var isAdult = '0'; //0=no 1=si

//con 3 ""="" se considera el tipo de dato para la comparacion
//de otra manera JS tomara el string como number
if(isAdult===1){
    console.log("Mayor de edad");
}else{
    console.log("Eres MENOR de edad");
}
