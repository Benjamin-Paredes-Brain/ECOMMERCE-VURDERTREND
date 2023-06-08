// JSON y localStorage
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito)); // Guarda el carrito como un JSON en localStorage
};

function cargarCarrito() {
  const carritoGuardado = localStorage.getItem("carrito"); // Obtiene el carrito guardado de localStorage

  carritoGuardado && (carrito = JSON.parse(carritoGuardado));
};

function guardarCuentas() {
  localStorage.setItem("cuentas", JSON.stringify(cuentas))
};

function cargarCuentas() {
  const cuentasGuardadas = localStorage.getItem("cuentas");
  cuentasGuardadas && (cuentas = JSON.parse(cuentasGuardadas));
}

function guardarSesion() {
  localStorage.setItem("sesion", JSON.stringify(sesion));
};

function cargarSesion() {
  const sesionGuardada = localStorage.getItem("sesion");
  sesionGuardada && (sesion = JSON.parse(sesionGuardada))
}

