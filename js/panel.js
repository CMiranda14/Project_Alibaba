import {Category} from "./category.js"
import {ordenes} from "./order.js"

let categorias = document.getElementById("categorias");

let title = '<h1 class="titulo">' + ' Categorias Alibaba ' +  '</h1>';


let div = '<div class="cajas">' +
                '<img src="https://github.com/MariaR17/vector/blob/main/Group.png?raw=true" class="img" style="width:90px;">' +
                '<p>' + Category[0].ID_categoria +  '</p>'+
                '<p>' + Category[0].id +  '</p>'+
            '</div>'  +
            
            '<div class="cajas">' +
                '<img src="https://github.com/MariaR17/vector/blob/main/phone.png?raw=true" class="img" style="width:40px;">' +
                '<p>' + Category[1].ID_categoria +  '</p>'+
                '<p>' + Category[1].id  +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
                '<img src="https://github.com/MariaR17/vector/blob/main/ipad.png?raw=true" class="img" style="width:90px;">' +
                '<p>' + Category[2].ID_categoria +  '</p>'+
                '<p>' + Category[2].id +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
                '<img src="https://github.com/MariaR17/vector/blob/main/Server.png?raw=true" class="img" style="width:40px;">' +
                '<p>' + Category[3].ID_categoria +  '</p>'+
                '<p>' + Category[3].id  +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
                '<img src="https://github.com/MariaR17/vector/blob/main/Monitor.png?raw=true" class="img" style="width:70px;">' +
                '<p>' + Category[4].ID_categoria +  '</p>'+
                '<p>' + Category[4].id +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
                '<img src="https://github.com/MariaR17/vector/blob/main/Wire.png?raw=true" class="img" style="width:48px;">' +
                '<p>' + Category[5].ID_categoria +  '</p>'+
                '<p>' + Category[5].id +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
                '<img src="https://github.com/MariaR17/vector/blob/main/Headphones.png?raw=true" class="img" style="width: 70px;">' +
                '<p>' + Category[6].ID_categoria +  '</p>'+
                '<p>' + Category[6].id +  '</p>'+
            '</div>'

categorias.innerHTML =  title + div; 



/*********************************************************************************************************** */

let ordenes = document.getElementById("ordenes");

let title2 = '<h1 class="titulo">' + ' Ordenes Alibaba ' +  '</h1>';
          

let items = '<div class="cajas">' +
              '<img src="https://github.com/MariaR17/vector/blob/main/img_muj.png?raw=true" alt="" class="img">' +
                '<p>' + ordenes[0].id +  '</p>'+
                '<p>' + ordenes[0].t  +  '</p>'+
                '<p>' + ordenes[0].id +  '</p>'+
                '<p>' + ordenes[0].id +  '</p>'+
                '<p>' + ordenes[0].id +  '</p>'+
                '<p>' + ordenes[0].id +  '</p>'+
                '<p>' + ordenes[0].id +  '</p>'+
                '<p>' + ordenes[0].id +  '</p>'+
                '<p>' + ordenes[0].id +  '</p>'+
            '</div>'  +

            '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/img_mujer2.png?raw=true" alt="" class="img">' +
                '<p>' + 'ID orden : 1001' +  '</p>'+
                '<p>' + 'Total de productos : 5' +  '</p>'+
                '<p>' + 'Envíos gratis: 8' +  '</p>'+
                '<p>' + 'Impuestos: 0.06' +  '</p>'+
                '<p>' + 'Total: 62.45' +  '</p>'+
                '<p>' + 'Fecha: 15/2018' +  '</p>'+
                '<p>' + 'Nombre: Carol Campbell' +  '</p>'+
                '<p>' + 'Entrega: 18/2018' +  '</p>'+
                '<p>' + 'Direccón: San Francisco, CA 96123' +  '</p>'+
            '</div>' +
            
            '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/img_3.png?raw=true" alt="" class="img">' +
                '<p>' + 'ID ordenes : 1002' +  '</p>'+
                '<p>' + 'Total de productos : 7' +  '</p>'+
                '<p>' + 'Envíos gratis: 10' +  '</p>'+
                '<p>' + 'Impuestos: 0.087' +  '</p>'+
                '<p>' + 'Total: 40.33' +  '</p>'+
                '<p>' + 'Fecha: 14/2018' +  '</p>'+
                '<p>' + 'Entrega: 17/2018' +  '</p>'+
                '<p>' + 'Nombre: Carol Campbell' +  '</p>'+
                '<p>' + 'Direccón: San Francisco, CA 96123' +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/img_3.png?raw=true" alt="" class="img">' +
                '<p>' + 'ID ordenes: 1003' +  '</p>'+
                '<p>' + 'Total de productos : 4' +  '</p>'+
                '<p>' + 'Envíos gratis: 7' +  '</p>'+
                '<p>' + 'Impuestos: 0.0925' +  '</p>'+
                '<p>' + 'Total: 50.02' +  '</p>'+
                '<p>' + 'Fecha: 17/2018' +  '</p>'+
                '<p>' + 'Entrega: 20/2018' +  '</p>'+
                '<p>' + 'Direccón: San Francisco, CA 96123' +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/img_4.png?raw=true" alt="" class="img">' +
                '<p>' + 'ID ordenes: 1004' +  '</p>'+
                '<p>' + 'Total de productos : 4' +  '</p>'+
                '<p>' + 'Envíos gratis: 7' +  '</p>'+
                '<p>' + 'Impuestos: 0.0925' +  '</p>'+
                '<p>' + 'Total: 50.02' +  '</p>'+
                '<p>' + 'Fecha: 17/2018' +  '</p>'+
                '<p>' + 'Entrega: 20/2018' +  '</p>'+
                '<p>' + 'Direccón: San Francisco, CA 96123' +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/img_5.png?raw=true" alt="" class="img">' +
                '<p>' + 'ID ordenes: 1005' +  '</p>'+
                '<p>' + 'Total de productos : 4' +  '</p>'+
                '<p>' + 'Envíos gratis: 7' +  '</p>'+
                '<p>' + 'Impuestos: 0.0925' +  '</p>'+
                '<p>' + 'Total: 50.02' +  '</p>'+
                '<p>' + 'Fecha: 17/2018' +  '</p>'+
                '<p>' + 'Entrega: 20/2018' +  '</p>'+
                '<p>' + 'Direccón: San Francisco, CA 96123' +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/img_6.png?raw=true" alt="" class="img">' +
                '<p>' + 'ID ordenes: 1005' +  '</p>'+
                '<p>' + 'Total de productos : 4' +  '</p>'+
                '<p>' + 'Envíos gratis: 7' +  '</p>'+
                '<p>' + 'Impuestos: 0.0925' +  '</p>'+
                '<p>' + 'Total: 50.02' +  '</p>'+
                '<p>' + 'Fecha: 17/2018' +  '</p>'+
                '<p>' + 'Entrega: 20/2018' +  '</p>'+
                '<p>' + 'Direccón: San Francisco, CA 96123' +  '</p>'+
            '</div>'


ordenes.innerHTML =  title2 +  items; 