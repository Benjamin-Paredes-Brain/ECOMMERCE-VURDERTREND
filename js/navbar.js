// NAVBAR

// ABRIR NAVBAR MOBILE
const botonNav = document.querySelector(".navbar-boton");
const navbarContainer = document.querySelector(".navbar-container");

botonNav.onclick = () => {  navbarContainer.classList.toggle("mostrar")};

// CERRAR NAVBAR MOBILE
const botonCerrarNav = document.querySelector(".navbar-cerrar");

botonCerrarNav.onclick = () => {
    navbarContainer.classList.remove("mostrar");
};

// BARRA DE BUSQUEDA MOBILE

const lupitaBusqueda = document.querySelector(".lupita-mobile"); 
const barraBusqueda = document.querySelector(".barrab-mobile");

lupitaBusqueda.onclick = () => {
    barraBusqueda.classList.toggle("mostrar");
};