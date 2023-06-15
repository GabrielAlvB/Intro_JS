let respuesta = '';
while (respuesta !== 'si' && respuesta !== 'no') {
  respuesta = prompt('¿Eres bellisimo?, si o no').toLowerCase();
}

if (respuesta === 'si') {
  alert('Ciertamente');
} else {
  alert('No te creo');
}

//Ejercicio 2
//Solicitar al usuario un número, y determinar si es divisible entre dos o no. 
//Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.
//3. Crear un programa que determine si un número introducido en un Prompt es par o no, 
//la respuesta será mostrada en un Alert.

respuesta = '';
respuesta = parseFloat(prompt('Ingrese un numero para ver si es divisible'));

if (respuesta%2 === 0) {
    alert('Es par');
  } else {
    alert('No es par');
  }
//4. Solicitar al usuario un número de cliente. Si el número es el 1000, 
//imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
respuesta = '';
respuesta = parseInt(prompt('Ingrese numero de cliente'));

if (respuesta === 1000) {
    alert('Ganaste un premio');
  } else {
    alert('Sigue participando');
  }
