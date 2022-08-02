import {Pedidos} from "./panel.js"

function vinculos(){
    
    let barra_iz = document.querySelector("#barra_izquierda");

    let etiqueta = '<a href="productos.html" class="bt_menu">'+'Productos'+'</a>';
    let etiqueta1 = '<a href="Proveedor_productos_vendidos.html" class="bt_menu">'+'Proveedor de productos vendidos'+'</a>';
    let etiqueta2 = '<a href="Categoria_productos.html" class="bt_menu">'+'Categoria de productos'+'</a>';
    let etiqueta4 = '<a href="products_has_options.html" class="bt_menu">'+'Opciones de productos'+'</a>';
    let etiqueta5 = '<a href="carts_has_products.html" class="bt_menu">'+'Productos añadidos'+'</a>';
    let etiqueta6 = '<a href="index.html" class="bt_menu">'+'Categorías'+'</a>';
    let etiqueta7 = '<a href="index.html" class="bt_menu">'+'Ordenes'+'</a>';
    let etiqueta8 = '<a href="index.html" class="bt_menu">'+'Pedidos de productos'+'</a>';
    let etiqueta9 = '<a href="index.html" class="bt_menu">'+' Pedidos pagados con tarjeta de crédito'+'</a>';
    let etiqueta10 = '<a href="index.html" class="bt_menu">'+'Pedidos realizados por usuarios'+'</a>';
    let etiqueta11 = '<a href="index.html" class="bt_menu">'+'carrito de compras'+'</a>';
    let etiqueta12 = '<a href="vendor.html" class="bt_menu">'+'vendedores'+'</a>';
    let etiqueta13 = '<a href="index.html" class="bt_menu">'+'Opciones'+'</a>';

    barra_iz.innerHTML = etiqueta + etiqueta1 + etiqueta2 +
                         etiqueta4 + etiqueta5+ etiqueta6+ 
                         etiqueta7 + etiqueta8+ etiqueta9+ 
                         etiqueta10 + etiqueta11+ etiqueta12+ 
                         etiqueta13;


}

vinculos();

/******************************************************************************************************************************************/

function tarjetaC(){

    let PedidosT = document.getElementById("PedidosT");

let title = '<h1 class="titulo">' + ' Pedidos con Tarjeta de  crédito' +  '</h1>';

let table = '<table border="1" class="tabla">' + 
                    '<tr class="titulos">' +
                        '<td>' + 'Número De Tarjeta' + '</td>' +
                        '<td>' +  'ID Orden'   + '</td>' +
                    '</tr>' +

                    '<tr class="texts">' +
                        '<td>' + Pedidos[0].Tarjeta  + '</td>' +
                        '<td>' + Pedidos[0].Orden    + '</td>' +  
                    '</tr>' +

                    '<tr class="texts" style="background-color: #ECF0F1">' +
                        '<td>' + Pedidos[1].Tarjeta  + '</td>' +
                        '<td>' + Pedidos[1].Orden    + '</td>' + 
                    '</tr>' +

                    '<tr class="texts">' +
                        '<td>' + Pedidos[2].Tarjeta  + '</td>' +
                        '<td>' + Pedidos[2].Orden    + '</td>' + 
                    '</tr>' +

                    '<tr class="texts" style="background-color: #ECF0F1">' +
                        '<td>' + Pedidos[3].Tarjeta  + '</td>' +
                        '<td>' + Pedidos[4].Orden    + '</td>' + 
                    '</tr>' +

                    '<tr class="texts">' +
                        '<td>' + Pedidos[4].Tarjeta  + '</td>' +
                        '<td>' + Pedidos[4].Orden    + '</td>' + 
                    '</tr>' +

                    '<tr class="texts" style="background-color: #ECF0F1">' +
                        '<td>' + Pedidos[5].Tarjeta  + '</td>' +
                        '<td>' + Pedidos[5].Orden    + '</td>' +   
                    '</tr class="texts">' +

                    '<tr class="texts">' +
                        '<td>' + Pedidos[6].Tarjeta  + '</td>' +
                        '<td>' + Pedidos[6].Orden    + '</td>' + 
                    '</tr>' +

                '</table>';

PedidosT.innerHTML =  title + table; 
}

tarjetaC();
