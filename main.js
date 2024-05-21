document.getElementById('botonSend').addEventListener('click', () => {
  const nombreEntrada = document.getElementById('nombreEntrada').value;
  document.getElementById('nombreMostrado').textContent = `Hola ${nombreEntrada}!`;
});

