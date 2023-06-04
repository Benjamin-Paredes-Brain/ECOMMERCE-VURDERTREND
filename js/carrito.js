let carrito = [];

const contenedorProductos = document.getElementById("contenedor-productos");
const botonCarrito = document.querySelectorAll(".boton-carrito");
const modal = document.getElementById("modal");
const contenidoCarrito = document.getElementById("contenido-carrito");
const botonVaciar = document.getElementById("boton-vaciar");
const botonCerrar = document.getElementsByClassName("cerrar")[0];

// Función para agregar productos al carrito
const agregarProducto = (productoId) => {
  const productoEnCarrito = carrito.find((producto) => producto.id === productoId);

  productoEnCarrito ? productoEnCarrito.cantidad++ : carrito.push(JSON.parse(JSON.stringify(stockProductos.find((producto) => producto.id === productoId))));

  guardarCarrito();
  actualizarContadorCarrito();
};

// Función para actualizar el contador del carrito
const actualizarContadorCarrito = () => {
  const contadorCarrito = document.querySelectorAll(".contador-carrito");
  contadorCarrito.forEach((contador) => {
    contador.textContent = carrito.length;
  });
};


// Se cargan los productos en la pagina
stockProductos.forEach((producto) => {
  const div = document.createElement("div");
  div.classList.add("tarjeta-producto");
  div.innerHTML = `<img src=${producto.imagen} alt="${producto.nombre}" class="producto-img">
                     <p class="producto-txt">${producto.nombre}</p>
                     <p class="producto-txt">$${producto.precio}</p>
                     <button id="boton${producto.id}" class="boton">Agregar al carrito</button>`;

  contenedorProductos.appendChild(div);

  // Agrega productos al carrito
  const botonAgregar = document.getElementById(`boton${producto.id}`);
  botonAgregar.onclick = () => {
    agregarProducto(producto.id);
  };
});


