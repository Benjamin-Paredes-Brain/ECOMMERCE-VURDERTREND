// INICIAR SESION 

const formIniciarSesion = document.getElementById("formulario-iniciarsesion");
const nombreUsuario = document.querySelectorAll(".nombre-usuario");
const botonIniciarSesion = document.querySelectorAll(".iniciarsesion");

let sesion = [];

function cargarSesion() {
    const sesionGuardada = localStorage.getItem("sesion");
    sesion = sesionGuardada ? JSON.parse(sesionGuardada) : [];
}

cargarSesion();

if (sesion.length > 0) {
    const usuario = sesion[0].nombre.toUpperCase();
    nombreUsuario.forEach((element) => {
        element.textContent = "¡HOLA, " + usuario + "!";
    });
    botonIniciarSesion.forEach((boton) => boton.classList.add("ocultar"));
} else {
    sesion = [];
}


if (window.location.pathname.includes("iniciarsesion.html")) {
    formIniciarSesion.addEventListener("submit", login);
}

function login(e) {
    e.preventDefault();

    const emailIniciarSesion = document.getElementById("login-email").value;
    const contraseñaIniciarSesion = document.getElementById("login-password").value;

    const cuentaEncontrada = cuentas.find((cuenta) => cuenta.email === emailIniciarSesion);

    if (cuentaEncontrada && cuentaEncontrada.contraseña === contraseñaIniciarSesion) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'SESION INICIADA CON EXITO',
            showConfirmButton: false,
            timer: 800
        })
        sesion = [];

        const usuario = cuentaEncontrada.nombre.toUpperCase();
        nombreUsuario.forEach((element) => {
            element.textContent = "¡HOLA, " + usuario + "!";
        });
        botonIniciarSesion.forEach((boton) => boton.classList.add("ocultar"));
        sesion.push(cuentaEncontrada);
        guardarSesion();

        formIniciarSesion.reset();

        setTimeout(() => {
            location.reload();
        }, 100);

    } else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'CREDENCIALES INCORRECTAS, VERIFICA TU EMAIL Y CONTRASEÑA',
            showConfirmButton: true,
        })
    }
}


const botonesCerrarSesion = document.querySelectorAll(".cerrarsesion");

botonesCerrarSesion.forEach((boton) => {
  boton.addEventListener("click", cerrarSesion);
});

function verificarSesion() {
  if (sesion.length === 0) {
    botonesCerrarSesion.forEach((boton) => {
      boton.classList.add("ocultar");
    });
  }
}

verificarSesion();

function cerrarSesion() {
  sesion = [];
  guardarSesion();
  botonesCerrarSesion.forEach((boton) => {
    boton.classList.add("ocultar");
  });
  location.reload();
}


