import {Pedidos} from "./panel.js"

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
