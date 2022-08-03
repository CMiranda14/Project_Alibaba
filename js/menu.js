
function vinculos(){
    
        let barra_iz = document.querySelector("#barra_izquierda");
    
        let etiqueta = '<a href="productos.html" class="bt_menu">'+'Productos'+'</a>';
        let etiqueta1 = '<a href="Proveedor_productos_vendidos.html" class="bt_menu">'+'Proveedor de productos vendidos'+'</a>';
        let etiqueta2 = '<a href="Categoria_productos.html" class="bt_menu">'+'Categoria de productos'+'</a>';
        /*M*/let etiqueta4 = '<a href="opciones.html" class="bt_menu">'+'Opciones de productos'+'</a>';

        let etiqueta5 = '<a href="carts_has_products.html" class="bt_menu">'+'Productos añadidos'+'</a>';
        /*M*/let etiqueta6 = '<a href="categorias.html" class="bt_menu">'+'Categorías'+'</a>';
        /*M*/let etiqueta7 = '<a href="ordenes.html" class="bt_menu">'+'Ordenes'+'</a>';
        /*M*/let etiqueta8 = '<a href="index.html" class="bt_menu">'+'Pedidos de productos'+'</a>';
        let etiqueta9 = '<a href="pedidos.html" class="bt_menu">'+' Pedidos pagados con tarjeta de crédito'+'</a>';
        let etiqueta10 = '<a href="pedidosRealizadosUsuario.html" class="bt_menu">'+'Pedidos realizados por usuarios'+'</a>';
        let etiqueta11 = '<a href="carrosDeCompras.html" class="bt_menu">'+'carrito de compras'+'</a>';
        let etiqueta12 = '<a href="vendedores.html" class="bt_menu">'+'vendedores'+'</a>';
        let etiqueta13 = '<a href="" class="bt_menu">'+'Opciones'+'</a>';
    
        barra_iz.innerHTML = etiqueta + etiqueta1 + etiqueta2 +
                             etiqueta4 + etiqueta5+ etiqueta6+ 
                             etiqueta7 + etiqueta8+ etiqueta9+ 
                             etiqueta10 + etiqueta11+ etiqueta12+ 
                             etiqueta13;
    
    
    }
    
vinculos();


function menu(){
        let menu = document.getElementById("menu");

        let main =      '<img src="https://cdn.iconscout.com/icon/free/png-256/alibaba-3215360-2673778.png" alt="" class="logo">' +

        '<ul class="nav">' +
                '<li>'  + 
                        '<a href="index.html" class="text"> Salir   </a>'  +  
                '</li>'  + 

                '<li>'  + 
                        '<a href="filtro.html" class="text"> filtro de búsquedad  </a>'  +  
                '</li>'  + 
        '</ul>'

menu.innerHTML = main;            

}
menu();


  