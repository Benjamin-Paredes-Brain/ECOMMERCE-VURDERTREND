    const barrasBusqueda = document.querySelectorAll(".buscador");
    const opcionesBuscador = document.querySelectorAll(".opciones-buscador");

    barrasBusqueda.forEach((barraBusqueda) => {
        barraBusqueda.addEventListener("keyup", filtroBusqueda);

        const divOpcionesBusqueda = document.createElement("div");

        // SI SE CLICKEO FUERA DE LA BARRA DE BUSQUEDA O LAS OPCIONES SE CIERRA EL BUSCADOR
        document.addEventListener("click", (e) => {
            const targetElement = e.target;
        
            if (!targetElement.closest(".barra-busqueda")) {
            barrasBusqueda.forEach((barraBusqueda) => {
                barraBusqueda.value = "";
            });
        
            opcionesBuscador.forEach((opciones) => {
                opciones.innerHTML = "";
            });
            }
        });

        // AGREGAR ELEMENTOS AL BUSCADOR
        function filtroBusqueda(letra) {
            if (letra.key === "Escape") {
                letra.target.value = "";
            }
            const textoBusqueda = letra.target.value.toUpperCase().trim();
            divOpcionesBusqueda.innerHTML = "";

            if (textoBusqueda.length > 0) {
                const resultados = stockProductos.filter((producto) =>
                    producto.nombre.toUpperCase().includes(textoBusqueda)
                );

                resultados.forEach((producto) => {
                    const divProducto = document.createElement("div");
                    divProducto.innerHTML = `
                                            <div>
                                            <a href="${isIndexPage() ? './pages/productos.html' : './productos.html'}"><p class="opciones-buscador-contenido">${producto.nombre} $${producto.precio}</p></a>
                                            </div>`;

                    function isIndexPage() {
                        return window.location.pathname.endsWith('index.html');
                    }

                    divOpcionesBusqueda.appendChild(divProducto);
                });
            }

            opcionesBuscador.forEach((opciones) => {
                opciones.innerHTML = "";
                opciones.appendChild(divOpcionesBusqueda);
            });
        }
    });

    
