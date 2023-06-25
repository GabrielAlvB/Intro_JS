//const ulElement=document.getElementById('contacts-ul');  getElementByClassName, getElementByTagName
const ulElement=document.querySelector('#contacts-ul');
//declaramos vacio el array como buena practica
let contacts = [];

fetch("api/characters.json") //obtener informacion de una api
.then(response=> response.json())
.then(data=>console.log(data))
