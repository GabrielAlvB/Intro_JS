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
//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. 
//No considerar el caso en que ambos números son iguales.
let input = prompt("Ingresa dos valores separados por coma:");
let [valor1, valor2,valor3] = input.split(",");
if(valor1!==valor2){
    if (valor1 < valor2) {
        alert(valor1+' es menor');
    } else {
        alert(valor2+' es menor');
    }
}else{
    alert('Los valores son iguales');
}
//6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. 
//Considerar el caso en que 2 números sean iguales.
input = prompt("Ingresa tres valores separados por coma:");
[valor1, valor2, valor3] = input.split(",");

if (valor1 !== valor2 && valor2 !== valor3 && valor1 !== valor3) {
  let maximo = Math.max(valor1, valor2, valor3);
  alert("El valor máximo es: " + maximo);
} else {
  alert("Los valores son iguales");
}
