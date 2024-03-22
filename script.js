document.querySelector('.menu-hamburguesa').addEventListener('click', function() {
  if (this.classList.contains('rotada')) {
    this.style.transform = 'rotate(0deg)'; // Si el botón está rotado, lo volvemos a la posición original
  } else {
    this.style.transform = 'rotate(90deg)'; // Si el botón no está rotado, lo rotamos
  }
  this.classList.toggle('rotada'); // Alternamos la clase rotada para mantener el estado
});

const openModalBtns = document.querySelectorAll('.open-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const modals = document.querySelectorAll('.container-modal');

openModalBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal-id');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

closeModalBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.container-modal');
    modal.style.display = 'none';
  });
});


/*CARRUSEL IMAGENES HORIZONTALES */

function openFullscreen(img) {
  var fullscreenImg = document.getElementById("fullscreen-img");
  fullscreenImg.src = img.src;
  document.getElementById("fullscreen-image").style.display = "block";
}

// Cerrar la imagen en pantalla completa al hacer clic fuera de ella
document.getElementById("fullscreen-image").addEventListener("click", function() {
  document.getElementById("fullscreen-image").style.display = "none";
});


