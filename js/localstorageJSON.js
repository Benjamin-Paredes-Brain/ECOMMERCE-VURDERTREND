// JSON y localStorage
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito)); // Guarda el carrito como un JSON en localStorage
};

function cargarCarrito() {
  const carritoGuardado = localStorage.getItem("carrito"); // Obtiene el carrito guardado de localStorage

  carritoGuardado && (carrito = JSON.parse(carritoGuardado));
};


