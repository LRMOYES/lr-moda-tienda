const products = [
  { name: "Conjunto Deportivo Mujer", price: 39.99 },
  { name: "Sudadera Unisex", price: 29.99 },
  { name: "Top Elegante Mujer", price: 24.99 }
];

const productContainer = document.getElementById("product-container");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
let total = 0;

products.forEach((product) => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <h4>${product.name}</h4>
    <p>$${product.price}</p>
    <button onclick="addToCart(${product.price})">Agregar al carrito</button>
  `;
  productContainer.appendChild(div);
});

function addToCart(price) {
  const item = document.createElement("li");
  item.textContent = $${price};
  cartItems.appendChild(item);
  total += price;
  cartTotal.textContent = total.toFixed(2);
}

<script>
  let carrito = [];
  const listaCarrito = document.getElementById("lista-carrito");
  const totalElement = document.getElementById("total");

  document.querySelectorAll(".agregar-carrito").forEach(btn => {
    btn.addEventListener("click", function () {
      const producto = this.closest(".producto");
      const nombre = producto.querySelector("h3").innerText;
      const precio = parseFloat(producto.querySelector("p:nth-of-type(2)").innerText.replace("Precio: $", ""));
      carrito.push({ nombre, precio });
      actualizarCarrito();
    });
  });

  function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;
    carrito.forEach((item, index) => {
      total += item.precio;
      const li = document.createElement("li");
      li.innerHTML = ${item.nombre} - $${item.precio.toFixed(2)} <button onclick="eliminarDelCarrito(${index})">Eliminar</button>;
      listaCarrito.appendChild(li);
    });
    totalElement.innerText = total.toFixed(2);
  }

  function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
  }

  function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
  }
</script>
