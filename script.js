document.querySelector('.menu-hamburguesa').addEventListener('click', function() {
  if (this.classList.contains('rotada')) {
    this.style.transform = 'rotate(0deg)'; // Si el botón está rotado, lo volvemos a la posición original
  } else {
    this.style.transform = 'rotate(90deg)'; // Si el botón no está rotado, lo rotamos
  }
  this.classList.toggle('rotada'); // Alternamos la clase rotada para mantener el estado
});
