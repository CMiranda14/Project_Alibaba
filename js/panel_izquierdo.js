import { products } from "./products.js";


function vinculos(){
    
    let barra_iz = document.querySelector("#barra_izquierda");

    let etiqueta = '<a href="productos.html" class="bt_menu">'+'Productos'+'</a>';
    let etiqueta1 = '<a href="index.html" class="bt_menu">'+'Proveedor de productos vendidos'+'</a>';
    let etiqueta2 = '<a href="index.html" class="bt_menu">'+'Categoria de productos'+'</a>';
    let etiqueta4 = '<a href="index.html" class="bt_menu">'+'Opciones de productos'+'</a>';
    let etiqueta5 = '<a href="index.html" class="bt_menu">'+'Productos añadidos'+'</a>';
    let etiqueta6 = '<a href="index.html" class="bt_menu">'+'Categorías'+'</a>';
    let etiqueta7 = '<a href="index.html" class="bt_menu">'+'Ordenes'+'</a>';
    let etiqueta8 = '<a href="index.html" class="bt_menu">'+'Pedidos de productos'+'</a>';
    let etiqueta9 = '<a href="index.html" class="bt_menu">'+' Pedidos pagados con tarjeta de crédito'+'</a>';
    let etiqueta10 = '<a href="index.html" class="bt_menu">'+'Pedidos realizados por usuarios'+'</a>';
    let etiqueta11 = '<a href="index.html" class="bt_menu">'+'carrito de compras'+'</a>';
    let etiqueta12 = '<a href="index.html" class="bt_menu">'+'vendedores'+'</a>';
    let etiqueta13 = '<a href="index.html" class="bt_menu">'+'Opciones'+'</a>';

    barra_iz.innerHTML = etiqueta + etiqueta1 + etiqueta2 +
                         etiqueta4 + etiqueta5+ etiqueta6+ 
                         etiqueta7 + etiqueta8+ etiqueta9+ 
                         etiqueta10 + etiqueta11+ etiqueta12+ 
                         etiqueta13;


}

vinculos();


function productos(){

    let impresion = document.querySelector("#producto");

    let p1 = '<div class="caja1">'+
                '<img class="img_product" src="https://www.cnet.com/a/img/resize/bdfc7a14be904978955077effae802128048c9a7/hub/2017/06/27/5b273980-fab9-4500-af89-8b9ed322a417/apple-macbook-pro-15-inch-2017-01.jpg?auto=webp&width=768">'+'</img>'+
                '<p class="titulo_product">'+products[0].name+'</p>'+
                '<h1 class="id_product">'+'ID: '+ products[0].id+'</h1>'+
                '<p class="descripcion">'+products[0].text+'</p>'+
                '</div>' ;

    let p2 = '<div class="caja1">'+
                '<img class="img_product" src="https://i.pcmag.com/imagery/reviews/00TAx7rq0LiRrKrD8AkasG0-5..1569474600.jpg">'+'</img>'+
                '<p class="titulo_product">'+products[1].name+'</p>'+
                '<h1 class="id_product">'+'ID: '+ products[1].id+'</h1>'+ 
                '<p class="descripcion">'+products[1].text+'</p>'+'</div>';

    let p3 = '<div class="caja1">'+
                '<img class="img_product" src="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP770/iphonex.png">'+'</img>'+
                '<p class="titulo_product">'+products[2].name+'</p>'+
                '<h1 class="id_product">'+'ID: '+ products[2].id+'</h1>'+ 
                '<p class="descripcion">'+products[2].text+'</p>'+'</div>';

    let p4 = '<div class="caja1">'+
                '<img class="img_product" src="https://m.media-amazon.com/images/I/51BpIT9RYbL._AC_SX522_.jpg">'+'</img>'+
                '<p class="titulo_product">'+products[3].name+'</p>'+
                '<h1 class="id_product">'+'ID: '+ products[3].id+'</h1>'+ 
                '<p class="descripcion">'+products[3].text+'</p>'+'</div>';
    


    impresion.innerHTML = p1 + p2 + p3 + p4 ;

}


productos();


