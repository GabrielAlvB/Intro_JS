let respuesta = '';
while (respuesta !== 'si' && respuesta !== 'no') {
  respuesta = prompt('Por favor, ingresa "si" o "no":').toLowerCase();
}

if (respuesta === 'si') {
  console.log('El usuario ha respondido sí.');
} else {
  console.log('El usuario ha respondido no.');
}
