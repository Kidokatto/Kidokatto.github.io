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
    const videos = modal.querySelectorAll('video');
    videos.forEach((video) => {
      video.pause();
    });
    modal.style.display = 'none';
  });
});


// Función para abrir la imagen en pantalla completa
function openFullscreen(img) {
  var fullscreenImg = img.closest(".content-modal").querySelector(".fullscreen-img");
  fullscreenImg.src = img.src;
  var fullscreenContainer = img.closest(".content-modal").querySelector(".fullscreen-image");
  fullscreenContainer.style.display = "block";
}

// Event listener para cerrar la imagen en pantalla completa al hacer clic fuera de ella
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("fullscreen-image")) {
    event.target.style.display = "none";
  }
});




// Transicion

document.addEventListener('DOMContentLoaded', function() {
  var enlaces = document.querySelectorAll('a.link');

  for (var i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener('click', function(event) {
      event.preventDefault(); // Evita que el enlace se comporte normalmente

      var destino = this.getAttribute('href'); // Obtiene el atributo href del enlace
      var seccionDestino = document.querySelector(destino); // Encuentra el elemento destino

      // Realiza el scroll suavemente hasta la sección destino
      window.scrollTo({
        top: seccionDestino.offsetTop,
        behavior: 'smooth'
      });
    });
  }
});


