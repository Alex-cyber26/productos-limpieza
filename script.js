const searchBar = document.getElementById("searchBar");
const productos = document.querySelectorAll(".producto");

searchBar.addEventListener("keyup", () => {
  const searchText = searchBar.value.toLowerCase();
  productos.forEach(producto => {
    const nombre = producto.dataset.nombre.toLowerCase();
    const categoria = producto.dataset.categoria.toLowerCase();

    if (nombre.includes(searchText) || categoria.includes(searchText)) {
      producto.style.display = "block";
    } else {
      producto.style.display = "none";
    }
  });
});
