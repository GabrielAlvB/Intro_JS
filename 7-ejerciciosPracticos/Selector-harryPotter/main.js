//const ulElement=document.getElementById('contacts-ul');  getElementByClassName, getElementByTagName
const ulElement=document.querySelector('#contacts-ul');
//declaramos vacio el array como buena practica
let contacts = [];

function getDataFromJson(){
    fetch("api/characters.json") //obtener informacion de una api
    .then(response=> response.json())
    .then(data=>normalizeData(data))
    .then(cleanData=> console.log(cleanData))
}

//concepto frontend
//normalizacion:  consiste en limpiar la info
// que nos llega y tener solo la que necesitamos
// y con la estructura

function normalizeData(data){
for(let i=0; i<data.lenght; i++)
   console.log(data[i]); 
}
getDataFromJson();