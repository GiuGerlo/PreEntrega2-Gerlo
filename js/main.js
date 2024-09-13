// Class
class Articulo {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre.toLowerCase();
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

// Array
let listaArticulos = [
    new Articulo("botines", 50, 42),
    new Articulo("zapatillas", 40, 23),
    new Articulo("buzos", 60, 6),
    new Articulo("medias", 10, 40),
    new Articulo("canilleras", 8, 10)
];

// Función para gestionar el stock
function gestionarStock() {
    let opcion = parseInt(prompt("Ingrese 1 si quiere AGREGAR stock - 2 si quiere ELIMINAR stock - 0 para salir"));

    while (opcion !== 0) {
        if (opcion === 1) {
            const articulo = prompt("Ingrese el nombre del articulo").toLowerCase();
            const precio = parseFloat(prompt("Ingrese el precio del articulo"));
            const cantidad = parseInt(prompt("Ingrese la cantidad de stock del articulo"));

            if (precio > 0 && cantidad > 0) {
                listaArticulos.push(new Articulo(articulo, precio, cantidad));
                console.log(`Se agregó el artículo: ${articulo}, Precio: $${precio}, Cantidad: ${cantidad}`);
            } else {
                console.log("Precio o cantidad inválidos, intente otra vez");
            }
        } else if (opcion === 2) {
            const eliminarArticulo = prompt("Ingrese el nombre del articulo a eliminar stock").toLowerCase();
            const eliminarCantidad = parseInt(prompt("Ingrese la cantidad de stock que quiere eliminar"));

            const articuloEncontrado = listaArticulos.find(item => item.nombre === eliminarArticulo);

            if (articuloEncontrado) {
                if (eliminarCantidad > 0 && eliminarCantidad <= articuloEncontrado.cantidad) {
                    articuloEncontrado.cantidad -= eliminarCantidad;
                    console.log(`Se eliminó ${eliminarCantidad} del stock de ${eliminarArticulo}. Stock restante: ${articuloEncontrado.cantidad}`);

                    if (articuloEncontrado.cantidad === 0) {
                        listaArticulos = listaArticulos.filter(item => item.nombre !== eliminarArticulo);
                        console.log(`El artículo ${eliminarArticulo} se eliminó porque su cantidad llegó a 0`);
                    }
                } else {
                    console.log("Cantidad a eliminar inválida o mayor que el stock disponible");
                }
            } else {
                console.log("No se encontró el artículo");
            }
        } else {
            console.log("No existe esa opción, intente otra vez");
        }
        
        opcion = parseInt(prompt("Ingrese 1 si quiere AGREGAR stock - 2 si quiere ELIMINAR stock - 0 para salir"));
    }
    
    console.log("Stock actualizado ✅", listaArticulos);
}

//Funcion consultarStock()
function consultarStock() {
    let consultaProducto = prompt("Ingrese el NOMBRE del producto a consultar").toLowerCase();

    const articuloEncontrado = listaArticulos.find(item => item.nombre === consultaProducto);

    if (articuloEncontrado){
        console.log(`Articulo: ${articuloEncontrado.nombre} - Precio: $${articuloEncontrado.precio} - Stock: ${articuloEncontrado.cantidad}`);
    } else{
        console.log("No se encontro ningún articulo");
    }
}

//Inicio del programa
let accion = parseInt(prompt("Ingrese 1 para AGREGAR/ELIMINAR stock - ingrese 2 para CONSULTAR stock - ingrese 0 para SALIR"));

while (accion !== 0) {

    if (accion === 1) {
        gestionarStock();
    } else if (accion === 2){
        consultarStock();
    } else {
        console.log("No existe esa opcion, intente otra vez");
    }
    accion = parseInt(prompt("Ingrese otro número 1 para AGREGAR/ELIMINAR stock - ingrese 2 para CONSULTAR stock - ingrese 0 para SALIR"));
}