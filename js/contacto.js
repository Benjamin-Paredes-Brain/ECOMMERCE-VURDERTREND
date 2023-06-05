const formContacto = document.getElementById("formulario-contacto");

formContacto.addEventListener("submit", enviar);

async function enviar(event) {
  event.preventDefault();

  const formularioContacto = new FormData(this);

  await fetch(this.action, {
    method: this.method,
    body: formularioContacto,
    headers: {
      "Accept": "application/json"
    }
  })
    .then(() => {
      this.reset();
      Swal.fire({
        title: 'FORMULARIO ENVIADO',
        icon: 'success',
        confirmButtonText: 'ACEPTAR'
      })
    })
    .catch(error => {
      console.error("Error al enviar el formulario:", error);
    });
}
