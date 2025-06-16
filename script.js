function entrarSitio() {
  document.getElementById("pantalla-bienvenida").style.display = "none";
  document.getElementById("contenido-sitio").classList.remove("oculto");
  mostrarSeccion("inicio"); // muestra sección de inicio al entrar
}

function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach(sec => sec.classList.add("oculto"));
  document.getElementById(id).classList.remove("oculto");
}

function vaciarCarrito() {
  document.getElementById("lista-carrito").innerHTML = "";
  document.getElementById("total").innerText = "0.00";
}

// Carrusel
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
