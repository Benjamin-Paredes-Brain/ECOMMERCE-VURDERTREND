// CREAR CUENTA

const formCrearCuenta = document.getElementById("formulario-crearcuenta");

formCrearCuenta.addEventListener("submit", crearCuenta);

function crearCuenta(e) {
    e.preventDefault();

    const nombreCrearCuenta = document.getElementById("signup-name").value;
    const emailCrearCuenta = document.getElementById("signup-email").value;
    const contraseñaCrearCuenta = document.getElementById("signup-password").value;
    const contraseñaRepetirCrearCuenta = document.getElementById("signup-confirm-password").value;

    if (contraseñaCrearCuenta === contraseñaRepetirCrearCuenta) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'CUENTA CREADA EXITOSAMENTE',
            showConfirmButton: false,
            timer: 1300
        })

        cuentas.push(new Cuenta(nombreCrearCuenta, emailCrearCuenta, contraseñaCrearCuenta));

        guardarCuentas();
        formCrearCuenta.reset();

        setTimeout(() => {
            window.location.href = "iniciarsesion.html";
        }, 1300);

    } else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'LAS CONTRASEÑAS NO COINCIDEN',
            showConfirmButton: false,
            timer: 1300
        })
    }
}

cargarCuentas();