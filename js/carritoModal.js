// Evento de clic en el botón del carrito
botonCarrito.forEach((boton) => {
    boton.onclick = () => {
        modal.style.display = "block";
        contenidoCarrito.innerHTML = "";

        let totalCarrito = 0;

        // Mostrar los productos en el carrito
        carrito.forEach((producto, index) => {
            const divProducto = document.createElement("div");
            divProducto.classList.add("productos-carrito");
            divProducto.innerHTML = `
          <div>
            <p class="p-productos">Nombre: ${producto.nombre}</p>
            <p class="p-productos">Cantidad: ${producto.cantidad}</p>
            <p class="p-productos">Precio: $${producto.precio}</p>
          </div>`;

            const divContainerEliminar = document.createElement("div");
            const botonEliminar = document.createElement("button");
            botonEliminar.classList.add("btn-e");
            botonEliminar.innerHTML = `<button class="boton-eliminar fas fa-trash-alt"></button>`;
            botonEliminar.onclick = () => {
                eliminarProducto(index);
            };


            divContainerEliminar.appendChild(botonEliminar);
            divProducto.appendChild(divContainerEliminar);
            contenidoCarrito.appendChild(divProducto);

            totalCarrito += producto.cantidad * producto.precio;
        });

        // Mostrar el total del carrito
        const totalProductos = document.createElement("div");
        totalProductos.classList.add("precio-total");
        totalProductos.innerHTML = `Precio total= $${totalCarrito}`;
        contenidoCarrito.appendChild(totalProductos);
    };
});


// Vacía el contenido del carrito
botonVaciar.onclick = () => {
    contenidoCarrito.innerHTML = "";
    carrito.length = 0;

    const totalProductos = document.createElement("div");
    totalProductos.classList.add("precio-total")
    totalProductos.innerHTML = "Precio total= $0";
    contenidoCarrito.appendChild(totalProductos);

    guardarCarrito();
    actualizarContadorCarrito();
};

// Elimina productos individuales del carrito
function eliminarProducto(index) {
    carrito.splice(index, 1);
    botonCarrito.forEach((boton) => {
        boton.click();
    });


    guardarCarrito();
    actualizarContadorCarrito();
}

// Se cierra el carrito en pantalla
botonCerrar.onclick = () => {
    modal.style.display = "none";
};

cargarCuentas();
cargarSesion();
cargarCarrito();
actualizarContadorCarrito();