import {ordenes} from "./panel.js"

let order = document.getElementById("order");

let title = '<h1 class="titulo">' + ' Ordenes Alibaba ' +  '</h1>';
          

let items = '<div class="cajas">' +
              '<img src="https://github.com/MariaR17/vector/blob/main/img_muj.png?raw=true" alt="" class="img">' +
                '<p>' + ordenes[0].id         +  '</p>'+
                '<p>' + ordenes[0].total_art  +  '</p>'+
                '<p>' + ordenes[0].Envíos     +  '</p>'+
                '<p>' + ordenes[0].impuestos  +  '</p>'+
                '<p>' + ordenes[0].Total      +  '</p>'+
                '<p>' + ordenes[0].Fecha      +  '</p>'+
                '<p>' + ordenes[0].Entrega    +  '</p>'+
                '<p>' + ordenes[0].Nombre     +  '</p>'+
                '<p>' + ordenes[0].Direccón   +  '</p>'+
            '</div>'  +

            '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/img_mujer2.png?raw=true" alt="" class="img">' +
                '<p>' + ordenes[1].id         +  '</p>'+
                '<p>' + ordenes[1].total_art  +  '</p>'+
                '<p>' + ordenes[1].Envíos     +  '</p>'+
                '<p>' + ordenes[1].impuestos  +  '</p>'+
                '<p>' + ordenes[1].Total      +  '</p>'+
                '<p>' + ordenes[1].Fecha      +  '</p>'+
                '<p>' + ordenes[1].Entrega    +  '</p>'+
                '<p>' + ordenes[1].Nombre     +  '</p>'+
                '<p>' + ordenes[1].Direccón   +  '</p>'+
            '</div>' +
            
            '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/img_3.png?raw=true" alt="" class="img">' +
                '<p>' + ordenes[2].id         +  '</p>'+
                '<p>' + ordenes[2].total_art  +  '</p>'+
                '<p>' + ordenes[2].Envíos     +  '</p>'+
                '<p>' + ordenes[2].impuestos  +  '</p>'+
                '<p>' + ordenes[2].Total      +  '</p>'+
                '<p>' + ordenes[2].Fecha      +  '</p>'+
                '<p>' + ordenes[2].Entrega    +  '</p>'+
                '<p>' + ordenes[2].Nombre     +  '</p>'+
                '<p>' + ordenes[2].Direccón   +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/img_3.png?raw=true" alt="" class="img">' +
                '<p>' + ordenes[3].id         +  '</p>'+
                '<p>' + ordenes[3].total_art  +  '</p>'+
                '<p>' + ordenes[3].Envíos     +  '</p>'+
                '<p>' + ordenes[3].impuestos  +  '</p>'+
                '<p>' + ordenes[3].Total      +  '</p>'+
                '<p>' + ordenes[3].Fecha      +  '</p>'+
                '<p>' + ordenes[3].Entrega    +  '</p>'+
                '<p>' + ordenes[3].Nombre     +  '</p>'+
                '<p>' + ordenes[3].Direccón   +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/img_4.png?raw=true" alt="" class="img">' +
                '<p>' + ordenes[4].id         +  '</p>'+
                '<p>' + ordenes[4].total_art  +  '</p>'+
                '<p>' + ordenes[4].Envíos     +  '</p>'+
                '<p>' + ordenes[4].impuestos  +  '</p>'+
                '<p>' + ordenes[4].Total      +  '</p>'+
                '<p>' + ordenes[4].Fecha      +  '</p>'+
                '<p>' + ordenes[4].Entrega    +  '</p>'+
                '<p>' + ordenes[4].Nombre     +  '</p>'+
                '<p>' + ordenes[4].Direccón   +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/img_5.png?raw=true" alt="" class="img">' +
                '<p>' + ordenes[5].id         +  '</p>'+
                '<p>' + ordenes[5].total_art  +  '</p>'+
                '<p>' + ordenes[5].Envíos     +  '</p>'+
                '<p>' + ordenes[5].impuestos  +  '</p>'+
                '<p>' + ordenes[5].Total      +  '</p>'+
                '<p>' + ordenes[5].Fecha      +  '</p>'+
                '<p>' + ordenes[5].Entrega    +  '</p>'+
                '<p>' + ordenes[5].Nombre     +  '</p>'+
                '<p>' + ordenes[5].Direccón   +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/img_6.png?raw=true" alt="" class="img">' +
                '<p>' + ordenes[6].id         +  '</p>'+
                '<p>' + ordenes[6].total_art  +  '</p>'+
                '<p>' + ordenes[6].Envíos     +  '</p>'+
                '<p>' + ordenes[6].impuestos  +  '</p>'+
                '<p>' + ordenes[6].Total      +  '</p>'+
                '<p>' + ordenes[6].Fecha      +  '</p>'+
                '<p>' + ordenes[6].Entrega    +  '</p>'+
                '<p>' + ordenes[6].Nombre     +  '</p>'+
                '<p>' + ordenes[6].Direccón   +  '</p>'+
            '</div>'


order.innerHTML =  title +  items; 