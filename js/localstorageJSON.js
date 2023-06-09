// JSON y localStorage
function guardarCarrito() {
  if (sesion.length > 0 && sesion[0].email) {
    const carritoActual = JSON.stringify(carrito);
    localStorage.setItem(`carrito_${sesion[0].email}`, carritoActual);
  } else {
    const carritoActual = JSON.stringify(carrito);
    sessionStorage.setItem("carrito", carritoActual);
  }
}

function cargarCarrito() {
  if (sesion.length > 0 && sesion[0].email) {
    const carritoGuardado = localStorage.getItem(`carrito_${sesion[0].email}`);
    if (carritoGuardado) {
      carrito = JSON.parse(carritoGuardado);
      actualizarContadorCarrito();
    }
  } else {
    const carritoGuardado = sessionStorage.getItem("carrito");
    if (carritoGuardado) {
      carrito = JSON.parse(carritoGuardado);
      actualizarContadorCarrito();
    }
  }
}



function guardarCuentas() {
  localStorage.setItem("cuentas", JSON.stringify(cuentas));
}

function cargarCuentas() {
  const cuentasGuardadas = localStorage.getItem("cuentas");
  cuentas = cuentasGuardadas ? JSON.parse(cuentasGuardadas) : [];
}

function guardarSesion() {
  localStorage.setItem("sesion", JSON.stringify(sesion));
}

function cargarSesion() {
  const sesionGuardada = localStorage.getItem("sesion");
  sesion = sesionGuardada ? JSON.parse(sesionGuardada) : [];
}

