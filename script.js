function cerrarBienvenida() {
  const bienvenida = document.getElementById("pantalla-bienvenida");
  bienvenida.style.display = "none";
}

function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach(sec => sec.classList.add("oculto"));
  const activa = document.getElementById(id);
  if (activa) {
    activa.classList.remove("oculto");
    window.scrollTo(0, 0);
  }
}

// Carrusel funcional
let indice = 0;
const imagenes = document.querySelectorAll(".carousel img");
const mostrarImagen = (n) => {
  imagenes.forEach(img => img.classList.remove("active"));
  imagenes[n].classList.add("active");
};
document.querySelector(".next").onclick = () => {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen(indice);
};
document.querySelector(".prev").onclick = () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(indice);
};

// Modal de imagen
function expandirImagen(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("imgModal");
  modal.style.display = "block";
  modalImg.src = img.src;
}
function cerrarImagen() {
  document.getElementById("modal").style.display = "none";
}
