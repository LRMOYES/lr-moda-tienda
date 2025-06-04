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
