// Clase constructora de los productos
class Producto {
    constructor(id, nombre, precio, imagen, cantidad) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = Number(precio);
        this.imagen = imagen;
        this.cantidad = Number(cantidad);
    }
}

const stockProductos = [];

// Agregar productos al stock
stockProductos.push(new Producto(1, "Remera Oversize blanca devilman", 200, "../img/tshirtblancadevilman.png", 1));
stockProductos.push(new Producto(2, "Remera Oversize marron butterflies", 100, "../img/tshirtbutterflies.png", 1));
stockProductos.push(new Producto(3, "Remera Oversize negra demon", 300, "../img/tshirtdmon.png", 1));

class Cuenta {
    constructor(nombre, email, contraseña) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }
}
let cuentas = [];


