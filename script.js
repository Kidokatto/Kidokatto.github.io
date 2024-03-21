document.querySelector('.menu-hamburguesa').addEventListener('click', function() {
  if (this.classList.contains('rotada')) {
    this.style.transform = 'rotate(0deg)'; // Si el botón está rotado, lo volvemos a la posición original
  } else {
    this.style.transform = 'rotate(90deg)'; // Si el botón no está rotado, lo rotamos
  }
  this.classList.toggle('rotada'); // Alternamos la clase rotada para mantener el estado
});

// Función para abrir el modal
function abrirModal(id) {
  // Obtener el checkbox que controla el modal
  var checkbox = document.getElementById(id);
  // Cambiar su estado de marcado/desmarcado
  checkbox.checked = !checkbox.checked;
  
}

