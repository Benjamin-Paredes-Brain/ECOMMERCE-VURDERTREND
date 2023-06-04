// NAVBAR

// ABRIR NAVBAR MOBILE
const botonNav = document.querySelector(".navbar-boton");
const navbarContainer = document.querySelector(".navbar-container");

botonNav.onclick = () => {  navbarContainer.classList.toggle("mostrar")};

// DESPLEGAR DROPDOWN 
const botonDropdwonItems = document.querySelector(".navbar-items-dropdowns");
const ItemDropdown = document.querySelector(".navbar-dropdown");

botonDropdwonItems.onclick = () => {
    ItemDropdown.classList.toggle("mostrar");
};

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