function productos1(){

    let impresion1 = document.querySelector("#producto1");

    let p5 = '<div class="caja1">'+
    '<img class="img_product" src="https://github.com/CMiranda14/img1/blob/main/s-l4iiii00.jpg?raw=true">'+'</img>'+
    '<p class="titulo_product">'+products[4].name+'</p>'+
    '<h1 class="id_product">'+'ID: '+ products[4].id+'</h1>'+ 
    '<p class="descripcion">'+products[4].text+'</p>'+'</div>';

let p6 = '<div class="caja1">'+
    '<img class="img_product" src="https://i.blogs.es/78f434/ipad-air-2020-analisis-applesfera--29/1366_2000.jpg">'+'</img>'+
    '<p class="titulo_product">'+products[5].name+'</p>'+
    '<h1 class="id_product">'+'ID: '+ products[5].id+'</h1>'+ 
    '<p class="descripcion">'+products[5].text+'</p>'+'</div>';

let p7 = '<div class="caja1">'+
    '<img class="img_product" src="https://as01.epimg.net/meristation/imagenes/2020/03/09/betech/1583788203_382215_1583788342_noticia_normal_recorte1.jpg">'+'</img>'+
    '<p class="titulo_product">'+products[6].name+'</p>'+
    '<h1 class="id_product">'+'ID: '+ products[6].id+'</h1>'+ 
    '<p class="descripcion">'+products[6].text+'</p>'+'</div>';

let p8 = '<div class="caja1">'+
    '<img class="img_product" src="https://github.com/CMiranda14/img1/blob/main/EXX-IMG-i1302482.jpg?raw=true">'+'</img>'+
    '<p class="titulo_product">'+products[7].name+'</p>'+
    '<h1 class="id_product">'+'ID: '+ products[7].id+'</h1>'+ 
    '<p class="descripcion">'+products[7].text+'</p>'+'</div>';

    impresion1.innerHTML =  p5 + p6 + p7 +p8 ;
}

productos1();


function productos2(){
    let impresion2 = document.querySelector("#producto2");

    let p9 = '<div class="caja1">'+
    '<img class="img_product" src="https://github.com/CMiranda14/img1/blob/main/4ttttttcfbfe96e9d74d64b03ace35c935c8d6.png?raw=true">'+'</img>'+
    '<p class="titulo_product">'+products[8].name+'</p>'+
    '<h1 class="id_product">'+'ID: '+ products[8].id+'</h1>'+ 
    '<p class="descripcion">'+products[8].text+'</p>'+'</div>';


let p10 = '<div class="caja1">'+
    '<img class="img_product" src="https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/desktops/optiplex-desktops/optiplex-5080/pdp/desktop-optiplex-5080-t_sff-pdp-gallery-504x350.jpg?fmt=jpg">'+'</img>'+
    '<p class="titulo_product">'+products[9].name+'</p>'+
    '<h1 class="id_product">'+'ID: '+ products[9].id+'</h1>'+ 
    '<p class="descripcion">'+products[9].text+'</p>'+'</div>';


let p11 = '<div class="caja1">'+
    '<img class="img_product" src="https://m.media-amazon.com/images/I/61wjJ27oAiL._AC_SY355_.jpg">'+'</img>'+
    '<p class="titulo_product">'+products[10].name+'</p>'+
    '<h1 class="id_product">'+'ID: '+ products[10].id+'</h1>'+ 
    '<p class="descripcion">'+products[10].text+'</p>'+'</div>';



let p12 = '<div class="caja1">'+
    '<img class="img_product" src="https://images.monoprice.com/productlargeimages/135861.jpg">'+'</img>'+
    '<p class="titulo_product">'+products[11].name+'</p>'+
    '<h1 class="id_product">'+'ID: '+ products[11].id+'</h1>'+ 
    '<p class="descripcion">'+products[11].text+'</p>'+'</div>';

    impresion2.innerHTML =  p9 + p10 + p11 +p12 ;
    
}

productos2();


function productos3(){
    let impresion3 = document.querySelector("#producto3");

let p13 = '<div class="caja1">'+
    '<img class="img_product" src="https://images.monoprice.com/productlargeimages/135911.jpg">'+'</img>'+
    '<p class="titulo_product">'+products[12].name+'</p>'+
    '<h1 class="id_product">'+'ID: '+ products[12].id+'</h1>'+ 
    '<p class="descripcion">'+products[12].text+'</p>'+'</div>';




let p14 = '<div class="caja1">'+ 
    '<img class="img_product" src="https://m.media-amazon.com/images/I/41L+6T5B9NL._AC_SY580_.jpg">'+'</img>'+
    '<p class="titulo_product">'+products[13].name+'</p>'+
    '<h1 class="id_product">'+'ID: '+ products[13].id+'</h1>'+
    '<p class="descripcion">'+products[13].text+'</p>'+'</div>';



let p15 = '<div class="caja1">'+
    '<img class="img_product" src="https://colorfy.net/wp-content/uploads/2020/09/Cowin-E7-Vs-E7-Pro-Who-Can-Come-Out-On-Top.jpg">'+'</img>'+
    '<p class="titulo_product">'+products[14].name+'</p>'+
    '<h1 class="id_product">'+ 'ID: '+ products[14].id+'</h1>'+ 
    '<p class="descripcion">'+products[14].text+'</p>'+'</div>';


    impresion3.innerHTML =  p13 + p14 + p15 ;

}

productos3();